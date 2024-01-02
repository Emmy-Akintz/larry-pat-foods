import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function home() {
  return (
    <>
      <div className='h-auto md:h-[100vh] lg:h-[100vh] bg-gray-100 text-black block md:flex lg:flex'>
        <div className="block my-auto w-[100%] md:w-[50%] lg:w-[50%] text-left p-20 pb-0 md:pr-0 lg:pr-0">
          <div className="bg-green-500 w-8 h-8 rounded-full animate-ping"></div>
          <h1 className="larry-pat mt-8 font-bold text-5xl md:text-7xl lg:text-7xl">Larry-Pat</h1>
          <h1 className="foods font-bold text-5xl md:text-7xl lg:text-7xl">Foods</h1>
          <p className='under-foods mt-4 text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left'>The best quality food product there is</p>
          <br />
          <div className="text-center md:text-left lg:text-left">
            <Link to='/prodlist' id='order-button' className='mt-16 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-xl md:text-2xl lg:text-2xl animate-bounce'>CHECK OUT</Link>
          </div>
        </div>
        <div className="first-image block md:my-auto lg:my-auto w-[100%] md:w-[50%] lg:w-[50%] p-20 md:pl-0 lg:pl-0 pt-5 md:pt-20 lg:pt-20">
          <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt="" className='animate-pulse w-[150%] md:w-[100%] lg:w-[100%] first-image-itself' />
        </div>
      </div>
    </>
  )
}

export default home