import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
  const [role, setRole] = useState('');
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f4f8">
      <Paper elevation={4} sx={{p:4,width:350}}>
      <Typography variant="h5" align="center" gutterBottom sx={{color: '#3f51b5',fontWeight: 600}}>
          ResQNet Login
      </Typography>
      <FormControl fullWidth margin="normal">
          <InputLabel>User Role</InputLabel>
          <Select value={role} onChange={(e) => setRole(e.target.value)} label="User Role">
            <MenuItem value="victim">Victim</MenuItem>
            <MenuItem value="volunteer">Volunteer</MenuItem>
            <MenuItem value="donor">Donor</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Email or Phone" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>

        <Box textAlign="center" mt={2}>
          <Button variant="text" size="small">Forgot Password?</Button><br/>
          <Button variant="text" size="small">New user? Register</Button>
        </Box>

      </Paper>
    </Box>
  )
}

export default Login