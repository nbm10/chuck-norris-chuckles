import React from 'react';
import Category from '../Category/Category';
import './CategoryList.css';

const CategoriesList = ({ categories, selectedCategory, opened }) => (
    <div>
      <ul className="menu">
        { categories.map(
          (category, index) => (
            <Category
              key={index}
              title={category}
              category={() => selectedCategory(category)}
              selected={opened}
            />))}
      </ul>
    </div>
);

export default CategoriesList;