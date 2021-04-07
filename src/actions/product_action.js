import { PRODUCT_DELETE, PRODUCT_DETAIL, PRODUCT_UPDATE } from './types'

import axios from 'axios'

export function productDetail(dataToSubmit) {
    const request = axios.get(`http://localhost:8000/products/${dataToSubmit.id}`, dataToSubmit)
        .then((res) => res.data)
        return {
            type: PRODUCT_DETAIL,
            payload: request
        }
}

export function productUpdate(dataToSubmit) {
    const request = axios.post('http://localhost:8000/products/product-update', dataToSubmit)
        .then((res) => res.data)
        return {
            type: PRODUCT_UPDATE,
            payload: request
        }    
}

export function productDelete(dataToSubmit) {
    const request = axios.get(`http://localhost:8000/products/delete/${dataToSubmit.id}`, dataToSubmit )
        .then((res) => res.data)
        return {
            type: PRODUCT_DELETE,
            payload: request
        }
}