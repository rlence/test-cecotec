import React from 'react';
import './success.scss';

function Success (props:any) {

    return(
        <div className="success"> 
            <p>{props.msg}</p>
        </div>
    )
}

export default Success;