import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  loading: false,
  categories: [],
  joke: null,
  error: false,
};

const fetchCategoriesStart = ( state, action ) => {
  return updateObject( state, { loading: true } );
};

const fetchCategoriesSuccess = ( state, action ) => {
  return updateObject( state, {
    categories: action.categories,
    loading: false
  } );
};

const fetchCategoriesFail = ( state, action ) => {
  return updateObject( state, { error: true } );
};

const selectedCategoryStart = ( state, action ) => {
  return updateObject( state, {
    loading: true,
    joke: null
  } );
};

const selectedCategorySuccess = ( state, action ) => {
  return updateObject( state, {
    joke: action.joke,
    loading: false,
  } );
};

const selectedCategoryFail = ( state, action ) => {
  return updateObject( state, { error: true } );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
      case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
      case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
      case actionTypes.SELECTED_CATEGORY_START: return selectedCategoryStart(state, action);
      case actionTypes.SELECTED_CATEGORY_SUCCESS: return selectedCategorySuccess(state, action);
      case actionTypes.SELECTED_CATEGORY_FAIL: return selectedCategoryFail(state, action);
      default: return state;
    }
};

export default reducer;