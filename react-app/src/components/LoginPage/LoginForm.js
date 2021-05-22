import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const loginDemo = async () => {
    const user = await login("demo@aa.io", "password");
    if (!user.errors) {
      setAuthenticated(true);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin} className='login-form'>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='login__form-field' >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="example@email.com..."
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='login__form-field' >
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Your password here..."
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className="buttons">
        <button type="submit" className='button'>Login</button>
        <button className='button' onClick={loginDemo}>Demo</button>
      </div>
    </form>
  );
};

export default LoginForm;