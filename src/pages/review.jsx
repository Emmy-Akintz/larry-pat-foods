import React from 'react'
import { IconContext } from 'react-icons'
import { FaStar } from 'react-icons/fa'

function review() {
  return (
    <>
    <div className="h-auto md:h-[100vh] lg:h-[100vh] bg-green-500 text-white p-20">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl">What Our Clients Say</h1>
      <div className="block md:flex lg:flex p-2 md:p-12 lg:p-12 mt-20">
        <div className="block mt-12 md:mt-0 lg:mt-0">
          <div className="w-20 h-20 overflow-hidden rounded-full mx-auto">
            <img src="images/Display Picture 2.jpg" alt="" className='relative' />
          </div>
          <h1 className='font-bold text-xl mt-8'>
            Mr & Mrs Janet
          </h1>
          <p className='mt-4'>
            Testimonies are short quotes from people who love your brand. It's a great way to convince customers to try your service.
          </p>
          <div className="flex m-auto justify-center mt-8">
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
          </div>
        </div>
        <div className="block mt-12 md:mt-0 lg:mt-0">
          <div className="w-20 h-20 overflow-hidden rounded-full mx-auto">
            <img src="images/Display Picture 2.jpg" alt="" className='relative' />
          </div>
          <h1 className='font-bold text-xl mt-8'>
            Mr & Mrs Janet
          </h1>
          <p className='mt-4'>
            Testimonies are short quotes from people who love your brand. It's a great way to convince customers to try your service.
          </p>
          <div className="flex m-auto justify-center mt-8">
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
          </div>
        </div>
        <div className="block mt-12 md:mt-0 lg:mt-0">
          <div className="w-20 h-20 overflow-hidden rounded-full mx-auto">
            <img src="images/Display Picture 2.jpg" alt="" className='relative' />
          </div>
          <h1 className='font-bold text-xl mt-8'>
            Mr & Mrs Janet
          </h1>
          <p className='mt-4'>
            Testimonies are short quotes from people who love your brand. It's a great way to convince customers to try your service.
          </p>
          <div className="flex m-auto justify-center mt-8">
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
            <IconContext.Provider value={{ color: 'gold' }}>
            <FaStar />
          </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default review