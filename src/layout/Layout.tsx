import React from 'react';
import Navbar from '../components/navbar/Navbar';
import {connect} from 'react-redux';

function Layout(props:any){
    console.log(props, 'layOut')
    return(
        <div>
            <div>
                <Navbar /> 
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {
    return {
        path:state.path
    }
}


export default connect(mapStateToProps, null)(Layout);