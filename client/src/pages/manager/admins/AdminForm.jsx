import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminContext } from '../../../hooks/useAdminContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import '../../../App.css'

import { FaTimes } from 'react-icons/fa'

function AdminForm() {
    const { dispatch } = useAdminContext()
    const { user } = useAuthContext()

    const navigate = useNavigate()

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('ABCabc123!')
    const [Role, setRole] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(false)

        if (!user && !user.user.role === "manager") {
            setError('You must be logged in as a manager')
            prompt('You must be logged in as a manager!')
            navigate('/login')
            return
        }
        // console.log(FirstName, LastName, Email, Password, Role);

        if (Role === "admin" || Role === "manager") {
            const response = await fetch('http://localhost:2500/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({
                    firstName: FirstName,
                    lastName: LastName,
                    email: Email,
                    password: Password,
                    role: Role
                }),
            })

            const json = await response.json()

            if (!response.ok) {
                console.log(json)
                setError(json.message)
                setIsLoading(false)
            }
            if (response.ok) {
                console.log(json);
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('ABCabc123!')
                setRole('')
                setError(null)
                dispatch({ type: 'CREATE_ADMIN', payload: json })
                setIsLoading(false)
            }
        } else {
            setError("You are yet to select a role!")
            setIsLoading(false)
        }
    }

    return (
        <form className="create my-4 w-[350px] h-[320px] rounded-xl bg-green-100 m-auto" onSubmit={handleSubmit}>
            <h3 className='font-bold'>Add a new admin or manager</h3>
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
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                className='border rounded px-2'
            />
            <br />
            <br />

            <label>Password: </label>
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                className='border rounded px-2'
            />
            <br />
            <br />

            <label>Role: </label>
            <select
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                className='border rounded px-2'
            >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
            </select>
            <br />
            <br />
            <button type="reset" title='Clear form'><FaTimes /></button>
            <br />
            <br />
            <br />

            <button disabled={isLoading} className={isLoading ? 'bg-green-300 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4'}>Add Manager/Admin</button>
            {error && <div className='text-red-500'>{error}</div>}
        </form>
    )
}

export default AdminForm