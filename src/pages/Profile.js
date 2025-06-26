import { EmailRounded, PersonRounded } from "@mui/icons-material";
import { Box, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import user from "../config/user";

const Profile = () => {

    const [profile, setProfile] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');

        user.get('/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => setProfile(res.data.user))
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("/images/login-background.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(10px)',
                        transform: 'scale(1.1)',
                        zIndex: -1,
                    }
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
                            mx: 'auto'
                        }}>
                        <Typography sx={{ color: '#f1f1f1', fontSize: '20px', my: 2 }}>Perfil de {profile?.name}</Typography>
                        <Box sx={{border: '1px solid #333', mb: 4, maxWidth: '400px', mx: 'auto'}}>
                            <img
                                src="/images/profile.png"
                                alt="Foto de perfil"
                                style={{ width: '150px' }}
                            />
                        </Box>
                        <TextField
                            label="Usuário"
                            fullWidth
                            value={profile?.name}
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
                                        <PersonRounded />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="E-mail"
                            fullWidth
                            value={profile?.email}
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
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Profile;