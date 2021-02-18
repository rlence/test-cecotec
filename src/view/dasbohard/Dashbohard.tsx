import React, { useEffect, useState } from 'react';
import './dashboard.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath, saveListClient, saveListProduct} from '../../Redux/Actions/actions';
import ListData from '../../components/listData/ListData';
import {getListCLient, getListProducts, deleteElement} from '../../api/dashboard';
import Modal from '../../components/modal/Modal';


function Dashboard(props:any){


    const [errClient, setErrCLient] = useState(false);
    const [loadingClient, setLoadingClient] = useState(false);
    const [loadingProduct, setLoadingProduct] = useState(false);
    const [errProduct, setErrProducts] = useState(false);
    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState({
        id:'',
        name:'',
        price:'',
        type:''
    });

    useEffect(()=>{
        props.pathChange('/dashboard');
        dataProducts();
        dataClients();
    },[])

    const dataProducts = () => {
        setLoadingProduct(true);
        setTimeout(() => {
            getListProducts()
            .then( data => {
                props.getAllProduct(data)
                setLoadingProduct(false);
            })
            .catch( err => setErrProducts(true))
        },3000)
    }

    const dataClients = () => {
        setLoadingClient(true);
        setTimeout(() => {
            
            getListCLient()
            .then( data => {
                props.getAllClient(data)
                setLoadingClient(false);
            })
            .catch(err => setErrCLient(true))

        },2000)
    }

    const refresData = () => {
        if(dataModal.type == 'client'){
            dataClients()
        }else{
            dataProducts()
        }
    }

    return(
        <div className="container container-dash">
            <div className="row">
                <div className="list">
                    <ListData 
                        loading={loadingClient}
                        title="Lista de Clientes"
                        data={props.clients}
                        error={errClient}
                        text='email'
                        to="/edit/client"
                        add="/add/client"
                        setModal={setModal}
                        setDataModal={setDataModal}
                    />
                </div>
                <div  className="list">
                    <ListData
                        loading={loadingProduct}
                        title="Lista de Productos"
                        data={props.product}
                        error={errProduct}
                        text='price'
                        to='/edit/product'
                        add="/add/product"
                        setModal={setModal}
                        setDataModal={setDataModal}
                    />
                </div>
            </div>
            {modal ? <Modal selected={dataModal}  setModal={setModal}  refresData={refresData} /> : null}
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