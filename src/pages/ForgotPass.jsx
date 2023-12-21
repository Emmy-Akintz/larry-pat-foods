import React, { useState } from 'react'

function ForgotPass() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // send a request to the server to initiate the password reset process
        const response = await fetch('http://localhost:2500/larrypat/users/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })

        // handle the response accordingly
        const result = await response.json()
        console.log(result);
    }
    return (
        <div className='forgotPass p-4 bg-gray-200 h-[100vh]'>
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
            </form>
        </div>
    )
}

export default ForgotPass