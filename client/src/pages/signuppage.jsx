import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSignup } from '../hooks/useSignup'
import Input from './components/Input'

export default function Signuppage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const { signup, isLoading, error } = useSignup()
    // setTimeout(() => {
    //     setError("")
    // }, 3000)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(firstName, lastName, email, password)
    }

    return (
        <div className='md:logsign px-2 pr-2 md:px-4 md:py-12 pb-8  md:p-4 bg-gray-300 h-[120vh] md:h-[120vh] lg:h-[100vh] text-black'>
            <Link to='/'>
                <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded-full md:rounded translate-y-14 md:translate-y-0 translate-x-4 md:translate-x-0">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <form action="/" className='rounded-xl w-[300px] md:w-[400px] lg:w-[500px] md:m-auto p-4 bg-[rgb(110,189,138)]' onSubmit={handleSubmit}>
                <h1 className='font-bold text-xl uppercase border-b-2 pb-4'>signup page</h1>
                <br />
                <Input label="First Name: " type="text" id="first_name" classes="" stater={(e) => setFirstName(e.target.value)} />
                <Input label="Last value: " type="text" id="last_name" classes="" stater={(e) => setLastName(e.target.value)} />
                <Input type="email" id="email" classes="" label="Email: " stater={(e) => setEmail(e.target.value)} />
                <Input type="password" id="password" label="Password: " stater={(e)=> setPassword(e.target.value)} />
                <div className='flex justify-center items-center pt-4 md:pt-6'>
                    <p className='mr-3 md:mr-4 lg:mr-8 xl:mr-10 font-semibold text-red-600'>Clear form?</p>
                    <button type="reset" title='Clear form' className="bg-red-500 p-2 md:p-3 rounded text-white"><FaTimes /></button>
                </div>
                <br />
                <div className="error text-red-500">
                    {error && <div className='error'>{error}</div>}
                </div>
                <button type="submit" disabled={isLoading} className={isLoading ? 'bg-green-400 hover:bg-green-500 transition-all py-2 px-4 rounded-3xl text-white text-sm' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm'}>SIGN UP</button>
            </form>
            <div className='bg-[rgb(110,189,138)] mt-2 md:mt-[3vh] px-2 py-3 md:px-4 md:py-6 rounded-2xl w-[300px] md:w-[400px] lg:w-[500px] m-auto'>
                <p>Already have an Account?</p>
                <p className='font-semibold'>Login <Link to='/login' className='text-green-700 font-bold underline md:no-underline hover:underline'>HERE</Link></p>
            </div>
        </div>
    )
}