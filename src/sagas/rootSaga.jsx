import { all } from 'redux-saga/effects';
import productSaga from './productSaga';
import { clothsSaga } from './clothsSaga';

export default function* rootSaga() {
  yield all([
    productSaga(),clothsSaga()
    // Add more sagas here if needed
  ]);
}