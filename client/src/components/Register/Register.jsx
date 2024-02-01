"use client"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions';
import validate from './validate1';

export default function RegistrationForm() {
  const dispatch = useDispatch();
 
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dni: '',
    email: '',
    password: '',
    pais: '',
    ciudad: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const validateError = validate({ ...formData, [e.target.name]: e.target.value });
    setErrors(validateError);
  };

  const clearForm = () => {
    setFormData({
      name: '',
      age: '',
      dni: '',
      email: '',
      password: '',
      pais: '',
      ciudad: '',
      phoneNumber: '',
    });
    setErrors({});
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      await dispatch(createUser(formData));
      clearForm();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md text-black shadow-md "
          placeholder="Nombre Completo"
          onChange={handleChange}
          required
        />
        {errors.name && (
          <p className="text-red-500 text-sm italic mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Edad
        </label>
        <input
          type="number"
          id="age"
          name="age"
          min="18"
          placeholder='Ingrese su edad'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
        {errors.age && (
          <p className="text-red-500 text-sm italic mt-1">{errors.age}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
          DNI
        </label>
        <input
          type="text"
          id="dni"
          name="dni"
          placeholder='Ingrese su DNI'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
        {errors.dni && (
          <p className="text-red-500 text-sm italic mt-1">{errors.dni}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Ingrese su correo electrónico'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm italic mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm italic mt-1">{errors.password}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          País
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder='Ingrese su pais'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          Ciudad
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder='Ingrese su ciudad'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Número de Teléfono
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='Ingrese su numero de telefono'
          className="w-full px-3 py-2 border rounded-md text-black shadow-md"
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm italic mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};