import React, { useState } from 'react';
import './navbar.scss';
import '../../index.scss';
import {connect} from 'react-redux';
import { NavLink, Redirect} from 'react-router-dom';

function NavBar(props:any){

    const [redirect, setRedirect] = useState({
      state:false,
      to:''
    })

    const handleClick = (e:any) => {
      e.preventDefault();
      console.log('haciendo click')
      if(props.isAuth == true){
        setRedirect({
          state: true,
          to:"/dashboard"
        })
      }else{
        setRedirect({
          state: true,
          to:"/"
        })
      }

    }

    return(
        <div className="cont-nav">
          <div className="row">
              <div className="img-nav">
                <img onClick={handleClick} src="https://www.pkfdcm.com/wp-content/uploads/2019/12/Cecotec_nuevo_programa_pagares_2019_.png" />
              </div>
             {props.path != '/' ?
                 <nav className="row nav-link">
                 <NavLink className="link" to="/client"> Clientes </NavLink>
                 <NavLink  className="link" to="/product"> Productos </NavLink>
               </nav>
               : null
             }
          </div>
          { redirect.state ?
            <Redirect to={redirect.to} />
            : null
          }
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {
    return {
        path:state.path,
        isAuth:state.isAuth
    }
}


export default connect(mapStateToProps, null)(NavBar);