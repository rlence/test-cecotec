import React from 'react';

function Error(props:any){

    return(
        <div className="content-error">
            <p>{props.msg}</p>
        </div>
    )
}

export default Error;