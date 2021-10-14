import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import "./Login.css"

const Login = () => {
    const {singInUsingGoogle}=useAuth();
    const location= useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from ||'/shop';
    
    const handleSingInUsingGoogle=()=>{
        singInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
            
        }) 
        
    }
    return (
        <div className='login-form'>
            <div className='form-area'>
            <h2>Login</h2>
            <form>
                <label>Email</label>
                <br/>
                <input type='email' placeholder='Enter your email' />
                <br/>
                <label>Password</label>
                <br/>
                <input type='password' placeholder='Enter your password' />
                <br/>
                <input type='submit' value='submit' className='' />
                </form>
                <p>New to ema-John? <Link to='/register'>create new account.
                </Link></p>
                <div>-----------or---------</div>
                <button type='submit' className=' btn-regular' onClick={handleSingInUsingGoogle}>Sign In with Google</button>
            </div>
            
        </div>
    );
};

export default Login;