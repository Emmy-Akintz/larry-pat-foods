import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

function ManagerDashbord() {
  const { user } = useAuthContext()

  return (
    <div>
      <h1>Manager Dashbord</h1>
      <Link to='/profile' className="absolute top-4 right-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">PROFILE</Link>
      <h1>Welcome {user.firstName}</h1>
      <div className='border rounded w-[300px] md:w-[800px] lg:w-[1000px] mx-auto my-4 p-4'>
        <h1 className='underline'>Your analytics go here</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae excepturi animi, esse totam deserunt quasi iste! Dicta ipsa tempora dolores tempore corporis! Perferendis hic sequi earum adipisci rerum provident doloribus, quisquam libero, eaque voluptatibus fuga voluptas voluptate corrupti dolorem quaerat officiis tempora porro neque? Sunt veritatis minima quos numquam!</p>
      </div>
      <h1>What do you want to do today?</h1>
      <div className="grid grid-cols-2 w-[300px] mx-auto m-4">
        <Link to='/manager-product' className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4 w-[100px]">YOUR PRODUCTS</Link>
        <Link to='/manager-admins' className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4 w-[100px]">YOUR ADMINS</Link>
        <Link to='/manager-clients' className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4 w-[100px]">YOUR CLIENTS</Link>
        <Link to='/manager-order-controller' className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4 w-[100px]">CUSTOMER ORDERS</Link>
      </div>
    </div>
  )
}

export default ManagerDashbord