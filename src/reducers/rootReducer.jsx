// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import clothsReducer from './clothsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  cloths: clothsReducer,
  // Add more reducers here if needed
});

export default rootReducer;