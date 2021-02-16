import React from 'react';
import './navbar.scss';
import '../../index.scss';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom';

function NavBar(props:any){

    return(
        <div className="cont-nav">
          <div className="row">
              <div className="img-nav">
                <img src="https://www.pkfdcm.com/wp-content/uploads/2019/12/Cecotec_nuevo_programa_pagares_2019_.png" />
              </div>
             {props.path != '/' ?
                 <nav className="row nav-link">
                 <NavLink className="link" to="/client"> Clientes </NavLink>
                 <NavLink  className="link" to="/product"> Productos </NavLink>
               </nav>
               : null
             }
          </div>
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {
    return {
        path:state.path
    }
}


export default connect(mapStateToProps, null)(NavBar);