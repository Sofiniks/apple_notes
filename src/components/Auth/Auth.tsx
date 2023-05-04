import React from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

interface Props {
  email: string,
  password: string,
  setEmail: (e: string) => void,
  setPassword: (e: string) => void,
  onSubmit: (e: React.FormEvent) => Promise<void>
  isRegister?: boolean,
  errorMessage?: string
}

const Auth: React.FC<Props> = ({email, password, setEmail, setPassword, onSubmit, isRegister, errorMessage}) => {
  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
<Box sx={{
      minHeight: '300px',
      width: '50%',
      border: '1px solid grey',
      borderRadius: '10px',
      padding: '15px 20px'
    }}>
      <Typography component={'h2'} sx={{
        textAlign: 'center',
        fontSize: '20px',
        mb: '15px'
      }}>{isRegister ? 'Sign Up' : 'Sign In'}</Typography>
      {errorMessage && <Typography sx={{
        color: 'red'
      }}>{errorMessage}</Typography>}
      <form onSubmit={onSubmit}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
        fullWidth
        sx={{
          mb: '20px'
        }}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: `${isRegister ? 'center' : 'space-between' }`,
        alignItems: 'center'
      }}>
        <Button type="submit" variant='contained' sx={{
        backgroundColor: 'grey'
      }}>
        {isRegister ? 'Sign Up' : 'Sign In'}
      </Button>
      {!isRegister && <Box><Link to='/register'>Don't have an account? Register</Link></Box>}
      </Box>
      
    </form>
    </Box>
    </Container>
    
  )
    
    
};

export default Auth;