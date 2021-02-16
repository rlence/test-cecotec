import React from 'react';
import './edit.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import {changePath, saveListClient, saveListProduct} from '../../Redux/Actions/actions';
import ListData from '../../components/listData/ListData';
import {getListCLient, getListProducts} from '../../api/dashboard';

function Edit(props:any){

    return(
        <div>
            hola
        </div>
    )
}

export default connect(null, null)(Edit);