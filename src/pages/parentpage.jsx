import React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import Review from '../pages/review'
import Contact from '../pages/contact'
import { Link } from 'react-router-dom'

function parentpage() {
  return (
    <>
    <div className="h-auto">
      <Home />
      <About />
      <Products />
      <Review />
      <Contact />
      <Link to='/login' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce">LOGIN</Link>
    </div>
    </>
  )
}

export default parentpage