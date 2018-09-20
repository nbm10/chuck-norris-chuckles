import reducer from '../store/reducers/category';
import * as actionTypes from '../store/actions/actionTypes';

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    });
  });
  it('should fetch categories', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      categories: []
    })).toEqual({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    });
  });
  it('should initiate fetch request', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.FETCH_CATEGORIES_START,
    })).toEqual({
      loading: true,
      categories: [],
      joke: null,
      error: false,
    });
  })
  ;it('should report failed request', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.FETCH_CATEGORIES_FAIL,
      error: {}
    })).toEqual({
      loading: false,
      categories: [],
      joke: null,
      error: true,
    });
  })
  ;it('should fetch a random joke', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.SELECTED_CATEGORY_START,
      category: 'category'
    })).toEqual({
      loading: true,
      categories: [],
      joke: null,
      error: false,
    });
  })
  ;it('should return a joke', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.SELECTED_CATEGORY_SUCCESS,
      joke: {}
    })).toEqual({
      loading: false,
      categories: [],
      joke: {},
      error: false,
    });
  })
  ;it('should report error', () => {
    expect(reducer({
      loading: false,
      categories: [],
      joke: null,
      error: false,
    }, {
      type: actionTypes.SELECTED_CATEGORY_FAIL,
      error: {}
    })).toEqual({
      loading: false,
      categories: [],
      joke: null,
      error: true,
    });
  })
});