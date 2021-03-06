import { PRODUCT_LIST_REQUEST,  PRODUCT_LIST_SUCCESS } from '../constants/productConstant'
export const productListReducer = (state = { products: []}, action) => {

    switch ( action.type ){
        case PRODUCT_LIST_REQUEST:
            return {product: []}
        case PRODUCT_LIST_SUCCESS:
            return { loading: true, products: [] }
        // case PRODUCT_LIST_FAIL:
        //     return { loading: false, products: action.payload }

            default: 
                return state
    }
}