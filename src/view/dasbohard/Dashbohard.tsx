import React, { useEffect } from 'react';
import './dashboard.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath} from '../../Redux/Actions/actions';
import ListData from '../../components/listData/ListData';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';

function Dashboard(props:any){
    console.log(props)
    useEffect(()=>{
        props.pathChange('/dashboard')
    },[])


    return(
        <div className="container container-dash">
            <div className="row">
                <div className="list">
                    <ListData 
                        title="Lista de Clientes"
                    />
                </div>
                <div  className="list">
                    <ListData
                        title="Lista de Productos"
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        path:state.path,
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);