import { createContext, useReducer, useEffect } from 'react'

export const AdminContext = createContext()

export const adminReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADMINS':
            return {
                admins: action.payload
            }
        case 'CREATE_ADMIN':
            return {
                admins: [action.payload, ...state.admins]
            }
        case 'DELETE_ADMINS':
            return {
                admins: state.admins.filter((w) => w._id !== action.payload._id)
            }
        case 'ADMIN_DELETED':
            return {
                ...state,
                adminDeleted: true
            }
        case 'UPDATE_ADMINS':
            return {
                admins: state.admins.map(admin => admin._id === action.payload._id ? action.payload : admin)
            }
        default:
            return state
    }
}

export const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, {
        admins: null,
        adminDeleted: false
    })

    console.log('admins: ' + state.admins);

    return (
        <AdminContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AdminContext.Provider>
    )
}