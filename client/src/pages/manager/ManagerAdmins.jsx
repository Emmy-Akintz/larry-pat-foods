import React, { useEffect } from 'react'
import { useAdminContext } from '../../hooks/useAdminContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../App.css'

import AdminDetails from './admins/AdminDetails'
import AdminForm from './admins/AdminForm'
import { Link, useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function ManagerAdmins() {
  const { admins, dispatch, adminDeleted } = useAdminContext()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAdmins = async () => {
      const response = await fetch('http://localhost:2500/api/user/get-admins', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        // Filter out the current user from the list of admins
        const filteredAdmins = json.filter(admin => admin._id !== user._id);
        dispatch(({ type: 'SET_ADMINS', payload: filteredAdmins }))
      }
    }

    if (user && user.user.role === "manager") {
      fetchAdmins()
    }
  }, [dispatch, user, adminDeleted, admins])

  return (
    <div className="">
      <Link to='/manager-dashbord' className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
        <FaBackward />
      </Link>
      <h3 className='font-bold text-2xl'>ADMIN FORMS</h3>
      <p className='font-light'>Shows both admin and manager</p>
      <br />
      <br />
      <div className="md:flex lg:flex lg:w-[1300px] justify-between m-[auto]">
        <AdminForm />
        <div className='manager-product lg:mr-28 grid md:grid lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          {admins && admins.map((admin) => (
            <AdminDetails key={admin._id} admin={admin} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManagerAdmins