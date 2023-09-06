import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../actions/productActions';
import { removeToCart } from '../actions/productActions';



const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  // const item={
  //   name:"I-phone",
  //   color:"blue",
  //   price: 150000,

  // }
  return(
    <>
    <div className=" border-l-[10px] border-b-[10px] border-[#1c582b] product-card  rounded-md flex flex-col justify-center items-center h-[500px]">
    <img src={product.images[0]} alt={product.name} style={{height:"150px",width:"150px"}}  className="rounded-md group hover:scale-110 transition-transform transform" />
    <h2 className=' m-2 font-serif text-[20px] text-[#293810]'>{product.title}</h2>
    <p className=' font-extrabold text-[navy]'>Price: ${product.price}</p>
    <p className=' text-[red] m-2'><i>{product.description}</i></p>
    <div className=' flex gap-2 mt-2'>
    {/* <button className=' bg-black text-white rounded-md  p-2' onClick={()=>dispatch(AddToCart(product))}>Add to Cart</button> 
    <button className=' bg-black text-white rounded-md  p-2' onClick={()=>dispatch(removeToCart(product.id))}>Remove from Cart</button>  */}
    <button
      className="bg-[#358a47] hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
    >
      Check the Product Details
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
  </div>

  </>
     )
  };

export default ProductCard; 