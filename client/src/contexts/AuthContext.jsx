import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        case 'ADD_ITEM':
            const cartItems = Object.values(action.payload.cart);
            return { ...state, cart: [...state.cart, ...cartItems] }
        case 'REMOVE_ITEM':
            return { ...state, cart: state.cart.filter(item => item !== action.payload.cart) }
        case 'CLEAR CART':
            return { ...state, cart: [] }
        default:
            return false
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null, cart: [] })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('larry-pat-user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    // console.log('AuthContext State: ', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}