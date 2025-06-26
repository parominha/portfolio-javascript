import React, { useEffect, useState } from 'react';
import {
    Grid, Paper, Box, Button,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import user from '../config/user.js'

const Dashboard = () => {

    const navigate = useNavigate();

    const [perfil, setPerfil] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }


    useEffect(() => {
        const token = localStorage.getItem('token');

        user.get('/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => setPerfil(res.data.user))
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
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
                        mx: 'auto'
                    }}>
                    <Box>
                        Bem-vindo, {perfil.name}
                    </Box>
                </Paper>
            </Grid>
            <Button onClick={handleLogout}>Logout</Button>
        </Grid>
    )
}

export default Dashboard;
