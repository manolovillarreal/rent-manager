import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRecoveryPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RecoveryScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [{email}, handleInputChange] = useForm({
    email: "",
  });


  const handleRecovery = (e) => {
    e.preventDefault();
    dispatch(startRecoveryPassword(email));
  };


  return (
    <>
    <div style={{ textAlign: "center" }}>
      <img id="auth__logo" src="/img/logo.jpg" alt="logo" />
    </div>
    <h3 className="auth__title">Rent - Manager</h3>

    <form onSubmit={handleRecovery}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="auth__input"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        id="btn_login"
        className="btn btn-primary btn-block"
        disabled={loading}
      >
       Send Email
      </button>
      <div className="center mb-5 mt-1">
        <Link to="/auth/login" className="link">
          Log In
        </Link>
      </div>
    </form>
  </>
  )
}
