import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    })

    const getProducts = () => {
        axios.get('http://localhost:8000/products/page/1')
            .then((response) => {
                const data = response.data
                setProducts(data);    
                console.log(products)           
            })
    }

    return (
        <div>
            <table className="min-w-full table-auto">
                <thead className="justify-between">
                    <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                        <span className="text-gray-300"></span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Title</span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Price</span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Quantity</span>
                        </th>

                        <th className="px-16 py-2">
                        <span className="text-gray-300">Edit</span>
                        </th>

                        <th className="px-16 py-2">
                        <span className="text-gray-300">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-4 border-gray-200">
                            <td className="px-16 py-2 flex flex-row items-center">
                            <img
                                className="h-16 w-16 rounded-2xl object-cover "
                                src={product.images[0].src}
                                alt=""
                            />
                            </td>
                            <td>
                                <span className="text-center ml-2 font-semibold">{ product.name }</span>
                            </td>                            
                            <td className="px-16 py-2">
                                <span>{ product.price }</span>
                            </td>
                            <td className="px-16 py-2">
                                <span>{ product.stock_quantity }</span>
                            </td>                            
                            <td className="px-16 py-2">
                                <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                                    Edit
                                </button>
                            </td>

                            <td className="px-16 py-2">
                                <button className="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
