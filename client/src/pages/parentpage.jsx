import React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import Review from '../pages/review'
import Contact from '../pages/contact'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import '../App.css'

import { useAuthContext } from '../hooks/useAuthContext'

function Parentpage() {
  const { user } = useAuthContext()

  console.log(user);

  return (
    <>
      <div className="h-auto">
        <Home />
        <About />
        <Products />
        <Review />
        <Contact />
        {user ? <Link to='/profile' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">PROFILE</Link> : <Link to='/login' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">LOGIN</Link>}
        <a href='#top' className='back-to-top right-4 bottom-4 p-4 bg-green-600 hover:bg-green-500 rounded fixed justify-center w-12'>
          <FaArrowAltCircleUp />
        </a>
      </div>
    </>
  )
}

export default Parentpage