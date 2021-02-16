const initialState = {
    isAuth:false,
    path:'/',
    client:[],
    product:[]
}


export const actionTypes = {
    IS_AUTH:'LOGIN',
    PATH:'PAHT',
    CLIENT:'ADD-CLIENT',
    PRODUCT:'ADD-PRODUCT'
}

export default (state = initialState, action:any ) => {

    switch(action.type){

        case actionTypes.IS_AUTH:
            return{
                ...state,
                isAuth: action.payload
            }

        case actionTypes.PATH:
            return{
                ...state,
                path: action.payload
            }

        case actionTypes.CLIENT:
            return{
                 ...state,
                 client: action.payload
            }
        case actionTypes.PRODUCT:
             return{
                ...state,
                product: action.payload
            }
        
        default:
            return state

    }

}