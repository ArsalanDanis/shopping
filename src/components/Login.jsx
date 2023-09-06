import './login.css';
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up logic here
      console.log('Sign Up:', email, password);
    } else {
      // Handle login logic here
      console.log('Login:', email, password);
    }
  };

  return (
    <div className="wrap text-white">
      <div id="App">
        <h1><strong className=' text-[25px]'>{isSignUp ? 'Sign Up' : 'Login'}</strong></h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
           id='loginInput'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
          id='loginInput'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id='btn' type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>
        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
        </p>
      </div>

    </div>
  );
}

export default LoginPage;