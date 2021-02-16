interface State {
    isAuth:boolean,
    path:string,
    client:string[],
    product:string[]
}

const initialState = {
    isAuth:false,
    path:'/',
    client:[],
    product:[]
}


export const actionTypes = {
    IS_AUTH:'LOGIN',
    PATH:'PAHT'
}

export default (state:State = initialState, action:any ) => {

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
        
        default:
            return state

    }

}