import React from 'react'
import '../App.css'

function about() {
  return (
    <>
      <div className="h-[100vh] about-image text-white">
        <div className="bg-green-500 w-[100%] md:w-[50vh] lg:w-[100vh] float-right h-[100vh] px-12 py-20 text-left">
          <h1 className="about-1 font-bold text-5xl">All About LPF</h1>
          <p className="about-2 mt-4">
            We have been producing irresistible food products since 2015. Our mission is to keep you smiling with every purchase.
          </p>
          <p className="about-3 mt-8">
            Get yourself a great quality product today!
          </p>
          <button className='mt-8 bg-black hover:bg-gray-900 transition-all py-2 px-4 rounded-3xl text-white animate-bounce'>LEARN MORE</button>
        </div>
      </div>
    </>
  )
}

export default about