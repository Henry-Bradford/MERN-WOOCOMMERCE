import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ProductDetail() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        
    }, [])

    const getProduct = () => {        

        axios.get("http://localhost:8000/products/")
            .then((response) => {
                const product = response.data;
                setProduct(product)
                console.log(product)
            })
    }

    return (
        <div>
        </div>
    )
}

export default ProductDetail
