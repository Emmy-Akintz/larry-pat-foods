import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function contact() {
  return (
    <>
    <div className="h-auto md:h-auto md:grid lg:h-[100vh] lg:flex contact-bg">
        <div className="w-[100%] md:w-[80vh] lg:w-[100vh] bg-black text-white h-full text-left float-right p-16">
          <div className="">
            <h1 className="font-bold text-3xl md:text-2xl">OPENING HOURS</h1>
            <p className="">Mon-Fri 7am-6pm</p>
            <p className="">Saturday:10am-6pm</p>
            <p className="">Sunday:11:30am-6pm</p>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-3xl md:text-2xl">LOCATION</h1>
            <p className=''>Plot 10, Block XXVIII</p>
            <p className=''>3rd gate Afunbiowo Estate</p>
            <p className=''>Akure, Ondo State</p>
            <p className="">Nigeria</p>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-3xl md:text-2xl">FOLLOW US ON</h1>
            <Link to=''>Instagram</Link>
            <br />
            <Link to=''>Facebook</Link>
            <br />
            <Link to=''>Twitter</Link>
          </div>
          <p className="text-sm md:text-2xl lg:text-3xl mt-8 mb-4">
            oleebabe@gmail.com
          </p>
        </div>
    </div>
    </>
  )
}

export default contact