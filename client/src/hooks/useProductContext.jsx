import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

export const useProductContext = () => {
    const context = useContext(ProductContext)

    if (!context) {
        throw Error ('useWorkoutsProduct must be used inside a ProductsContextProvider')
    }

    return context
}