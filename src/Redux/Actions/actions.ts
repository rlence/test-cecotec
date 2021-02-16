import { actionTypes } from '../Reducer/reducer';

export const userLogin = (isAuth:boolean) => {

    return {
        type: actionTypes.IS_AUTH,
        payload:isAuth
    }
}

export const changePath = (path:string) => {
 
    return {
        type: actionTypes.PATH,
        payload:path
    }
}

export const saveListClient = (clients:any) => {
    return{
        type: actionTypes.CLIENT,
        payload: clients
    }
}

export const saveListProduct = (product:any) => {
    return{
        type: actionTypes.PRODUCT,
        payload: product
    }
}