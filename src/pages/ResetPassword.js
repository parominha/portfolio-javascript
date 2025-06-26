import React, { useState } from 'react';
import {
    TextField, Typography, Grid, Paper,
    Button,
    InputAdornment,
    Box,
} from '@mui/material';
import auth from '../config/auth.js'
import { useNavigate } from "react-router-dom";
import { ErrorOutlineRounded, LockRounded, PersonRounded, GridViewRounded, EmailRounded, CodeRounded, Email } from '@mui/icons-material';
import Error from '../components/error.js';

const ResetPassword = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError('Ops! As senhas não são iguais.');
            return;
        }
        auth.post('register', {
            name: name,
            email: email,
            password: password
        }).then((res) => {
            if (res.data.message) {
                navigate('/');
            }
        }).catch((err) => {
            setError('Erro ao registrar. Tente novamente.');
            console.error(err);
        });
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

            {/* Bloco 2 */}
            <Grid item size={12}>
                <Paper elevation={0}
                    sx={{
                        p: 4,
                        maxWidth: '450px',
                        width: '100%',
                        mx: 'auto',
                    }}>
                    {/* título */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 3 }}>
                        <Typography sx={{ color: '#f1f1f1', fontSize: '18px' }}>
                            Recuperação de senha
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
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Error error={error} setError={setError} />
                    <Button
                        fullWidth
                        onClick={handleRegister}
                        disabled={!email || error}
                        variant="contained"
                    >
                        Enviar e-mail
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ResetPassword;