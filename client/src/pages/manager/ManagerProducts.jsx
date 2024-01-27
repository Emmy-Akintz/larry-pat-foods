import React, { useEffect } from 'react'
import { useProductContext } from '../../hooks/useProductContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../App.css'

import ProductDetails from './products/ProductDetails'
import ProductForm from './products/ProductForm'
import { Link, useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function ManagerProducts() {
  const { products, dispatch, productDeleted } = useProductContext()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:2500/api/product/', {
        method: 'GET'
      })
      const json = await response.json()

      if (response.ok) {
        dispatch(({ type: 'SET_PRODUCTS', payload: json }))
      }
    }

    if (user && user.role === "manager") {
      fetchProducts()
    }
  }, [dispatch, user, productDeleted])

  return (
    <div className="">
      <Link to='/manager-dashbord' className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
        <FaBackward />
      </Link>
      <h3 className='font-bold text-2xl'>PRODUCTS</h3>
      <br />
      <br />
      <div className="md:flex lg:flex lg:w-[1300px] justify-between m-[auto]">
        <ProductForm />
        <div className='manager-product lg:mr-28 grid md:grid lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          {products && products.map((product) => (
            <ProductDetails key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManagerProducts