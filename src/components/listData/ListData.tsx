import React, {useEffect, useState} from 'react';
import '../../index.scss';
import './listData.scss';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';


function ListData(props:any){

    const [loading , setLoading] = useState(false);
    const [error, setError] = useState({
        err:false,
        msg:''
    })

    useEffect(()=>{
       
    },[props.data, props.error])

    const listToprint = () => {

        if(props.data.length == 0 && props.error == false){
            return <Spinner />

        }else if(props.data.length == 0 && props.error == true){
            return <Error msg="Se produjo un error" />

        }else{
            return props.data.map( ( dato:any, key:number ) => {
                console.log(dato)
                return (
                    <li className="row">
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
        </div>
    )

}

export default connect(null, null)(ListData);

