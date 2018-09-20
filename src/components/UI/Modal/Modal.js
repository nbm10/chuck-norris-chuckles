import React, { Component } from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
    console.log('[Modal] WillUpdate');
  }

  render () {
    return (
        <React.Fragment>
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          <div
            className={(this.props.show) ? 'modal modal--open' : 'modal'}>
            {this.props.children}
          </div>
        </React.Fragment>
    )
  }
}

export default Modal;