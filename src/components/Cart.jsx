
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductPriceList from "./productPrice";
import { removeToCart } from "../actions/productActions";

const Cart = () => {
    const navigate = useNavigate();
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeToCart(itemId));
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Shopping Cart Details</h1>
            {cartProducts.length === 0 ? (
                <div className="flex justify-center items-center h-40 gap-x-6">
                    <h1 className="text-xl text-gray-600">Your cart is empty. Please select items to add to it.</h1>
                    <button
                        onClick={() => navigate("/products")} // Replace with the appropriate route
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        Go To Products Page
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
            ) : (
                <div className="w-full max-w-screen-lg mx-auto">
                    <table className="w-full border bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4">Title</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4">Image</th>
                                <th className="py-3 px-4">Price</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="py-3 px-4">{item.title}</td>
                                    <td className="py-3 px-4">{item.category}</td>
                                    <td className="py-3 px-4">
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    </td>
                                    <td className="py-3 px-4">${item.price}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <ProductPriceList />
        </div>
    );
}

export default Cart;