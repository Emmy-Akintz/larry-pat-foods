import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function Profile() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  // console.log(user.cart);

  const handleClick = () => {
    logout()
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  return (
    <div>
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
        <FaBackward />
      </button>
      <h1>PROFILE</h1>
      {user && (
        <div>
          <div>Welcome {user.firstName}</div>
          <div>Email: {user.email}</div>
          {user.cart && (
            <div>{user.cart.length}</div>
          )}
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Profile