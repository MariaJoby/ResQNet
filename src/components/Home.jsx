import React from 'react';
import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f4f8', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Our Vision & Mission
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6">Vision</Typography>
          <Typography>
            To build a resilient world where every disaster-affected person can receive timely help using technology-driven coordination.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6">Mission</Typography>
          <Typography>
            To connect victims, volunteers, NGOs, and donors on one platform for real-time communication and aid distribution.
          </Typography>
        </Paper>
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            startIcon={<HelpOutlineIcon />}
            href="/request-help" 
          >
            Request Help
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
