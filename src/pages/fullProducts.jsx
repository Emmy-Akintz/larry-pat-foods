import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowDown, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { prod } from '../data'
import '../App.css'

function FullProducts() {
    return (
        <div className='bg-gray-100 p-4 fullproduct'>
            <Link to='/'>
                <div className=" p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <div className="block md:list-item lg:list-item justify-between w-5/6 mx-auto mt-8">
                {prod.map((e) => (
                    <div className="bg-white w-[200px] md:w-[300px] lg:w-[576px] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto">
                        <img src={e.image} alt="" />
                        <p className="font-bold">{e.name}</p>
                        <p className="">{e.price}</p>
                        <IconContext.Provider value={{ color: 'black' }}>
                            <FaArrowDown className='mx-auto mt-4 animate-bounce' />
                        </IconContext.Provider>
                        <button className='mt-4'>
                            <a href="/" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm animate-bounce'>ORDER NOW</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FullProducts