import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

function ManagerDashbord() {
  const {user} = useAuthContext()

  return (
    <div>
      <h1>Manager Dashbord</h1>
      {user ? <Link to='/profile' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">PROFILE</Link> : <Link to='/login' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">LOGIN</Link>}
    </div>
  )
}

export default ManagerDashbord