import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles')
    } catch (error) {
      setError(e.message);
    }
  }


  return (
    <div className="w-[70%] flex flex-col justify-center items-center">
      <h1>Log In</h1>
      { error && <p className='error'>{error}</p>}
      <input 
        placeholder='Enter Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type="password"
        placeholder='Enter Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <Link to={"/register"}>Create Account</Link>
    </div>
  )
}

export default LoginPage