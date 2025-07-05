import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const VolunteerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can send form data to backend here
  };

  return (
    <Box sx={{ backgroundColor: '#eaf6f6', py: 6, minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" textAlign="center" gutterBottom>
          Volunteer Information
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          Tell us more about yourself to help us plan and assign roles effectively.
        </Typography>

        {!submitted ? (
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField label="Address" multiline rows={2} fullWidth required />
                  <TextField label="Location (City/District)" fullWidth required />
                  <TextField label="Pincode" fullWidth required />

                  <TextField
                    label="Describe Your Skills / Strengths"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />

                  <TextField
                    label="Why do you wish to join ResQNet?"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<VolunteerActivismIcon />}
                  >
                    Submit Details
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" textAlign="center" color="green" sx={{ mt: 4 }}>
            🙏 Thank you for sharing! Your details have been recorded.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default VolunteerForm;
