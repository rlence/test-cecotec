import React, { useEffect } from 'react';
import './addAndEdit.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath, saveListClient, saveListProduct} from '../../Redux/Actions/actions';
import {getListCLient, getListProducts} from '../../api/dashboard';

function AddAndEdit(props:any){
    const location = window.location.pathname.split('/');
    const action = location[1]
    const type = location[2];
    console.log(type , action)
    console.log(props)
    useEffect(()=>{
        props.pathChange(window.location.pathname)
    },[])

    return(
        <div className="container add-and-ed">
            <div className="container-card">
                <div className="card">
                    <div className="title-card">
                        <h2> {action} {type} </h2>
                    </div>
                    <form>
                        <input></input>
                        <input></input>
                        <input></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        path:state.path,
        selectClient: state.selectClient,
        selectedProduct: state.selectedProduct
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAndEdit);