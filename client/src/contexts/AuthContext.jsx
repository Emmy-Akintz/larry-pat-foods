import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        case 'ADD_ITEM':
            return { user: { ...state.user, cart: action.payload } }
        // case 'REMOVE_ITEM':
        // return { user: { ...state.user, cart: action.payload } }
        case 'CLEAR_CART':
            state.user.cart = []
            return state
        default:
            return false
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    // console.log(state);

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