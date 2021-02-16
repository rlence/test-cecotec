import React, { useEffect, useState } from 'react';
import './dashboard.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath, saveListClient, saveListProduct} from '../../Redux/Actions/actions';
import ListData from '../../components/listData/ListData';
import {getListCLient, getListProducts} from '../../api/dashboard';
import Modal from '../../components/modal/Modal';


function Dashboard(props:any){


    const [errClient, setErrCLient] = useState(false);
    const [errProduct, setErrProducts] = useState(false);
    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState({
        id:'',
        name:'',
        price:'',
        type:''
    })

    useEffect(()=>{
        props.pathChange('/dashboard')
        loadinData()
    },[])

    const loadinData = () => {
        setTimeout(() => {
            
            getListCLient()
            .then( data => props.getAllClient(data))
            .catch(err => setErrCLient(true))

        },2000)

        setTimeout(() => {
            getListProducts()
            .then( data => props.getAllProduct(data))
            .catch( err => setErrProducts(true))
        },3000)
    }


    return(
        <div className="container container-dash">
            <div className="row">
                <div className="list">
                    <ListData 
                        title="Lista de Clientes"
                        data={props.clients}
                        error={errClient}
                        text='date'
                        to="/edit/client"
                        setModal={setModal}
                        setDataModal={setDataModal}
                    />
                </div>
                <div  className="list">
                    <ListData
                        title="Lista de Productos"
                        data={props.product}
                        error={errProduct}
                        text='price'
                        to='/edit/product'
                        setModal={setModal}
                        setDataModal={setDataModal}
                    />
                </div>
            </div>
            {modal ? <Modal selected={dataModal}  setModal={setModal} /> : null}
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        path:state.path,
        clients:state.client,
        product:state.product,
        selectClient:state.selectClient,
        selectedProduct:state.selectedProduct
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path)),
        getAllClient: (client:any) => dispatch(saveListClient(client)),
        getAllProduct:(products:any) => dispatch(saveListProduct(products)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);