import { actionTypes } from '../Reducer/reducer';

export const userLogin = (isAuth:boolean) => {
    return {
        type: actionTypes.IS_AUTH,
        isAuth:isAuth
    }
}