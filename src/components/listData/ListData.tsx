import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import '../../index.scss';
import './listData.scss';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import {selectedClient, selectedProduct} from '../../Redux/Actions/actions';

function ListData(props:any){

    const [redirect, setRedirect] = useState(false);
    const type = props.to.split('/');
    const handleClick = (e:any, data:any) => {
       
        e.preventDefault();
        if(type[2] == 'client'){
            props.selectOneClient(data)
        }else{  
            props.selectOnProduct(data)
        }
        setRedirect(true);
    }  

    const confimeDelete = (e:any, dato:any) =>{
        props.setModal(true);
        const type = props.to.split('/');
        dato.type = type[2];
        props.setDataModal(dato)
    }

    const listToprint = () => {

        if(props.loading == true){
            return <Spinner />

        }else if(props.data.length == 0 && props.error == true){
            return <Error msg="Se produjo un error" />

        }else if(props.loading == false && props.data.length > 0){
            return props.data.map( ( dato:any ) => {
                return (
                    <div className="row content-row">
                        <li key={dato.id + type[2]} onClick={(e) => handleClick(e, dato)} className="row">
                            <p className="id"> {dato.id} </p>
                            <p> {dato.name} </p>
                            <p> {dato[props.text]} </p>
                            <p> {dato.date} </p>
                        </li>
                        <p className="icon" onClick={(e) => confimeDelete(e, dato)} > 
                            <i className="fas fa-trash-alt"></i> 
                        </p>
                    </div>
                )

            });

        }else{
            return(
                <div className="row content-row">
                    <li className="row">
                        <p>No hay datos</p>
                    </li>
                </div>
            )
        }
    }

    return(
        <div className="card content-list-data">
            <div className="title-card row" >
                <div>
                    <h2> {props.title} </h2>
                </div>
                <Link className="icon" to={props.add}>
                    <i className="fas fa-plus"></i>
                </Link>
            </div>
            <div className="body-card">
                <ul>
                    <div className="content-row">
                        <li className="row">
                            <p>ID</p>
                            <p>Nombre</p>
                            <p>{type[2] == 'client' ? 'Total de compra': 'Precio'}</p>
                            <p>Fecha</p>
                        </li>
                    </div>
                    
                    {listToprint()}
                </ul>
            </div>
            { redirect ? 
                <Redirect to={props.to} />
                : null
            }
        </div>
    )

}

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        selectOneClient: (client:any) => dispatch(selectedClient(client)),
        selectOnProduct: (products:any) => dispatch(selectedProduct(products)),

    }
}

export default connect(null, mapDispatchToProps)(ListData);

