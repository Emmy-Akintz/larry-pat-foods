import React from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function loginpage() {
    return (
        <div className='p-4'>
            <Link to='/'>
                <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <br />
            <form action="/" className='rounded-xl w-[250px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-green-100'>
                <h1 className='font-bold text-xl'>LOGIN TO LARRY-PAT FOODS</h1>
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id='' className='rounded border-gray-700 px-2 py-1 w-[150px] md:w-[170px] lg:w-[200px]' placeholder='' required />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id='' className='rounded border-gray-700 px-2 py-1 w-[150px] md:w-[170px] lg:w-[200px]' placeholder='' required />
                <br />
                <br />
                <button type="reset" title='Clear form'><FaTimes /></button>
                <br />
                <button type="submit" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm'>LOGIN</button>
                <br />
                <br />
                <hr />
                <br />
                <p>Don't have an account?</p>
                <p>SignUp <Link to='/signup' className='text-green-700 font-bold hover:underline'>HERE</Link></p>
            </form>
        </div>
    )
}

export default loginpage