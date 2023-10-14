//Users
export const SET_USERS = 'SET_USERS';
export const SET_USER_BY_ID = 'SET_USER_BY_ID';
export const DELETE_USER = 'DELETE-USER';
export const UPDATE_USER = 'UPDATE_USER';

//Products
export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        value: product
    }
}


export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCTS_BY_ID = 'SET_PRODUCT_BY_ID';
export const DELETE_PRODUCT = 'DELETE-PRODUCT';
export const deleteProduct = (index) => {
    return {
        type: 'DELETE_PRODUCT',
        value: index
    }
}

// export const fetchProducts = () => {
//     return (dispatch) => {
//         fetch("http://localhost:3306/Products")
//         .then(response => response.json())
//         .then(data => { 
//             console.log(data)
//             const action = {
//                 type: 'FETCH_PRODUCTS', 
//                 value: data
//             }
//             dispatch(action)
//         })
//         .catch(error => console.error("API fetch failed", error))
//     }
// }

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3306/Products")
        const data = await response.json()
        dispatch({
            type: 'FETCH_PRODUCTS', 
            value: data
        })
    }
}




//Carts
export const SET_CARTS = 'SET_CARTS';
export const SET_CARTS_BY_USER_ID = 'SET_CARTS_BY_USER_ID';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

