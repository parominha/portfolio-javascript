import React, { useState } from 'react';
import {
    TextField, Typography, Grid, Paper,
    Button,
    InputAdornment,
    Box,
} from '@mui/material';
import { ErrorOutlineRounded, LockRounded, GridViewRounded, EmailRounded, CodeRounded } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import auth from '../config/auth.js';
import Error from '../components/error.js';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setError('E-mail inválido');
            return;
        }
        auth.post('login', {
            email: email,
            password: password
        }).then((res) => {
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/dashboard');
            } else {
                setError('Usuário ou senha incorretos!');
            }
        }).catch((err) => {
            setError('Erro ao conectar ao servidor.');
            console.log(err);
        })
    }

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("/images/login-background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            spacing={1}
        >
            <Grid item size={12}>
                <Paper elevation={0}
                    sx={{
                        px: 4,
                        py: 2,
                        maxWidth: '450px',
                        width: '100%',
                        textAlign: 'center',
                        mx: 'auto',
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                        <CodeRounded sx={{ fontSize: 30, color: '#fe99ab' }} />
                        <Typography sx={{ color: '#f1f1f1', fontSize: '20px' }}>
                            Placeholder
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item size={12}>
                <Paper elevation={0}
                    sx={{
                        p: 4,
                        maxWidth: '450px',
                        width: '100%',
                        margin: '0 auto',
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 3 }}>
                        <Typography sx={{ color: '#f1f1f1', fontSize: '18px' }}>
                            Login
                        </Typography>
                    </Box>
                    <TextField
                        label="E-mail"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                        }}
                        autoComplete='off'
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '5px',
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error) setError('');
                        }}
                        sx={{
                            mb: 1,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '5px',
                            },
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin();
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Error error={error} setError={setError} />
                    <Button
                        fullWidth
                        onClick={handleLogin}
                        disabled={!email || !password}
                        variant="contained"
                    >
                        Entrar
                    </Button>

                    <Typography sx={{ fontSize: '13px', textAlign: 'center', color: '#f1f1f1', mt: 0.6 }}>Não possui uma conta? <a href='/register' sx={{ color: '#ffafcc' }}>Clique aqui para criar</a></Typography>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login;
