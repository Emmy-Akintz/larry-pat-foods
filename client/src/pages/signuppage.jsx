import React, {
    useState
} from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

// 
import axios from 'axios'
// 

function Signup() {

    const [user, setUser] = useState({
        name: "",
        password: "",
        phoneNumber: "",
        email: "",
        address: "",
        country: "",
        postalCode: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser ({
            ...user, //spread operator
            [name]: value
        })
    }
    
    // register function
    const register = () => {
        const {name,  password, phoneNumber, email, address, country, postalCode} = user
        if (name && password && phoneNumber && email && address && country && postalCode) {
            axios.post("http://localhost:25S0/larrypat/users/signup", user)
            .then(res=>console.log(res))
        } 
        else {
            alert('Invalid Input!!!')
        }
    }
    return (
        <div className='logsign p-4 bg-gray-200'>
            <Link to='/'>
                <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
                    <IconContext.Provider value={{ color: 'white' }}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <form action="/" className='rounded-xl w-[250px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-green-100'>
                <h1 className='font-bold text-xl'>SIGNUP TO LARRY-PAT FOODS</h1>
                <br />
                <label htmlFor="fullName">Full Name: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="text" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='name' value={user.name} onChange={handleChange} placeholder='' required />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="password" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='password' value={user.password} onChange={handleChange} placeholder=''  required />
                <br />
                <br />
                <label htmlFor="mobilenumber">Phone Number: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="tel" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='phoneNumber' value={user.phoneNumber} onChange={handleChange} placeholder=''  required />
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="email" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='email' value={user.email} onChange={handleChange} placeholder=''  required />
                <br />
                <br />
                <label htmlFor="address">Address: </label>
                <br className="block md:hidden lg:hidden" />
                <textarea type='address' id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='address' value={user.address} onChange={handleChange} placeholder='' required />
                <br />
                <br />
                <label htmlFor="country">Country: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="country" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='country' value={user.country} onChange={handleChange} placeholder=''  required />
                <br />
                <br />
                <label htmlFor="postcode">Postal Code: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="postcode" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='postalCode' value={user.postalCode} onChange={handleChange} placeholder=''  required />
                <br />
                <br />
                <button type="reset" title='Clear form'><FaTimes /></button>
                <br />
                <button type="submit" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm' onClick={register}>SIGNUP</button>
                <br />
                <br />
                <hr />
                <br />
                <p>Already have an account?</p>
                <p>Login <Link to='/login' className='text-green-700 font-bold hover:underline'>HERE</Link></p>
            </form>
        </div>
    )
}

export default Signup