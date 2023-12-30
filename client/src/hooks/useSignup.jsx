import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate()

    const signup = async (email, password, firstName, lastName, phone) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:2500/api/user/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password, firstName, lastName, phone })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(error.message)
        }
        if (response.ok) {
            navigate('/login')

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}