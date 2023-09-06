import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductPriceList = () => {
  const Navigation = useNavigate();
  const cartProducts = useSelector((state) => state.cart);
  const [cart, setCart] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setCart({ ...cart, [productId]: quantity });
  };

  const calculateTotal = (product) => {
    const quantity = cart[product.id] || 0;
    const discountedPrice = (product.price * (100 - product.discountPercentage)) / 100;
    return discountedPrice * quantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.forEach((product) => {
      totalPrice += calculateTotal(product);
    });
    return totalPrice;
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-semibold mb-4">Product Prices</h1>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Discount Percentage</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4">{product.title}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.discountPercentage}%</td>
              <td className="py-2 px-4">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={cart[product.id] || ''}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="w-16 px-2 py-1 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4">${calculateTotal(product).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-[pink] p-2 text-lg font-serif font-extrabold text-center">Total Price: ${calculateTotalPrice().toFixed(2)}</div>
      <button
        onClick={() => {
          Navigation("/login");
          alert('Please log in first to proceed with payment.')
        }} // Replace with the appropriate route
        className="bg-blue-500 m-3 relative left-[500px] text-center hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex "
      >
        Proceed to Payment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductPriceList;