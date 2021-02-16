import React, {useEffect, useState} from 'react';
import './modal.scss';
import '../../index.scss';

function Modal(props:any) {
    console.log(props.selected);
    const [data, setData] = useState<any>([]);
    useEffect(()=>{
        let list = []
        for(let key in props.selected){
            list.push([key, props.selected[key]])
        }
        setData(list)
    },[])


    return(
        <div className="content-modal">
            <div className="centet-card">
                <div className="card modal-body">
                    <h2> Seguro que quieres borrar este elemento </h2>
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
                        <button className="close" onClick={ ()=> props.setModal(false)} >Cerrar</button>
                        <button className="succes" >Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Modal;