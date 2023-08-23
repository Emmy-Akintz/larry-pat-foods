import React, { 
    useState
 } from 'react'
import { IconContext } from 'react-icons'
import { FaHome, FaTimes } from 'react-icons/fa'
import { 
    Link,
    useNavigate
 } from 'react-router-dom'
import '../App.css'

import axios from 'axios'

function Loginpage({setLoginUser}) {

    // FIRST TRIAL
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [token, setToken] = useState('');

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('/larrypat/users/login', { email, password });
    //         setToken(response.data.token);
    //     } catch (error) {
    //         console.log('Login error: ', error);
    //     }
    // };

    // const handleLogout = () => {
    //     setToken('');
    // };

    // SECOND TRIAL
    const history = useNavigate()
        const [user, setUser] = useState({
            email: "",
            password: ""
        })
        const handleChange = e => {
            const {name, value} = e.target
            setUser({
                ...user, //spread user
                [name]:value
            })
        }

        const login = () => {
            axios.post('http://localhost:25S0/larrypat/users/login', user)
            .then(res=>{alert(res.data.message)
            setLoginUser(res.data.user)
        history.push('/')})
        }


    return (
        // FIRST TRIAL
        // <div>
        //     {!token ? (
        //         <div className='logsign p-4 bg-gray-200 h-[100vh]'>
        //         <Link to='/'>
        //             <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded">
        //                 <IconContext.Provider value={{ color: 'white' }}>
        //                     <FaHome />
        //                 </IconContext.Provider>
        //             </div>
        //         </Link>
        //         <br />
        //         <form action="/login" className='rounded-xl w-[250px] md:w-[400px] lg:w-[500px] m-auto p-4 bg-green-100'>
        //             <h1 className='font-bold text-xl'>LOGIN TO LARRY-PAT FOODS</h1>
        //             <br />
        //             <label htmlFor="email">Email: </label>
        //             <br className="block md:hidden lg:hidden" />
        //             <input type="email" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' placeholder='' onChange={(e) => setEmail(e.target.value)} required />
        //             <br />
        //             <br />
        //             <label htmlFor="password">Password: </label>
        //             <br className="block md:hidden lg:hidden" />
        //             <input type="password" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' placeholder='' onChange={(e) => setPassword(e.target.value)} required />
        //             <br />
        //             <br />
        //             <button type="reset" title='Clear form'><FaTimes /></button>
        //             <br />
        //             <button type="submit" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm' onClick={handleLogin}>LOGIN</button>
        //             <br />
        //             <br />
        //             <p>Forgotten <Link to='/login' className='text-green-700 font-bold hover:underline'>PASSWORD</Link></p>
        //             <br />
        //             <hr />
        //             <br />
        //             <p>Don't have an account?</p>
        //             <p>SignUp <Link to='/signup' className='text-green-700 font-bold hover:underline'>HERE</Link></p>
        //         </form>
        //     </div>
        //     ) : (
        //         <div>
        //             <p>You are logged in!</p>
        //             <button onClick={handleLogout}>Logout</button>
        //         </div>
        //     )}
        // </div>

        // SECOND TRIAL
        <div className='logsign p-4 bg-gray-200 h-[100vh]'>
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
                <br className="block md:hidden lg:hidden" />
                <input type="email" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='email' value={user.email} onChange={handleChange} placeholder='' required />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <br className="block md:hidden lg:hidden" />
                <input type="password" id='' className='rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px]' name='password' value={user.password} onChange={handleChange} placeholder='' required />
                <br />
                <br />
                <button type="reset" title='Clear form'><FaTimes /></button>
                <br />
                <button type="submit" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm' onClick={login}>LOGIN</button>
                <br />
                <br />
                <p>Forgotten <Link to='/login' className='text-green-700 font-bold hover:underline'>PASSWORD</Link></p>
                <br />
                <hr />
                <br />
                <p>Don't have an account?</p>
                <p>SignUp <Link to='/signup' className='text-green-700 font-bold hover:underline'>HERE</Link></p>
            </form>
        </div>
    );
}

export default Loginpage    