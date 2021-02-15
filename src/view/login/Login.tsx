import React, {useState} from 'react';
import './login.scss';
import '../../index.scss'


function Login(){

    const [user, setUser] = useState({
        user:'',
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
        
    }

    return(
        <div className="container">
            <div className="card card-body">
                <form onChange={handelChange}>
                    <div className=" column content-card">
                        <input className="from-inputs" type="text" placeholder="username"></input>
                        <input className="from-inputs" type="password" placeholder="passwords"></input>
                    </div>
                    <div className="content-buttons">
                        <button type="submit" className="form-button"> Login </button>
                    </div>

                    {error.err ? 
                        <div>
                            <p>{error.msg}</p>
                        </div>
                        : null
                    }
                </form>
            </div>
        </div>
    )

}


export default Login;