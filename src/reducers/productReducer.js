export const productListReducer = (state = { products: []}, action) => {
    switch ( action.type ){
        case 'PRODUCT_LIST_REQUEST':
            return {product: []}
         

            default: 
                return state
    }
}