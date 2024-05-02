import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if(password !== confirmPassword){
        setError("Password not matching");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch (error) {
      setError(error.message)
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
    <input type="password"
      placeholder='Confirm Password'
      value={confirmPassword}
      onChange={e => setConfirmPassword(e.target.value)}
    />
    <button onClick={createAccount}>Create Account</button>
    <Link to={"/login"}>Log In</Link>
  </div>
  )
}

export default Register