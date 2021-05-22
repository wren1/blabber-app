import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp} className='signup-form'>
      <div className='login__form-field' >
        <label>Username</label>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Your username here..."></input>
      </div>
      <div className='login__form-field' >
        <label>Email</label>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="example@email.com..." ></input>
      </div>
      <div className='login__form-field' >
        <label>Password</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Your password here..." ></input>
      </div>
      <div className='login__form-field' >
        <label>Confirm Password</label>
        <input type="password" name="repeat_password" onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} placeholder="Confirm your password..."
          required={true} ></input>
      </div>
      <button type="submit" className='button'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
