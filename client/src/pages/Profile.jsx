import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()

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
      <h1>PROFILE</h1>
      {user && (
        <div>
          <div>Welcome {user.firstName}</div>
          <div>Email: {user.email}</div>
          {user.cart && (
            <div>{user.cart}</div>
          )}
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Profile