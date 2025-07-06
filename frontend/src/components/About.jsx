// src/pages/About.jsx
import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery
} from "@mui/material";

const features = [
  {
    title: "Inclusive Access",
    description:
      "Connects people with disabilities to essential aids like hearing devices, walking sticks, wheelchairs, and more."
  },
  {
    title: "Donation & Reuse",
    description:
      "Encourages individuals to donate used but functional equipment to those in need."
  },
  {
    title: "NGO & Hospital Collaboration",
    description:
      "Partners with NGOs, hospitals, and government bodies to verify requests and provide trusted support."
  },
  {
    title: "Income-Based Prioritization",
    description:
      "Ensures fair distribution by prioritizing aid based on the recipient’s economic background."
  }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        About Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
        Our platform is built to empower people with disabilities by providing a
        seamless way to access mobility and medical aids. We bring together NGOs,
        hospitals, government agencies, and generous donors to support those in need,
        creating a more inclusive and compassionate society.
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Join Us in Making a Difference
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Whether you're an organization or an individual, your support can help change lives.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
