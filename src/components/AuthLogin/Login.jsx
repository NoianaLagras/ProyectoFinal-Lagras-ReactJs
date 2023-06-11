import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Swal from 'sweetalert2';

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire('Inicio de sesión exitoso', `Usuario: ${user.email}`, 'success');
        closeModal();
      })
      .catch((error) => { 
        console.log(error)
        Swal.fire('Error en el inicio de sesión','intentelo de nuevo mas tarde', 'error');
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
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
        <label htmlFor="loginPassword" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
    </form>
  );
};

export default Login;