import React, { useEffect } from 'react';
import './dashboard.scss';
import { connect } from 'react-redux';
import {changePath} from '../../Redux/Actions/actions';

function Dashboard(props:any){
    console.log(props)
    useEffect(()=>{
        props.pathChange('/dashboard')
    },[])

    return(
        <div>
            en el home
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        isAuth:state.isAuth,
        path:state.path,
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);