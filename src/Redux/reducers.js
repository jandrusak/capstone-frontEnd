import { combineReducers } from 'redux'

const users = (state = [], action) => {
    switch(action.type) {
        case 'SET_USERS':
            return action.payload;
        case 'DELETE_USER':
            return state.filter(user => user.user_id !== action.payload);
        case 'UPDATE_USER':
                return state.map(user => user.user_id === action.payload.user_id ? action.payload : user);
        default:
            return state
    }
}

const products = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'SET_PRODUCTS':
            return action.payload;
        case 'UPDATE_PRODUCT':
                return state.filter(product => product.product_id !== action.payload);
        case 'DELETE_PRODUCT':
            const products = [ ...state ]
            products.splice(action.value, 1)
            return products ;
        case 'FETCH_PRODUCTS':
            return action.value
         default:
            return state
        case 'SET_PRODUCT_BY_ID':
            const productIndex = state.findIndex(prod => prod.product_id === action.payload.product_id);
            if (productIndex >= 0) {
                const newState = [...state];
                newState[productIndex] = action.payload;
                return newState
            } else {
                return [...state, action.payload];
            }
    }
}





const carts = (state = [], action) => {
    switch(action.type) {
        case 'SET_CARTS':
            return action.payload;
        case 'DELETE_PRODUCTS_FROM_CART':
            return state.filter(cart => !(cart.user_id ===action.userId && cart.product_id === action.productId));
        case 'ADD_PRODUCT_TO_CART':
                if (state.some(CartItem => CartItem.product_id === action.payload.product_id)) {
                    return state
                } 
                return [...state, action.payload]
        default:
            return state
    }
};

export default combineReducers({ users, products, carts})

