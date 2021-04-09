import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function ProductUpdate() {
    const productName = useSelector(state => state.productReducer)
    const [product, setProduct] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setProduct(productName.product_detail)
        console.log("product", product)
    }, [])    
    console.log("Product Name", product.name)
    return (
        <div className="grid place-items-center h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-7xl">
                <div className="text-indigo-500 flex flex-col justify-between w-3/5">
                <img src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985" alt="" />
                {/* <img src={product.images[0].src} /> */}
                <div>
                    <small className="uppercase">choose size</small>
                <div className="flex flex-wrap md:flex-nowrap gap-1">
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>5</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>6</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>7</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>8</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>9</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>10</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>11</small>
                    </a>
                    <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>12</small>
                    </a>
                </div>
                </div>
                </div>
                <div className="text-indigo-500">
                <small className="uppercase"></small>
                <input className="uppercase text-black text-2xl font-medium"
                    value={product.name}
                    onChange={e => setTitle(e.target.value)}
                >
                   
                </input>
                <input className="text-2xl font-semibold mb-7"
                    value={product.price}
                    onChange={e => setPrice(e.target.value)}
                >
                    
                </input>
                <input className="text-black"
                    value={product.description}
                    onChange={e => setDescription(e.target.value)}
                >
                </input>
                <div className="flex gap-0.5 mt-4">
                    <button id="addToCartButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3">add to cart</button>
                    <button id="likeButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdate
