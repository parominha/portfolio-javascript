import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fe99ab',
            contrastText: '#fff',
        },
        secondary: {
            main: '#555',
        },
        background: {
            default: '#111',
            paper: '#12121295',
        },
        text: {
            primary: '#fff',
            secondary: '#bbb',
        },
    },
    typography: {
        fontFamily: 'Nunito, Arial, sans-serif',
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '1px solid #333',
                    borderRadius: 8,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: 1,
                },
            },
            defaultProps: {
                fullWidth: true,
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#121212',
                    color: '#f2f2f2',
                },

                notchedOutline: {
                    borderColor: '#333',
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#fe99ab',
                    fontSize: 24,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#fff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '8px 24px',
                    transition: 'background-color 0.3s ease',
                    '&.Mui-disabled': {
                        backgroundColor: '#555',
                        color: '#bababa',
                        cursor: 'not-allowed',
                    }
                },
                containedPrimary: {
                    backgroundColor: '#fe99ab',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#fe8da1',
                    },
                },
                outlinedPrimary: {
                    borderColor: '#fe99ab',
                    color: '#fe99ab',
                    '&:hover': {
                        backgroundColor: '#fe99ab1a',
                        borderColor: '#fe8da1',
                    },
                },
                textPrimary: {
                    color: '#fe99ab',
                    '&:hover': {
                        backgroundColor: '#fe99ab1a',
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    color: '#fe99ab',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#fe8da1',
                        textDecoration: 'underline',
                    },
                },
            },
        },
    },
    shape: {
        borderRadius: 0,
    },
});

export default theme;