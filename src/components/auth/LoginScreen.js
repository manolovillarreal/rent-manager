import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginWithEmail } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";


export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmail(email, password));
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
     <>
      <div style={{ textAlign: "center" }}>
        <img id="auth__logo" src="/img/logo.jpg" alt="logo" />
      </div>
      <h3 className="auth__title">Rent - Manager</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          autoComplete="off"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          id="btn_login"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          LOG IN
        </button>
        <div className="center mb-2 mt-1">
          <Link to="/auth/register" className="link">
            Sign Up
          </Link>
        </div>
        <div className="center mb-5 mt-1">

          <Link to="/auth/recovery" className="link">
            Reset Password
          </Link>
        </div>
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
