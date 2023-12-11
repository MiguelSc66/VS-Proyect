"use client"
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/actions';

export default function RegistrationForm() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(createUser(data));
    reset();
  };

  return (
    <Container >
      <Typography variant="h4" component="h2" className="flex justify-center items-center mt-20">
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-400 mt-8 rounded-lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo requerido' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre Completo"
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="age"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo requerido', min: 18 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Edad"
                  fullWidth
                  error={Boolean(errors.age)}
                  helperText={errors.age?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
                  error={Boolean(errors.dni)}
                  helperText={errors.dni?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Campo requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email no válido',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
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
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Teléfono"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ciudad"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="País"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <div className="flex justify-center mt-4">
          <Button type="submit" variant="contained" color="primary" className=' shadow-md shadow-black mb-3'>
            Registrar
          </Button>
        </div>
      </form>
    </Container>
  );
}