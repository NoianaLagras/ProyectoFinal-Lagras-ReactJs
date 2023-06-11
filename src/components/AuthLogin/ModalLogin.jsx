import Registro from './Registro';
import Login from './Login';
import { useState } from 'react';


const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
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
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="registro-tab" data-toggle="tab" href="#registro" role="tab" aria-controls="registro" aria-selected="true">Registro</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="inicioSesion-tab" data-toggle="tab" href="#inicioSesion" role="tab" aria-controls="inicioSesion" aria-selected="false">Inicio de Sesión</a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div className="tab-pane fade show active" id="registro" role="tabpanel" aria-labelledby="registro-tab">
                    <Registro closeModal={toggleModal} />
                  </div>
                  <div className="tab-pane fade" id="inicioSesion" role="tabpanel" aria-labelledby="inicioSesion-tab">
                    <Login closeModal={toggleModal} />
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