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

type Action = {
    type:'LOGIN',
    payload:boolean
}


export const actionTypes = {
    IS_AUTH:'LOGIN'
}

export default (state:State = initialState, action:Action ) => {

    switch(action.type){

        case actionTypes.IS_AUTH:
            console.log('action', action.payload)
            return{
                ...state,
                isAuth: action.payload
            }
        
        default:
            return state

    }

}