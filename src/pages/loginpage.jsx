import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

function Loginpage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    setTimeout(() => {
        setError("")
    }, 10000)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:2500/larrypat/users/login", { email, password })
            .then(result => {
                // console.log(result)
                if (result.data === "Success!") {
                    navigate('/')
                } else {
                    setError(result.data)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='logsign p-4 bg-gray-200 h-[100vh]'>
            <Link to='/'>
                <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <br />
            <form action="/" className='rounded-xl w-[300px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-green-100' onSubmit={handleSubmit}>
                <h1 className='font-bold text-xl'>LOGIN TO LARRY-PAT FOODS</h1>
                <br />
                <label htmlFor="email">Email: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="email" id='email' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' placeholder='' name='email' onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="password" id='password' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' placeholder='' name='password' onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <br />
                <button type="reset" title='Clear form'><FaTimes /></button>
                <br />
                <button type="submit" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm'>LOGIN</button>
                <div className="error text-red-500">
                    {error}
                </div>
                <br />
                <br />
                <p>Forgotten <Link to='/login' className='text-green-700 font-bold hover:underline'>PASSWORD</Link></p>
                <br />
                <hr />
                <br />
                <p>Don't have an account?</p>
            </form>
            <p>SignUp <Link to='/signup' className='text-green-700 font-bold hover:underline'>HERE</Link></p>
        </div>
    );
}

export default Loginpage    