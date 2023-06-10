import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const { id, img, name, price } = props;

  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 1500);

    const dataCard = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    };

    Promise.all([timer, dataCard()])
      .then(() => {
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => clearTimeout(timer);
  }, []);

  return cargando ? (
    <div className="cargando">Cargando...</div>
  ) : (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button className="addCart" onClick={() => navigate(`/item/${id}`)}>
        Ver detalle
      </button>
    </div>
  );
}

export default Card;