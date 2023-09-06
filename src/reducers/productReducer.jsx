import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    products: {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    },
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;