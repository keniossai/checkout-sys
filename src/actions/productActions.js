import axios from 'axios'
import { PRODUCT_LIST_REQUEST,  PRODUCT_LIST_SUCCESS } from '../constants/productConstant'


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST})

        const { data } = await axios.get('https://fakestoreapi.com/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch  {

    }
}