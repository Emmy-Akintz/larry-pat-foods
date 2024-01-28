import axios from 'axios'
import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ResetPassword() {
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = (false)
    setTimeout(() => {
        setError("")
    }, 3000)
    const navigate = useNavigate()
    const { id, token } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setIsLoading(true)

        axios.post(`http://localhost:2500/api/user/reset-password/${id}/${token}`, { password })
            .then(response => {
                if (response.status === 200) {
                    navigate('/login')
                    setIsLoading(false)
                }
            }).catch(err => {
                // console.log(err);
                setIsLoading(false)
                if (err) {
                    console.log(err.response.status)
                    setError(err.response.data.message)
                }
            })
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
                <h1 className='font-bold text-xl'>RESET PASSWORD</h1>
                <br />
                <label htmlFor="password">New password: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="password" id='password' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' placeholder='' name='email' onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <br />
                <button type="reset" title='Clear form'><FaTimes /></button>
                <br />
                <button type="submit" className={isLoading ? 'bg-green-300 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm'}>UPDATE</button>
                <div className="error text-red-500">
                    {error}
                </div>
            </form>
        </div>
    );
}

export default ResetPassword