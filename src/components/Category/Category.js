import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';


const Category = ({ title, category, selected }) => (
    <li className="menu__item" onClick={category}>
      <span className="menu__item-name" onClick={selected}>{ title }</span>
      <a className="menu__item-label" onClick={selected}>
        <span className="fa fa-circle-o"/>
      </a>
    </li>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired,
};

export default Category;