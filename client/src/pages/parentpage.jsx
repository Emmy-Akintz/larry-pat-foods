import React, {
  useEffect
} from 'react'

import Home from '../pages/client/home'
import About from '../pages/client/about'
import Products from '../pages/client/products'
import Review from '../pages/client/review'
import Contact from '../pages/client/contact'

import {
  Link,
   useNavigate
} from 'react-router-dom'

import { FaArrowAltCircleUp, FaShoppingCart } from 'react-icons/fa'
import '../App.css'

import { useAuthContext } from '../hooks/useAuthContext'
import { IconContext } from 'react-icons'

function Parentpage() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      if (user.role === "manager") {
        navigate('/manager-dashbord')
      } else if (user.role === "admin") {
        navigate('/admin-dashbord')
      }
    }
  }, [user])

  return (
    <>
      <div className="h-auto">
        <Home />
        <About />
        <Products />
        <Review />
        <Contact />
        {user ? <Link to='/profile' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">PROFILE</Link> : <Link to='/login' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">LOGIN</Link>}
        {user && <Link to='/' className="absolute top-2 right-32 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm h-[40px]">
          <span className='relative left-4 top-2 text-black bg-green-500 p-0.5 rounded-xl'>{user.cart.length}</span>
          <IconContext.Provider value={{ color: 'black' }}>
            <FaShoppingCart />
          </IconContext.Provider>
        </Link>}
        <a href='#top' className='back-to-top right-4 bottom-4 p-4 bg-green-600 hover:bg-green-500 rounded fixed justify-center w-12'>
          <FaArrowAltCircleUp />
        </a>
      </div>
    </>
  )
}

export default Parentpage