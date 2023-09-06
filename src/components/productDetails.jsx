import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddToCart, removeToCart } from '../actions/productActions';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    let Navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const handleBtnClick = () => {
        dispatch(AddToCart(product));
        Navigate('../products');
      }
    useEffect(() => {
        // Fetch product details from the API based on the 'id' parameter
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <div className="main-container bg-[#f1e6e8] p-3">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md m-2 shadow-black">
                <h2 className="text-3xl font-semibold mb-2 font-serif">Product Details</h2>
                <img src={product.images[0]} alt={product.name} className="w-full h-[280px] mb-4 hover:scale-105 transition-transform transform" />
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-[red] text-lg mb-2"><i>{product.description}</i></p>
                <p className="text-blue-600 text-lg font-extrabold mb-2">Price: ${product.price}</p>
                <p className="text-gray-700 text-lg mb-2">Category: {product.category}</p>
                <p className="text-[#887820] text-lg mb-2">Stock: {product.stock}</p>
                <div className='flex gap-2 mt-2'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2' onClick={handleBtnClick}>Add to Cart</button>
                    <button className='bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2' onClick={() => dispatch(removeToCart(product.id))}>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;