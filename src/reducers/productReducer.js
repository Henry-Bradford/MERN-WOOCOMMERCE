import {
    PRODUCT_DELETE,
    PRODUCT_DETAIL,
    PRODUCT_UPDATE
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return { ...state, product_detail: action.payload }
        case PRODUCT_UPDATE:
            return { ...state, product_update: action.payload }
        case PRODUCT_DELETE:
            return { ...state, product_detete: action.payload }
        default:
            return state;
    }
}