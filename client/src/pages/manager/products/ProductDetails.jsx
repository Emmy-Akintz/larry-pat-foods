import React from 'react'
import { useProductContext } from '../../../hooks/useProductContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import '../../../App.css'
import { Link } from 'react-router-dom'

function ProductDetails({ product }) {
    const { dispatch } = useProductContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user || !user.user.role === "manager") {
            prompt("You aren't a manager!")
            return
        }
        const response = await fetch('http://localhost:2500/api/product/' + product._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_PRODUCT', payload: json })
            dispatch({ type: 'PRODUCT_DELETED' })
        }
    }

    return (
        <div className="product-details mt-4">
            <div className='rounded-xl p-8 w-[250px] m-auto bg-green-100' key={product._id}>
                <h4 className='font-bold'>{product.name?.toUpperCase()}</h4>
                <p><span className="font-bold">Description: </span>{product.description}</p>
                <p className='font-bold'>&#8358;{product.price?.$numberDecimal}</p>
                <p><span className="font-bold">Quantity: </span>{product.stockQuantity}</p>
                <br />
                <Link to={`/product-update/${product._id}`} className="bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">Update</Link>
                <span className='bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-2 cursor-pointer' onClick={handleClick}>Delete</span>
            </div>
        </div>
    )
}

export default ProductDetails