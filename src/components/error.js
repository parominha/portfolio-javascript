import { ErrorOutlineRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const Error = ({error, setError}) => {

    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: error ? 'transparent' : 'transparent',
                color: '#fff',
                borderRadius: '10px',
                py: 1,
                mb: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '40px',
                opacity: error ? 1 : 0,
                transition: 'all 0.2s ease',
            }}
        >
            {error && (
                <ErrorOutlineRounded
                    sx={{
                        position: 'absolute',
                        left: 16,
                        fontSize: 20,
                        color: '#fff'
                    }}
                />
            )}
            <Typography sx={{ fontSize: '14px' }}>
                {error || ' '}
            </Typography>
        </Box>

    )
}

export default Error;