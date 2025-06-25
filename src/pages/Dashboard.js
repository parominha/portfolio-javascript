import React from 'react';
import {Grid, Paper, Box, Button,
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh', bgcolor: "#f1f1f1" }}
            spacing={1}
        >
            {/* Usuário e Senha */}
            <Grid item xs={12} md={6}>
                <Paper elevation={0}
                    sx={{
                        px: 4,
                        py: 2,
                        width: 350,
                        textAlign: 'center',
                    }}>
                    <Box>
                        Dashboard
                    </Box>
                </Paper>
            </Grid>
            <Button onClick={handleLogout}>Logout</Button>
        </Grid>
    )
}

export default Dashboard;
