import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

export const useProductContext = () => {
    const context = useContext(ProductContext)

    if (!context) {
        throw Error ('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}