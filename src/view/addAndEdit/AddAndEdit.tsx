import React, { useEffect, useState, Fragment} from 'react';
import './addAndEdit.scss';
import '../../index.scss';
import { connect } from 'react-redux';
import { changePath } from '../../Redux/Actions/actions';
import { updateElement, createElement } from '../../api/createAndEdti';
import Error from '../../components/error/Error';
import Spinner from '../../components/spinner/Spinner';

function AddAndEdit(props:any){

    const translate:any = {
        name:'Nombre',
        price:'Precio',
        add: 'Añadir',
        client:'cliente',
        product:'producto',
        email:'Email',
        edit:'Editar'
    }


    const location = window.location.pathname.split('/');
    const action = location[1]; //type of action edit or add
    const type = location[2]; //type of element client or product

    const clientPropieties = ['name', 'email'];
    const productPropieties = ['name', 'price']

    const [state, setState] = useState<any>({});
    const [error, setError] = useState({
        err:false,
        msg:''
    });
    const [loading, setLoading] = useState(false);

    console.log(type , action)

    useEffect(()=>{
        props.pathChange(window.location.pathname)
    },[])

    const addOrEdit = () => {
       
        if(action == 'add'){
            return clientOrProductAdd()
        }else{
            return clientOrProductEdit()
        }
    }

    const clientOrProductAdd = () => {
        if(type=='client'){
            return clientPropieties.map( (propierty:string, index:number) => {
                return  (
                    <Fragment>
                        <label>{translate[propierty]}</label>
                        <input type="text" key={index} name={propierty} />
                    </Fragment>
                )
            });
        }else{
            return productPropieties.map( (propierty:string, index:number) => {
                return  (
                    <Fragment>
                        <label>{translate[propierty]}</label>
                        <input type="text" key={index} name={propierty} />
                    </Fragment>
                )
            });
        }
    }

    const clientOrProductEdit = () =>{
        if(type=='client'){
            return clientPropieties.map( (propierty:string, index:number) => {
                return  (
                    <Fragment>
                        <label>{translate[propierty]}</label>
                        <input type="text" name={propierty} key={index} defaultValue={props.selectClient[propierty]} />
                    </Fragment>
                )
            });
        }else{
            return productPropieties.map( (propierty:string, index:number) => {
                return  (
                    <Fragment>
                        <label>{translate[propierty]}</label>
                        <input type="text" key={index} name={propierty} defaultValue={props.selectedProduct[propierty]} />
                    </Fragment>
                )
            });
        }
    }

    const handelChane = (e:any) => {
        console.log(e.target.name)
        setState( { ...state ,[e.target.name]:e.target.value })
    }

    const handelSubmit = (e:any) => {
        e.preventDefault();
        let isEmpty = false;
        for(let key in state){
            console.log(key)
            console.log(state[key])
            if(state[key] == ''){
                isEmpty = true;
            }
        }

        if(isEmpty){
            setError({
                err:true,
                msg:'No puede haber campos vacios'
            });
            return;
        }

        setLoading(true)
        setError({
            err:false,
            msg:''
        });

        setTimeout(() =>{
            if(action == 'edit'){
                if(type == 'client'){
                    uppdate(props.selectClient.id);
                }else{
                    uppdate(props.selectedProduct.id); 
                }
            }else{
                createElement(state, type)
                .then( data => {
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    setError({
                        err:true,
                        msg: err
                    })
                })  
            }
        }, 2000)

    }

    const uppdate = (id:number) => {
        updateElement(id, state, type)
        .then( data => {
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            setError({
                err:true,
                 msg: err
            })
        })
    }

    console.log(state)

    return(
        <div className="container add-and-ed">
            <div className="container-card">
                <div className="card">
                    <div className="title-card">
                        <h2> {translate[action]} {translate[type]} </h2>
                    </div>
                    <form className="column form-inputs" onChange={handelChane} onSubmit={handelSubmit} >
                        {addOrEdit()}

                        { !loading ? 
                            <button>Guardar</button>
                            :
                            <Spinner />
                        }
                        
                    </form>
                    <div className="message">
                        {error.err ? <Error msg={error.msg} /> : null}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:any, props:any) => {

    return{
        path:state.path,
        selectClient: state.selectClient,
        selectedProduct: state.selectedProduct
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        pathChange: (path:string)=> dispatch(changePath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAndEdit);