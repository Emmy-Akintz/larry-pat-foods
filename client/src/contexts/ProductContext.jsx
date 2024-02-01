import { createContext, useReducer, useEffect } from "react";

export const ProductContext = createContext()

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            }
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter((w) => w._id !== action.payload._id)
            }
        case 'PRODUCT_DELETED':
            return {
                ...state,
                productDeleted: true
            }
        case 'UPDATE_PRODUCT':
            return {
                products: state.products.map(product => product._id === action.payload._id ? action.payload : product)
            }
        default:
            return state
    }
}

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, {
        products: null,
        productDeleted: false
    })

    console.log('products: ' + state);

    return (
        <ProductContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}