import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../actions/productActions';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { SubFooter } from './Footer';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  console.log("pro", products)

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="contain">


      <div className="product-list">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h29/hfb/30721079836702/Popular-Brands_strips-web_210823.jpg" alt="" />
        {products.map((product) => (
          <div className="list" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          </div>
        ))}
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default ProductList;