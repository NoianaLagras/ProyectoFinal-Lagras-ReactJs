import { useState } from 'react';

export const useFormValues = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return [formValues, handleChange, resetForm];
};
