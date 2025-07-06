import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#388E3C' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
            ResQNet
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/h" style={{ textDecoration: 'none' }}>
              <Button variant="contained"
                sx={{
                  backgroundColor: 'white', // lighter green
                  color: '#1B5E20',            // dark green text
                  '&:hover': {
                    backgroundColor: '#81C784'
                  }
                }}
              >
                Home
              </Button>
            </Link>

            <Link to="/r" style={{ textDecoration: 'none' }}>
              <Button variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: '#1B5E20',
                  '&:hover': {
                    backgroundColor: '#81C784'
                  }
                }}
              >
                Registration
              </Button>
            </Link>

            <Link to="/l" style={{ textDecoration: 'none' }}>
              <Button variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: '#1B5E20',
                  '&:hover': {
                    backgroundColor: '#81C784'
                  }
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
