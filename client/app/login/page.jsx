"use client"
import { Container, TextField, Typography, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser, getAllAdmins, getAllUsers } from "@/redux/actions";


export default function LoginForm() {
  const [token, setToken] = useState('');
  const [authy, setAuthy] = useState(false);
  const dispatch = useDispatch();
  const authe = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getAllAdmins());
    dispatch(getAllUsers());
  }, [dispatch]);

  const { handleSubmit, reset, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    reset();
  };



  return (
    <Container className="p-8 lg:mt-32 md:mt-32 sm:mt-32 mt-20 ">
      <Typography variant="h4" component="h2" className="text-center ">
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-400 mt-4 rounded-lg p-4">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Campo requerido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Correo electrónico no válido',
            },
          }}
          render={({ field }) => (
            <TextField
              type="text"
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Campo requerido',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres',
            },
          }}
          render={({ field }) => (
            <TextField
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4 sm:mt-20"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
}

