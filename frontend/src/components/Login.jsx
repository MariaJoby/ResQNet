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

const Login = () => {
  const [role, setRole] = useState('');

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
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#A5D6A7',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#66BB6A',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#388E3C',
              },
            }}
          >
            <MenuItem value="victim">Victim</MenuItem>
            <MenuItem value="volunteer">Volunteer</MenuItem>
            <MenuItem value="donor">Donor</MenuItem>
          </Select>
        </FormControl>

        {/* Email or Phone */}
        <TextField
          label="Email or Phone"
          fullWidth
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#388E3C',
              },
            },
          }}
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#388E3C',
              },
            },
          }}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: '#388E3C',
            '&:hover': {
              backgroundColor: '#2e7d32',
            },
            color: '#fff',
            fontWeight: 600
          }}
        >
          Login
        </Button>

        {/* Links */}
        <Box textAlign="center" mt={2}>
          <Button
            variant="text"
            size="small"
            sx={{ color: '#388E3C', fontWeight: 500 }}
          >
            Forgot Password?
          </Button>
          <br />
          <Button
            variant="text"
            size="small"
            sx={{ color: '#388E3C', fontWeight: 500 }}
          >
            New user? Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
