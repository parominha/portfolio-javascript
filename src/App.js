import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import Login from './pages/Login.js'
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';
import AuthCheck from './components/authCheck.js'
import GuestOnly from './components/guestOnly.js';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<GuestOnly><Login /></GuestOnly>} />
          <Route path='/register' element={<GuestOnly><Register /></GuestOnly>} />
          <Route path='/dashboard' element={<AuthCheck><Dashboard /></AuthCheck>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
