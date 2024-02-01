// validation.js
export const validateLoginForm = (formData) => {
    const errors = {};
  
    // Validación del campo de correo electrónico
    if (!formData.email) {
      errors.email = "El correo electrónico es obligatorio";
    }
  
    // Validación del campo de contraseña
    if (!formData.password) {
      errors.password = "La contraseña es obligatoria";
    }
  
    return errors;
  };
  