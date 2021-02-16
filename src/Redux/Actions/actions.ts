import { actionTypes } from '../Reducer/reducer';

export const userLogin = (isAuth:boolean) => {

    return {
        type: actionTypes.IS_AUTH,
        payload:isAuth
    }
}

export const changePath = (path:string) => {
    console.log('en el path', path)
    return {
        type: actionTypes.PATH,
        payload:path
    }
}