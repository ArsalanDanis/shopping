import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ClothsCard from './clothsCard';

const ClothsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cloths.items);
console.log("Cloths",products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ClothsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ClothsList;