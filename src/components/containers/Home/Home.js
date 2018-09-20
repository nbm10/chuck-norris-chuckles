import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';
import Description from '../../Description/Description';
import * as actions from '../../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import axios from '../../../axios';
import Spinner from '../../UI/Spinner/Spinner';
import Joke from '../../Joke/Joke';
import CategoriesList from '../../CategoriesList/CategoriesList';
import Logo from '../../../assets/images/332695.png';
import './Home.css';

export class Home extends Component {
  state = {
    selected: false
  };

  componentDidMount() {
    this.props.onFetchCategories();
  }

  openHandler = () => {
    this.setState({ selected: true });
  };

  handleCloseModal = () => {
    this.setState({ selected: false });
  };

  render() {

    let joke = this.props.error ?  <p className="error"> Oh Noes! seems like Chuck isn't around right now 😢</p> : <Spinner />;
    let categories = this.props.error ?  <p className="error"> Oh Noes! seems like Chuck isn't around right now 😢</p> : <Spinner />;

    if (this.props.joke) {
      joke = (<Joke joke={this.props.joke.value}/>);
    }

    if (this.props.categories) {
      categories = (<CategoriesList
          categories={this.props.categories}
          opened={this.openHandler}
          selectedCategory={this.props.onSelectedCategory}/>);
    }

    return (
      <div className="container">
        <div className="header">
          <img className="logo" src={Logo} alt="Logo"/>
        </div>
        <div className="content">
          <Modal show={this.state.selected} modalClosed={this.handleCloseModal}>
            {joke}
          </Modal>
          <Description />
          {categories}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  loading: state.loading,
  joke: state.joke,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onSelectedCategory: (category) => dispatch(actions.selectedCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));