import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

const serverLink = import.meta.env.VITE_SERVER_LINK

function Profile() {
  const { logout } = useLogout()
  const { user, dispatch } = useAuthContext()
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // console.log(user.cart);

  const handleClick = () => {
    logout()
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  const clearCart = async () => {
    setIsLoading(true)
    setError('')

    const response = await fetch(`${serverLink}/api/user/clear-cart/${user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.message)
      // console.log(json.message);
    }
    if (response.ok) {
      dispatch(({ type: 'CLEAR_CART' }))
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
        <FaBackward />
      </button>
      <h1>PROFILE</h1>
      {user && (
        <div>
          <div>Welcome {user.user.firstName}</div>
          <div>Email: {user.user.email}</div>
          {user.cart && (
            <div>
              {/* {error && <span className='border border-red-500 p-2'>{error}</span>} */}
              <span>{user.cart.length}</span>
              <br />
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          )}
          <br />
          <br />
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Profile