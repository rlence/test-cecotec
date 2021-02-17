import React, {useEffect, useState, Fragment} from 'react';
import './modal.scss';
import '../../index.scss';
import {deleteElement }from '../../api/dashboard';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

function Modal(props:any) {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState('');

    
    useEffect(()=>{
        let list = []
        for(let key in props.selected){
            list.push([key, props.selected[key]])
        }
        setData(list)
    },[])

    const deleteElementSelected = () =>{
        setLoading(true);
        setTimeout(()=>{
            deleteElement(props.selected.id, props.selected.type)
                .then( (data) => {
                    setLoading(false);
                    props.setModal(false);
                    props.refresData();
                })
                .catch( (err) => {
                    setError(err);
                });
        },2000)
    }

    return(
        <div className="content-modal">
            <div className="centet-card">
                <div className="card modal-body">
                    <h2> Seguro que quieres borrar este {props.selected.type} </h2>
                    <div>
                        {data.length != 0 ? 
                            data.map((item:any,key:number) => {
                                return (
                                    <div key={key + 'modal'} className="row" >
                                        <p> {item[0]} : </p>
                                        <p> {item[1]} </p>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                    <div className="row line-btns">
                        { !loading ?
                            <Fragment>
                                <button className="close" onClick={ ()=> props.setModal(false)} >Cerrar</button>
                                <button className="delete" onClick={deleteElementSelected} >Borrar</button>
                            </Fragment>
                       
                            : <Spinner></Spinner>
                        }
                        { err != '' ? <Error msg={err} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Modal;