import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../../index.scss';
import './listData.scss';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import {selectedClient, selectedProduct} from '../../Redux/Actions/actions';

function ListData(props:any){

    const [redirect, setRedirect] = useState(false);

    const handleClick = (e:any, data:any) => {
        e.preventDefault();
        const type = props.to.split('/');
        if(type[2] == 'client'){
            props.selectOneClient(data)
        }else{  
            props.selectOnProduct(data)
        }
        setRedirect(true);
    }

    const listToprint = () => {

        if(props.data.length == 0 && props.error == false){
            return <Spinner />

        }else if(props.data.length == 0 && props.error == true){
            return <Error msg="Se produjo un error" />

        }else{
            return props.data.map( ( dato:any, key:number ) => {
                return (
                    <li key={key} onClick={(e) => handleClick(e, dato)} className="row">
                        <p> {dato.id} </p>
                        <p> {dato.name} </p>
                        <p> {dato[props.text]} </p>
                    </li>
                )

            });
        }
    }

    return(
        <div className="card content-list-data">
            <div className="title-card">
                <h2> {props.title} </h2>
            </div>
            <div className="body-card">
                <ul>
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

