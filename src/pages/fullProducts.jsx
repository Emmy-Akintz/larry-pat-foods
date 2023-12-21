import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { 
 // FaArrowDown,
 FaHome
 } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { prod } from '../data'
import '../App.css'

function FullProducts() {

    const [search, setSearch] = useState('')
    // console.log(search);

    return (
        <div className='bg-gray-100 p-4 fullproduct'>
            <Link to='/'>
                <div className=" p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border border-green-500 rounded-xl my-3 py-1 px-2'
                placeholder='Search Product...'
            />
            <div className="grid grid-cols-2 gap-10 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 justify-between w-5/6 mx-auto mt-8">
                {prod.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                }).map((e) => (
                    <div className="bg-white w-[150px] md:w-[150px] lg:w-[150px] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto" key={e.id}>
                        <img src={e.image} alt="" />
                        <p className="font-bold text-green-500">{e.name}</p>
                        {/* <p className="">{e.price}</p> */}
                     {/*   <IconContext.Provider value={{ color: 'black' }}>
                           <FaArrowDown className='mx-auto mt-4 animate-bounce' />
                        </IconContext.Provider>*/}
                        <button className='mt-4'>
                            <a href="/" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-xs animate-bounce'>VIEW</a>
                        </button>
                        <button className='mt-4'>
                            <a href="/" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-xs animate-bounce'>ADD TO CART</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FullProducts