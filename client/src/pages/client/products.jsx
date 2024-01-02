import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useProductContext } from '../../hooks/useProductContext'

function products() {
  const { dispatch } = useProductContext()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:2500/api/product/')
      const json = await response.json()
      setProduct(json)
    }

    fetchProducts()
  }, [dispatch])

  return (
    <>
      <div className="h-auto md:h-[auto] lg:h-[auto] bg-gray-100 text-black py-20">
        <h1 className="prod-1 7font-bold text-5xl">What We Offer</h1>
        <p className="">Curious? Here are our most popular items.</p>
        <div className="grid grid-cols-2 gap-6 md:flex lg:flex justify-between w-5/6 mx-auto mt-8">
          {product && product.slice(0, 4).map(product => (
            <div className="bg-white w-[150px] md:w-[150px] lg:w-[30%] rounded-xl border-2 border-white hover:border-gray-300 transition-all p-4 my-4 mx-auto" key={product._id}>
            <img src="images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png" alt={product.name} />
            <p className="font-bold text-green-500">{product.name}</p>
            <IconContext.Provider value={{ color: 'black' }}>
              <FaArrowDown className='mx-auto mt-4 animate-bounce' />
            </IconContext.Provider>
            <button className='mt-4'>
              <Link to={`/prod-card-view/${product._id}`} className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-xs animate-bounce'>VIEW</Link>
            </button>
            <br />
            <button className='mt-4'>
              <a href="/" className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-xs animate-bounce'>ADD TO CART</a>
            </button>
            <br />
            <span className="text-sm">{product.stockQuantity} left</span>
          </div>
          ))}
        </div>
        <br />
        <button>
          <Link to="/prodlist" className='mt-12 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white animate-bounce'>VIEW FULL MENU</Link>
        </button>
      </div>
    </>
  )
}

export default products