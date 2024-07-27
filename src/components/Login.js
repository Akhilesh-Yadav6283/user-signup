import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/profile');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className='box'>
    <div className='container'>
      <p style={{color:"lightgray"}}>Welcome back!👋 </p>
      <h2>Sign in to your account</h2>
      <h4>Your email</h4>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h4>Password</h4>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='btn1' onClick={handleLogin}>CONTINUE</button>
      <p style={{color:"blue",textAlign:"center"
      }}>Forget your password</p>
      {error && <p style={{color:"red", textAlign:"center"}}>{error}</p>}
    </div>
    <div>
      <p>Don't have an account? <button className='btn2'>Sign up</button></p>
    </div>
    </div>
  );
}

export default Login;
