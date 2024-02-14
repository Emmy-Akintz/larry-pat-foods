import React from 'react'
import { useAdminContext } from '../../../hooks/useAdminContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import '../../../App.css'
import { Link } from 'react-router-dom'

function AdminDetails({ admin }) {
    const { dispatch } = useAdminContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user || !user.user.role === "manager") {
            prompt("You aren't a manager!")
            return
        }
        const response = await fetch('http://localhost:2500/api/user/delete-user/' + admin._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_ADMIN', payload: json })
            dispatch({ type: 'ADMIN_DELETED' })
        }
    }

    return (
        <div className="admin-details mt-4">
            <div className='rounded-xl p-8 w-[250px] m-auto bg-green-100' key={admin._id}>
                <h4 className='font-bold'>{admin.firstName} {admin.lastName}</h4>
                <p><span className="font-bold">Email: </span>{admin.email}</p>
                <p><span className="font-bold">Role: </span>{admin.role}</p>
                <br />
                <Link to={`/admin-update/${admin._id}`} className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">Update</Link>
                <span className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-2 cursor-pointer' onClick={handleClick}>Delete</span>
            </div>
        </div>
    )
}

export default AdminDetails