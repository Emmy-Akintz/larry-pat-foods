import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function ForgotPass() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    setTimeout(() => {
        setError('')
    }, 3000)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            // send a request to the server to initiate the password reset process
            const response = await fetch('http://localhost:2500/larrypat/users/reset-password')

            if (!response.ok) {
                if (response.status === 404) {
                    setError('Resource not found')
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
            }

            const contentType = response.headers.get('Content-Type')

            if (!contentType || !contentType.includes('application/json')) {
                throw new Error (`Unexpected response format. Expected JSON.`)
            }

            // handle the response accordingly
            const result = await response.json()
            console.log(result);

        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    }
    return (
        <div className='forgotPass p-4 bg-gray-200 h-[100vh]'>
            <Link to='/'>
                <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <br />
            <form onSubmit={handleSubmit} className='rounded-xl w-[300px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-green-100'>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button type='submit' className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm'>Reset Password</button>
                <div className="error text-red-500">
                    {error}
                </div>
            </form>
        </div>
    )
}

export default ForgotPass