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
        setLoading(true);
    },[])

    return(
        <div className="card content-list-data">
            <div className="title-card">
                <h2> {props.title} </h2>
            </div>
            <div className="body-card">
                <ul>
                    <li className="row">
                        <p>id</p>
                        <p> cliente name || product name</p>
                        <p> create date</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default connect(null, null)(ListData);

