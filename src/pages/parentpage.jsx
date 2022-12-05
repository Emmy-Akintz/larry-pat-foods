import React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import Review from '../pages/review'
import Contact from '../pages/contact'

function parentpage() {
  return (
    <>
    <div className="h-auto">
      <Home />
      <About />
      <Products />
      <Review />
      <Contact />
    </div>
    </>
  )
}

export default parentpage