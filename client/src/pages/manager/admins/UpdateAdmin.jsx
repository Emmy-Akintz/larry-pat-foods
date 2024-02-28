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
    // const [Password, setPassword] = useState('ABCabc123!')
    const [Role, setRole] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAdmins = async () => {
            const response = await fetch(`http://localhost:2500/api/user/get-admin/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            setAdmin(json)
            setFirstName(json.firstName)
            setLastName(json.lastName)
            setEmail(json.email)
            // setPassword(json.password)
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

        const updatedAdmin = {
            FirstName, LastName, Email,
            // Password,
            Role
        }

        const response = await fetch(`http://localhost:2500/api/user/update-admin/${Admin._id}`, {
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
            <Link to='/manager-admins' className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
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

            <label>Email: </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                className='border rounded px-2'
            />
            <br />
            <br />

            {/* <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                className='border rounded px-2'
            />
            <br />
            <br /> */}

            <label>Role: </label>
            <select
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                className='border rounded px-2'
            >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
            </select>
            <br />
            <br />
            <br />

            <button disabled={isLoading} className={isLoading ? 'bg-green-300 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4'}>Update Product</button>
            {error && <div className='error text-red-500'>{error}</div>}
        </form>
    )
}

export default UpdateAdmin