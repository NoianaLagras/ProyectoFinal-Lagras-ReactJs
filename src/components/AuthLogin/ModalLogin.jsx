import React, { useState } from 'react';
import Registro from './Registro';
import Login from './Login';
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('registro');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    setActiveTab('registro');
  };

  const handleLogin = (loggedInUser) => {
    setIsLoggedIn(true);
    setUser(loggedInUser);
    toggleModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={toggleModal}>Mi Cuenta</button>
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Acceso</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'registro' ? 'active' : ''}`}
                      id="registro-tab"
                      data-bs-toggle="tab"
                      onClick={() => setActiveTab('registro')}
                    >
                      Registro
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'inicioSesion' ? 'active' : ''}`}
                      id="inicioSesion-tab"
                      data-bs-toggle="tab"
                      onClick={() => setActiveTab('inicioSesion')}
                    >
                      Inicio Sesión
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div
                    className={`tab-pane fade ${activeTab === 'registro' ? 'show active' : ''}`}
                    id="registro"
                    role="tabpanel"
                    aria-labelledby="registro-tab"
                  >
                    <Registro closeModal={toggleModal} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                  </div>
                  <div
  className={`tab-pane fade ${activeTab === 'inicioSesion' ? 'show active' : ''}`}
  id="inicioSesion"
  role="tabpanel"
  aria-labelledby="inicioSesion-tab"
>
  <Login closeModal={toggleModal} handleLogin={handleLogin} isLoggedIn={isLoggedIn} user={user} />
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  );
};

export default Modal;