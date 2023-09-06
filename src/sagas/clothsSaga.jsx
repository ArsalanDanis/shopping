import { put, takeEvery, call } from 'redux-saga/effects';

// Fetch products from the API
function* fetchProducts() {
  try {
    const response = yield call(fetch, 'https://fakestoreapi.com/products');
    const data = yield call([response, 'json']); // Parse response JSON

    yield put({ type: 'SET_PRODUCTS', payload: data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
function* searchClothsProducts(datas) {
  try {
    let results = yield call(fetch, `https://fakestoreapi.com/products?q=${datas.query}`);
     results = yield call([results, 'json']); // Parse response JSON
    console.log("DATA SEARCH",results)
    yield put({ type: 'SET_PRODUCTS', payload: results });
  } catch (error) {
    console.error('Error Searching products:', error);
  }
}

// Watcher saga
export function* clothsSaga() {
  yield takeEvery('FETCH_PRODUCTS', fetchProducts);
  yield takeEvery('SEARCH_PRODUCTS', searchClothsProducts);
}