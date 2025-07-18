import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Add your register logic here
  };

  return (
    <Box
      sx={{
        minHeight: {
          xs: 'calc(100vh - 48px)',
          sm: 'calc(100vh - 56px)',
          md: 'calc(100vh - 64px)',
          lg: 'calc(100vh - 72px)',
        },
        mt: -8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Box mt={2}>
            <Button variant="contained" fullWidth type="submit">
              Register
            </Button>
          </Box>
          <Box mt={2}>
            <Button fullWidth onClick={() => navigate('/login')}>
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
