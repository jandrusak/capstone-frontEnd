//Users
export const SET_USERS = 'SET_USERS';
export const SET_USER_BY_ID = 'SET_USER_BY_ID';
export const DELETE_USER = 'DELETE-USER';
export const UPDATE_USER = 'UPDATE_USER';

//Products
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCTS_BY_ID = 'SET_PRODUCT_BY_ID';
export const DELETE_PRODUCT = 'DELETE-PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';


export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        value: product
    }
}
export const deleteProduct = (index) => {
    return {
        type: 'DELETE_PRODUCT',
        value: index
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch("https://sourcingmagic-backend.onrender.com/Products")
        const data = await response.json()
        dispatch({
            type: 'FETCH_PRODUCTS', 
            value: data
        })
    }
}

export const fetchProductById = (productId) => {
    return async (dispatch) => {
        const response = await fetch(`https://sourcingmagic-backend.onrender.com/Products/${productId}`)
        const data = await response.json();
        dispatch({
            type: 'SET_PRODUCT_BY_ID',
            payload: data
        });
    }
}



//Carts
export const SET_CARTS = 'SET_CARTS';
export const SET_CARTS_BY_USER_ID = 'SET_CARTS_BY_USER_ID';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';


export const addToCart = (productId) => (
    {
        type: ADD_PRODUCT_TO_CART,
        payload: { 
            // user_id: userId, 
            product_id: productId 
        }
});

export const addItemToCart = (item) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: item,
    });
};
// export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const initiatePayment = () => (dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();

    if (!userInfo) {
        window.location.href = '/login';
    } else {
        window.location.href = '/payment';
    }
};