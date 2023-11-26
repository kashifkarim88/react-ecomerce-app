import { ActionTypes } from "../constants/constants"

export const getProductsData = (productdata)=>{
    return{
        type:ActionTypes.GET_PRODUCTS,
        data:productdata
    }
}

export const preCartItems = (predata)=>{
    return{
        type:ActionTypes.PREV_CART_LIST,
        data:predata
    }
}
export const currentCartItems = (currentdata)=>{
    return{
        type:ActionTypes.CURRENT_CART_LIST,
        data:currentdata
    }
}
export const removeCartItems = (index)=>{
    return{
        type:ActionTypes.REMOVE_ITEM,
        data:index
    }
}


