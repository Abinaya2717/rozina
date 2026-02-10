import React from "react";
import "../Styles/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <p>Enter your email and password to login:</p>
           
        <form>
          <input
            type="email"
            placeholder="E-mail"
            required
          />
          
          <div className="password-box">
            <input
              type="password"
              placeholder="Password"
              required
            />
            <span className="forgot">Forgot your password?</span>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
