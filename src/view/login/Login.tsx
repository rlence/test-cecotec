import React, {useState} from 'react';
import './login.scss';
import '../../index.scss'
import Error from '../../components/error/Error';

import{ login } from '../../api/login';


function Login(props:any){
  
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

        login(user)
        .then( res => {
            setLoading(false);
            props.history.push('/dashboard');
        })
        .catch(err => {
            setLoading(false);
            setError({
                err:true,
                msg:err
            });
        })
    }

    return(
        <div className="container">
            <div className="card card-body">
                <form onChange={handelChange} onSubmit={handelSubmit}>
                    <div className=" column content-card">
                        <input className="from-inputs" name="username" type="text" placeholder="username"></input>
                        <input className="from-inputs" name="password" type="password" placeholder="passwords"></input>
                    </div>
                    <div className="content-buttons">
                        <button type="submit" className="form-button"> Login </button>
                    </div>

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


export default Login;