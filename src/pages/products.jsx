import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowDown } from 'react-icons/fa'
import '../App.css'

function products() {
  return (
    <>
      <div className="h-auto md:h-[100vh] lg:h-[100vh] bg-gray-100 text-black py-20">
        <h1 className="prod-1 7font-bold text-5xl">What We Offer</h1>
        <p className="">Curious? Here are our most popular items.</p>
        <div className="block md:flex lg:flex justify-between w-5/6 mx-auto mt-8">
          <div className="bg-white w-[150px] md:w-[25%] lg:w-[30%] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto">
            <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt="" />
            <p className="font-bold">SALAD MIX</p>
            <IconContext.Provider value={{ color: 'black' }}>
              <FaArrowDown className='mx-auto mt-4 animate-bounce' />
            </IconContext.Provider>
          </div>
          <div className="bg-white w-[150px] md:w-[25%] lg:w-[30%] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto">
            <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt="" />
            <p className="font-bold">SALAD MIX</p>
            <IconContext.Provider value={{ color: 'black' }}>
              <FaArrowDown className='mx-auto mt-4 animate-bounce' />
            </IconContext.Provider>
          </div>
          <div className="bg-white w-[150px] md:w-[25%] lg:w-[30%] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto">
            <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt="" />
            <p className="font-bold">SALAD MIX</p>
            <IconContext.Provider value={{ color: 'black' }}>
              <FaArrowDown className='mx-auto mt-4 animate-bounce' />
            </IconContext.Provider>
          </div>
        </div>
        <button className='mt-12 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white animate-bounce'>VIEW FULL MENU</button>
      </div>
    </>
  )
}

export default products