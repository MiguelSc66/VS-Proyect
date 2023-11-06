"use client";
import { Container, TextField, Typography, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser, getAllAdmins, getAllUsers } from "@/redux/actions";


function LoginForm() {
  
  const [token, setToken] = useState("");
  const [authy, setAuthy] = useState(false);
  const dispatch = useDispatch();

  const authe = useSelector((state) => state.token);
  const user = useSelector((state) => state.users);
  const admin = useSelector((state) => state.admins);

  useEffect(() => {
    dispatch(getAllAdmins());
    dispatch(getAllUsers());
  }, [dispatch]);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    // agregar toats para confirmar login
    
    reset();
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        className="flex justify-center items-center mt-28"
      >
        Iniciar Sesión
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-400 mt-20 lg:w-[130vh] rounded-lg"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Campo requerido",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Correo electrónico no válido",
            },
          }}
          render={({ field }) => (
            <TextField
              type="text"
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              className="lg:w-[100vh] ml-24"
              {...field}
            />
          )}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Campo requerido",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          }}
          render={({ field }) => (
            <TextField
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              className="lg:w-[100vh] ml-24"
              margin="normal"
              {...field}
            />
          )}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className=" h-16 lg:w-[30vh] lg:ml-[46vh] mb-3"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
