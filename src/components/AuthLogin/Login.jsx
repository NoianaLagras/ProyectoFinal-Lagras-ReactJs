import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { handleLogin, isLoggedIn, user, handleLogout } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire('Inicio de sesión exitoso', `Usuario: ${email}`, 'success');
        handleLogin({ email });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Error en el inicio de sesión', 'Inténtelo de nuevo más tarde', 'error');
      });
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2 className="user">{`👤Usuario: ${user.email}`}</h2>
        <Link to="/orders">
          <button type="button" className="btn btn-danger mx-2">
            Mis pedidos
          </button>
        </Link>
        <button type="button" className="btn btn-dark mx-2" onClick={handleLogoutClick}>
          Cerrar sesión
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleLoginSubmit}>
        <h2 className="login">Login</h2>
        <div className="mb-4">
          <label htmlFor="loginEmail" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    );
  }
};

export default Login;