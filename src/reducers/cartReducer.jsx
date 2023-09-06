import { ADD_TO_CART } from "../actions/productActions"
import { REMOVE_TO_CART } from "../actions/productActions"


const cartReducer = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...data, action.payload]
        case REMOVE_TO_CART:
            console.log("remove from cart", action)
            const remain = data.filter(item => item.id !== action.payload);
            console.log("remain", remain)
            return [...remain]
        default:
            return data;
    }
}

export default cartReducer;