import React, { useEffect, useState } from 'react'
import { useAdminContext } from '../../../hooks/useAdminContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import '../../../App.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function UpdateAdmin() {
    const { dispatch } = useAdminContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const { id } = useParams()
    const [Admin, setAdmin] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('ABCabc123!')
    const [Role, setRole] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAdmins = async () => {
            const response = await fetch(`http://localhost:2500/api/user/get-admins/${id}`)
            const json = await response.json()
            setAdmin(json)
            setFirstName(json.firstName)
            setLastName(json.lastName)
            setEmail(json.email)
            setPassword(json.password)
            setRole(json.role)
        }

        fetchAdmins()
    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (!user && !user.user.role === "manager") {
            setError('You must be logged in as a manager')
            prompt('You must be logged in as a manager!')
            navigate('/login')
            return
        }

        const updatedAdmin = { FirstName, LastName, Email, Password, Role }

        const response = await fetch(`http://localhost:2500/api/product/${product._id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedAdmin),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
            // setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            navigate('/manager-admin')
            // setEmptyFields([])
            // console.log('new product added!', json);
            dispatch({ type: 'UPDATE_ADMIN', payload: json })
            setIsLoading(false)
        }
    }

    return (
        <form className="create my-4 w-[350px] h-[320px] rounded-xl bg-green-100 m-auto" onSubmit={handleUpdate}>
            <Link to='/manager-product' className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
                <FaBackward />
            </Link>
            <h3 className='font-bold'>Update Admin</h3>
            <br />

            <label>FirstName: </label>
            <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={FirstName}
                className='border rounded px-2'
            />
            <br />
            <br />

            <label>LastName: </label>
            <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
                className='border rounded px-2'
            />
            <br />
            <br />

            <label>Price in naira: </label>
            <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='border rounded px-2'
            />
            <br />
            <br />

            <label>Stock Quantity: </label>
            <input
                type="number"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                className='border rounded px-2'
            />
            <br />
            <br />

            <button disabled={isLoading} className={isLoading ? 'bg-green-300 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4'}>Update Product</button>
            {error && <div className='error text-red-500'>{error}</div>}
        </form>
    )
}

export default UpdateAdmin