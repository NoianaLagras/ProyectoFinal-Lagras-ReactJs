import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Checkout from '../../pages/Checkout';

const Login = ({  handleLogin, isLoggedIn, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire('Inicio de sesión exitoso', `Usuario: ${email}`, 'success');
        handleLogin({ email });})
      .catch((error) => {
        console.log(error);
        Swal.fire('Error en el inicio de sesión', 'Inténtelo de nuevo más tarde', 'error');
      });
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2 className="user">{`👤Usuario: ${user.email}`}</h2>
        <Link to="/orders">
          <button type="button" className="btn btn-primary">
            Mis pedidos
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleLoginSubmit}>
        <h2 className='login'>Login</h2>
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
        {isLoggedIn && <Checkout />}
      </form>
    );
  }
};

export default Login;