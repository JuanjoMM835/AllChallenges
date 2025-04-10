import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmail } from '../store/auth/authThunks';

export const Login = () => { // logica de un login normal 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmail(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <div>
      <h1>Login</h1>
      
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button> 
      </form>

      <button onClick={onGoogleSignIn}>Google Login</button>
    </div>
  );
};