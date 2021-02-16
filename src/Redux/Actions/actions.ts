import { actionTypes } from '../Reducer/reducer';

export const userLogin = (isAuth:boolean) => {
    console.log('action', isAuth)
    return {
        type: actionTypes.IS_AUTH,
        payload:isAuth
    }
}