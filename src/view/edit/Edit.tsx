import React, { useEffect } from 'react';
import './edit.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath, saveListClient, saveListProduct} from '../../Redux/Actions/actions';
import {getListCLient, getListProducts} from '../../api/dashboard';

function Edit(props:any){
    const location = window.location.pathname.split('/');
    const path = location[2];

    useEffect(()=>{
        props.pathChange(window.location.pathname)
    },[])

    return(
        <div>
            hola
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        path:state.path,
        clients:state.client,
        product:state.product,
        selectClient: state.selectClient,
        selectedProduct: state.selectedProduct
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path)),
        getAllClient: (client:any) => dispatch(saveListClient(client)),
        getAllProduct:(products:any) => dispatch(saveListProduct(products)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);