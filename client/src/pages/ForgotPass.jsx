import axios from 'axios'
import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'

const serverLink = import.meta.env.VITE_SERVER_LINK

function ForgotPass() {
    const [email, setEmail] = useState()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    setTimeout(() => {
        setError("")
    }, 3000)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        axios.post(`${serverLink}/api/user/forgot-password`, { email })
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
            <form action="/" className='rounded-xl w-[300px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-[rgb(132,192,151)]' onSubmit={handleSubmit}>
                <h1 className='font-bold text-xl lg:text-[3.45vh] uppercase border-b-2 py-4 border-gray-200 xl:py-8 md:font-semibold'>FORGOT PASSWORD</h1>
                <Input label="Email: " id="email" type="email" stater={(e) => setEmail(e.target.value)} classes=" " />
                <div className="flex justify-center items-center pt-4 md:pt-6">
                    <p className="mr-3 md:mr-4 lg:mr-8 xl:mr-10 font-semibold text-red-600 lg:text-[2.54vh]">
                        Clear form?
                    </p>
                    <button
                        type="reset"
                        title="Clear form"
                        className="bg-red-500 p-2 md:p-3 rounded text-white xl:p-[1.2vh] xl:rounded-md"
                    >
                        <FaTimes />
                    </button>
                </div>
                <br />
                <button
                    type="submit"
                    disabled={isLoading}
                    className={
                        isLoading
                            ? "bg-green-300 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 xl:py-[2.0vh] xl:px-[3.22vw]  xl:rounded-[24px] xl:text-[2.25vh]"
                            : "bg-green-500 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 lg:py-[2.0vh] lg:px-[3.22vw]  xl:rounded-[24px] lg:text-[2.25vh]"
                    }
                >
                    SEND
                </button>
                <div className="error text-red-500">
                    {error}
                </div>
            </form>
        </div>
    );
}

export default ForgotPass    