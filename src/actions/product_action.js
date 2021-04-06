import { PRODUCT_DETAIL, PRODUCT_UPDATE } from './types'

import axios from 'axios'

export function productDetail(dataToSubmit) {
    const request = axios.post('http://localhost:8000/product-detail', dataToSubmit)
        .then((res) => res.data)
        return {
            type: PRODUCT_DETAIL,
            payload: request
        }
}

export function productUpdate(dataToSubmit) {
    const request = axios.post('http://localhost:8000/product-update', dataToSubmit)
        .then((res) => res.data)
        return {
            type: PRODUCT_UPDATE,
            payload: request
        }    
}