import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../hooks/useProductContext'
import { useNavigate, useParams } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function ProdCardView() {
    const { dispatch } = useProductContext()
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:2500/api/product/${id}`)
            const json = await response.json()
            setProduct(json)
        }

        fetchProduct()
    }, [dispatch, id])

    return (
        <div>
            <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm">
                <FaBackward />
            </button>
            {product && <div className='mt-32'>
                <div><span className="font-bold">Name: </span>{product.name}</div>
                <div><span className="font-bold">Description: </span>{product.description}</div>
                <div><span className="font-bold">Price: </span>{product.price.$numberDecimal}</div>
                <div><span className="font-bold">Amount Left: </span>{product.stockQuantity}</div>
            </div>}
        </div>
    )
}

export default ProdCardView