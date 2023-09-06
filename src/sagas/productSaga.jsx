import { put, takeLatest, all } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/productActions';

function* fetchProducts() {
  try {
    const response = yield fetch('https://dummyjson.com/products');
    const products = yield response.json();
    
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}