import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../../hooks/useProductContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import '../../../App.css'

function ProductForm() {
    const { dispatch } = useProductContext()
    const { user } = useAuthContext()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stockQuantity, setStockQuantity] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(false)

        if (!user && !user.role === "manager") {
            setError('You must be logged in as a manager')
            prompt('You must be logged in as a manager!')
            navigate('/login')
            return
        }

        const product = { name, description, price, stockQuantity }

        const response = await fetch('http://localhost:2500/api/product/', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            setIsLoading(false)
        }
        if (response.ok) {
            setName('')
            setDescription('')
            setPrice('')
            setStockQuantity('')
            setError(null)
            setEmptyFields([])
            // console.log('new product added!', json);
            dispatch({ type: 'CREATE_PRODUCT', payload: json })
            setIsLoading(false)
        }
    }

    return (
        <form className="create my-4 w-[350px] h-[320px] rounded-xl bg-green-100 m-auto" onSubmit={handleSubmit}>
            <h3 className='font-bold'>Add a new product</h3>
            <br />

            <label>Product Name: </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : 'border rounded px-2'}
            />
            <br />
            <br />

            <label>Description: </label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : 'border rounded px-2'}
            />
            <br />
            <br />

            <label>Price in naira: </label>
            <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={emptyFields.includes('price') ? 'error' : 'border rounded px-2'}
            />
            <br />
            <br />

            <label>Stock Quantity: </label>
            <input
                type="number"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                className={emptyFields.includes('stockQuantity') ? 'error' : 'border rounded px-2'}
            />
            <br />
            <br />

            <button disabled={isLoading} className={isLoading ? 'bg-green-300 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4' : 'bg-green-500 hover:bg-green-400 transition-all py-2 px-4 rounded-3xl text-white text-sm m-4'}>Add Product</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default ProductForm