import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='login-form'>
        <div>
        <h2>Register</h2>
        <form>
            <input type='email' />
            <br/>
            <input type='password' />
            <br/>
            <input type='submit' value='submit' />
            </form>
            <p>Already have an account? <Link to='/login'>Login
            </Link></p>
            <div>-----------or---------</div>
            <button type='submit' className=' btn-login'>Sign In with Google</button>
        </div>  
    </div>
    );
};

export default Register;