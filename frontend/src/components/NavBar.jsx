import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ResQNet</Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            
            <Link to="/h" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Home
              </Button>
              </Link>
              <Link to="/r" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Registration
              </Button>
            </Link>
            <Link to="/l" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Login
              </Button>
            </Link>           
            </Box> 
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default NavBar