import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f1f8f4', py: 6 }}>
      <Container maxWidth="md">

        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#388E3C',
            mb: 4,
          }}
        >
          About ResQ.Net
        </Typography>

        {/* Intro */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: '#e8f5e9' }}>
          <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }} gutterBottom>
            Our Purpose
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            ResQ.Net is a social impact platform designed to bridge the gap in accessibility for assistive devices. We work to ensure that no one is left behind simply due to the unavailability or unaffordability of essential medical aids like wheelchairs, hearing aids, or mobility tools.
          </Typography>

          <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }} gutterBottom>
            Our Collaborations
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            We proudly partner with:
          </Typography>

          <ul style={{ paddingLeft: '1.5rem', color: '#4e4e4e' }}>
            <li><strong>Hospitals & Clinics:</strong> To identify patient needs and distribute devices directly at discharge points.</li>
            <li><strong>NGOs & Charitable Trusts:</strong> To offer subsidised and donated aids for underserved communities.</li>
            <li><strong>Vendors & Manufacturers:</strong> To make inclusive tech and assistive products more accessible and affordable.</li>
          </ul>
        </Paper>

        {/* Mission & Vision */}
        <Stack spacing={3} sx={{ mt: 5 }}>
          <Paper elevation={2} sx={{ p: 3, backgroundColor: '#ffffff', borderLeft: '6px solid #388E3C' }}>
            <Typography variant="h6" sx={{ color: '#388E3C', fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To empower individuals with disabilities by enabling easy access to assistive technology—through community, compassion, and collaboration.
            </Typography>
          </Paper>

          <Paper elevation={2} sx={{ p: 3, backgroundColor: '#ffffff', borderLeft: '6px solid #66bb6a' }}>
            <Typography variant="h6" sx={{ color: '#388E3C', fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A world where every person—regardless of physical ability or income—can lead a dignified and independent life, aided by technology.
            </Typography>
          </Paper>
        </Stack>

        {/* Closing Statement */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 1 }}>
            Together, we can make mobility and independence a reality for all.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Want to support our mission? <a href="/contact" style={{ color: '#388E3C' }}>Partner with us</a>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
