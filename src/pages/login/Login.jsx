import { useState } from 'react';
import './Login.scss';

const Login = () => {

    const [error, setError] = useState(false);

    return (
        <div className='login'>
            <form >
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <button type='submit'>Login</button>
                {error && <span>Wrong email or password!</span> }
            </form>
        </div>
    )
}

export default Login