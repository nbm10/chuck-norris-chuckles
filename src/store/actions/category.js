import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START,
  }
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories
  }
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  }
};


export const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
      axios.get('/categories')
        .then(res => {
          console.log(res.data);
          dispatch(fetchCategoriesSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchCategoriesFailed(err));
        })
  }
};


export const selectedCategoryStart = (category) => {
  return {
    type: actionTypes.SELECTED_CATEGORY_START,
    category: category
  }
};

export const selectedCategorySuccess = (joke) => {
  return {
    type: actionTypes.SELECTED_CATEGORY_SUCCESS,
    joke: joke
  }
};

export const selectedCategoriesFailed = (error) => {
  return {
    type: actionTypes.SELECTED_CATEGORY_FAIL,
    error: error
  }
};

export const selectedCategory = (category) => {
  return dispatch => {
    dispatch(selectedCategoryStart(category));
    axios.get(`/random?category=${category}`)
      .then(res => {
        dispatch(selectedCategorySuccess(res.data));
      })
      .catch(err => {
        dispatch(selectedCategoriesFailed(err));
      });
  };
};