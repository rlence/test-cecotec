import React, {useState ,useEffect} from 'react';
import './login.scss';
import '../../index.scss'
import Error from '../../components/error/Error';
import Spinner from '../../components/spinner/Spinner';
import{ login } from '../../api/login';
import { connect } from 'react-redux';
import {userLogin, changePath} from '../../Redux/Actions/actions';


function Login(props:any){
    
    useEffect(()=>{
        props.pathChange('/')
    },[])

    const [user, setUser] = useState({
        username:'',
        password:''
    });

    const [error, setError] = useState({
        err:false,
        msg:''
    });

    const [loading, setLoading] = useState(false);

    const handelChange = (e:any) =>{
        setUser({ ...user, [e.target.name]: e.target.value }); 
    }

    const handelSubmit = (e:any) => {
        e.preventDefault();
        setLoading(true);
        if(user.username == '' || user.password == ''){
            setError({err:true, msg:"Por favor rellene todos los campos"});
            setLoading(false);
            return;
        }
        setError({
            err:false,
            msg:''
        });

        setTimeout(()=>{
            login(user)
            .then( res => {
                setLoading(false);
                props.isAuthUser(true);
                props.history.push('/dashboard');
            })
            .catch(err => {
                setLoading(false);
                setError({
                    err:true,
                    msg:err
                });
            })
        }, 2000)
    }

    return(
        <div className="container container-login">
            <div className="card card-body">
                <form onChange={handelChange} onSubmit={handelSubmit}>
                    <div className=" column content-card">
                        <input className="from-inputs" name="username" type="text" placeholder="username"></input>
                        <input className="from-inputs" name="password" type="password" placeholder="passwords"></input>
                    </div>
                    { loading ? 
                        <Spinner />
                        :
                        <div className="content-buttons">
                            <button type="submit" className="form-button"> Login </button>
                        </div>
                    }
                    

                    {error.err ? 
                        <div>
                            <Error msg={error.msg} />
                        </div>
                        : null
                    }
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = (state:any, props:any) => {

    return{
        isAuth:state.isAuth,
    }

};

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        isAuthUser: (isLogin:boolean)=> dispatch(userLogin(isLogin)),
        pathChange: (path:string)=> dispatch(changePath(path))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);