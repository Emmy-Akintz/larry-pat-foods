import React from 'react'
import '../App.css'

function home() {
  return (
    <>
      <div className='h-auto md:h-[100vh] lg:h-[100vh] bg-gray-100 text-black block md:flex lg:flex'>
        <div className="block my-auto w-[100%] md:w-[50%] lg:w-[50%] text-left p-20 pb-0 md:pr-0 lg:pr-0">
          <div className="bg-green-500 w-7 h-7 rounded-full animate-ping"></div>
          <h1 className="larry-pat mt-8 font-bold text-5xl">Larry-Pat</h1>
          <h1 className="foods font-bold text-5xl">Foods</h1>
          <p className='under-foods mt-4'>The best quality food product there is</p>
          <button className='mt-8 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white animate-bounce'>ORDER NOW</button>
        </div>
        <div className="first-image block md:my-auto lg:my-auto w-[100%] md:w-[50%] lg:w-[50%] p-20 md:pl-0 lg:pl-0 pt-10 md:pt-20 lg:pd-20">
          <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt="" className='animate-pulse first-image-itself' />
        </div>
      </div>
    </>
  )
}

export default home