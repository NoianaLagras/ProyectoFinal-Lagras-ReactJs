import React from 'react';

const ComponenteFormulario = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="col-xl-12">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        type="text"
        className="form-control border-info"
        id={name}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChange}
        required
      />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  );
};

export default ComponenteFormulario;