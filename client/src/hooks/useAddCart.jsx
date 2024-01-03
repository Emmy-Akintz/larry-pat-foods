import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useAddCart = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user, dispatch } = useAuthContext()

    const addCart = async (cart) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`http://localhost:2500/api/user/add-item/${user._id}/${product._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}