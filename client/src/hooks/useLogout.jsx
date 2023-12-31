import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {

        localStorage.removeItem('larry-pat-user')

        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}