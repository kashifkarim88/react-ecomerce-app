import { ActionTypes } from "../constants/constants"
const initialState = {
    productsData:[]
}


export default function productsData (state = initialState,{type,data}){
    switch(type)
    {
        case ActionTypes.GET_PRODUCTS:
            return{
                ...state,
                productsData:data
            }
        default:
            return state
    }
}
