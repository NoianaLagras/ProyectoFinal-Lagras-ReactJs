import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

import { auth } from '../../firebase.config';

const Registro = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire('Registro exitoso', `Usuario registrado: ${user.email}`, 'success');
        closeModal();
      })
      .catch((error) => {
        Swal.fire('Error en el registro', error.message, 'error');
      });
  };

  return (
    <form onSubmit={handleRegistro}>
      <h2>Registro</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
  );
};

export default Registro;