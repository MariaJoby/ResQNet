import React, { useState } from 'react';
import {Box,Button,Card,CardContent,TextField,Typography,LinearProgress,Container,Stack,InputAdornment,} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [donated, setDonated] = useState(false);

  const handleDonate = () => {
    if (amount && Number(amount) > 0) {
      setDonated(true);
      // Later: Send data to backend / API
      setTimeout(() => {
        setDonated(false);
        setAmount('');
      }, 5000);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5f9ff', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" textAlign="center" gutterBottom>
          🌟 Support a Cause
        </Typography>
        <Typography variant="subtitle1" textAlign="center" sx={{ mb: 4 }}>
          Your donation can empower someone's life with the care and tools they need.
        </Typography>

        {/* Fundraiser Info */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobility Aid for Ramesh (Age 9)
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Help Ramesh get a wheelchair to attend school independently. Every rupee counts!
            </Typography>
            <LinearProgress variant="determinate" value={40} sx={{ mb: 1 }} />
            <Typography variant="caption">₹8,000 raised of ₹20,000 goal</Typography>
          </CardContent>
        </Card>

        {/* Donation Form */}
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <TextField
                label="Donation Amount"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
              />
              <TextField label="Name (optional)" fullWidth />
              <TextField label="Email (optional)" type="email" fullWidth />

              <Button
                variant="contained"
                color="error"
                size="large"
                startIcon={<FavoriteIcon />}
                onClick={handleDonate}
              >
                Donate Now
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {donated && (
          <Typography
            variant="h6"
            color="green"
            textAlign="center"
            sx={{ mt: 4 }}
          >
            🙏 Thank you for your kindness and generosity!
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Donate;
