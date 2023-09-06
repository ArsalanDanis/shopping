export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const AddToCart=(payload)=>{
  console.log("ACTION CALLLED",payload)
  return {
    type: ADD_TO_CART,
    payload,
  }
}

export const removeToCart=(payload)=>{
  console.log("ACTION CALLLED",payload)
  return {
    type: REMOVE_TO_CART,
    payload,
  }
}

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
});

export const setProducts = products => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const searchProducts = (query) => ({
  type: 'SEARCH_PRODUCTS',
  query,
});