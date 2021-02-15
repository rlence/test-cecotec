import React from 'react';

function Layout(props:any){

    return(
        <div>
            <div className="">
                aqui va el navbar
            </div>
            <div>
                {props.children}
            </div>
            <div className="">
                footer
            </div>
        </div>
    )
}



export default Layout;