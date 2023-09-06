import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../actions/productActions';
import { removeToCart } from '../actions/productActions';



const ClothsCard = ({ product }) => {
  
    const dispatch = useDispatch()
  return (
    <div className="text-black product-card mt-5 rounded-[15px] flex flex-col justify-center items-center bg-rgb(4, 95, 62) border-[6px] border-[black]">
      <img
  src={product.image}
  alt={product.title}
  className="rounded-md group hover:scale-110 transition-transform transform"
  style={{ height: "150px", width: "150px" }}
/>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {/* <div className=' flex gap-2 mt-2'>
    <button className=' bg-black text-white rounded-md  p-2' onClick={()=>dispatch(AddToCart(product))}>Add to Cart</button> 
    <button className=' bg-black text-white rounded-md  p-2' onClick={()=>dispatch(removeToCart(product.id))}>Remove from Cart</button> 
    </div> */}
    <button
      className=" m-2 bg-[#310909] text-white px-4 py-2 rounded-lg flex items-center"
    >
      Product Details
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

export default ClothsCard;