import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';;
import { createUser } from '@/redux/actions';

export default function RegistrationForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // Realiza la lógica de registro aquí
    console.log(data);
    await dispatch(createUser(data)); // Envía los datos del formulario a la acción de Redux
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" className='flex justify-center items-center mt-28'>
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-400 mt-20 lg:w-[130vh] rounded-lg '>
        <Grid container spacing={5} className=''>
          <Grid item xs={5}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo requerido' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre"
                  fullWidth
                  className='mx-4'
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="edad"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo requerido', min: 18 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Edad"
                  fullWidth
                  className='ml-4'
                  error={Boolean(errors.edad)}
                  helperText={errors.edad?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="dni"
              control={control}
              defaultValue=""
              rules={{
                required: 'Campo requerido',
                pattern: {
                  value: /^[0-9]{8}$/,
                  message: 'DNI debe contener 8 números',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="DNI"
                  fullWidth
                  className='mx-4'
                  error={Boolean(errors.dni)}
                  helperText={errors.dni?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Campo requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email no válido',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  className='ml-4'
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
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
                  {...field}
                  label="Contraseña"
                  type="password"
                  fullWidth
                  className='mx-4'
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="telefono"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Teléfono"
                  fullWidth
                  className='ml-4'
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="ciudad"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ciudad"
                  fullWidth
                  className='mx-4'
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="pais"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="País"
                  fullWidth
                  className='ml-4'
                />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" className='lg:ml-[55vh] mt-8 mb-3'>
          Registrar
        </Button>
      </form>
    </Container>
  );
}
