import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const roleMap = {
    victim: 'patient',  // maps UI value "victim" to stored DB value "patient"
    volunteer: 'volunteer',
    donor: 'donor'
  };

  const handleLogin = async () => {
    try {
      const mappedRole = roleMap[role];
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role: mappedRole
      });

      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      navigate('/'); // or navigate(`/dashboard/${mappedRole}`)
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f1f8f4">
      <Paper elevation={4} sx={{ p: 4, width: 350, borderRadius: 3 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: '#388E3C', fontWeight: 700 }}
        >
          ResQNet Login
        </Typography>

        {/* User Role Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ color: '#388E3C' }}>User Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="User Role"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#A5D6A7' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#66BB6A' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#388E3C' },
            }}
          >
            <MenuItem value="victim">Victim</MenuItem>
            <MenuItem value="volunteer">Volunteer</MenuItem>
            <MenuItem value="donor">Donor</MenuItem>
          </Select>
        </FormControl>

        {/* Email */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" textAlign="center" mt={1}>
            {error}
          </Typography>
        )}

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: '#388E3C', '&:hover': { backgroundColor: '#2e7d32' } }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
