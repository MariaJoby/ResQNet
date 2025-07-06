
import React from 'react';
import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#f1f8f4', py: 5 }}>
      <Container maxWidth="md">
      <Typography
        variant="h2"
        sx={{
            textAlign:'center',
          fontWeight: 900,
          fontSize: { xs: '2.8rem', sm: '4.5rem', md: '5rem' },
          color: '#66bb6a',
          textShadow: '2px 2px 8px rgba(13, 71, 161, 0.3)',
          letterSpacing: 2,
          fontFamily: "'Segoe UI', Roboto, sans-serif",
          p:2
        }}
      >
        ResQ.Net
      </Typography>
       
         {/* Vision & Mission */}
       <Paper elevation={2} sx={{ p: 4, mb: 6 }} borderRadius='4'>
  <Typography variant="h5" color="primary" gutterBottom sx={{textAlign:'center'}}>
    What Drives Us
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
    We believe that **everyone deserves access to the tools that help them live, move, and connect—regardless of ability or income**.
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
   <Box component="strong" sx={{ color: 'blue' }}>Our Goal:</Box> Make assistive technology simple to find, affordable to get, and easy to trust—so that no one is left behind due to a missing wheelchair, hearing aid, or smart cane.
  </Typography>
  <Typography variant="body1" color="text.secondary">
    <Box component="strong" sx={{ color: 'blue' }}>Our Promise:</Box> Whether you're buying, donating, or supporting, ResQ.Net is your space to make real impact—one device, one life, one step at a time.
  </Typography>
</Paper>


        {/* Why ResQ.Net */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Why ResQ.Net?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
            Whether you need a smart cane, a hearing aid, or a custom‑made wheelchair, ResQ.Net brings together discounted NGO stock, refurbished donations, and brand‑new devices in one place—so you can compare, rent, or buy with confidence.
          </Typography>
        </Box>

        {/* Who We Serve */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          {[
            { title: 'Buyers', desc: 'Find, compare, and finance the right assistive device for you.' },
            { title: 'NGOs & Charities', desc: 'Offer subsidised or donated aids to verified users.' },
            { title: 'Vendors', desc: 'Sell inclusive products and reach a focused community.' },
            { title: 'Donors', desc: 'Give pre‑loved devices a second life and track their impact.' },
          ].map((role) => (
            <Card key={role.title} sx={{ width: 250 }} elevation={7}>
              <CardContent >
                <Typography variant="h6" color="primary" gutterBottom>
                  {role.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {role.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Impact Statistics */}
        <Stack direction="row" spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {[
            { label: 'Devices Delivered', value: '2,500+' },
            { label: 'Inclusive Vendors', value: '120+' },
            { label: 'NGO Partners', value: '65+' },
          ].map((stat) => (
            <Box key={stat.label} textAlign="center">
              <Typography variant="h4" color="primary">
                {stat.value}
              </Typography>
              <Typography variant="subtitle1">{stat.label}</Typography>
            </Box>
          ))}
        </Stack>
{/* Success Stories */}
<Box sx={{ textAlign: 'center', mb: 6 }}>
  <Typography variant="h4" color="primary" gutterBottom>
    Real Stories, Real Impact
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
    Meet some of the inspiring individuals who found life-changing support through ResQ.Net.
  </Typography>

  <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={3}
    justifyContent="center"
    alignItems="center"
    sx={{ flexWrap: 'noWrap' }}
  >
    {[
      {
        name: 'Arjun, Kerala',
        img: 'https://i.pinimg.com/originals/45/9e/08/459e0897c8255eebf5f59c3d90add8b4.png',
        quote: 'Got a smart cane within 3 days of posting a request. Now I can walk independently!',
      },
      {
        name: 'Sana, Mumbai',
        img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=300&h=200&q=80',
        quote: 'ResQ.Net helped me get a hearing aid at half the price. Forever grateful!',
      },
      {
        name: 'Ravi, Hyderabad',
        img: 'https://tse3.mm.bing.net/th/id/OIP.pGF80EVFM1NX2suAdkmCegHaE8?pid=Api&P=0&h=180',
        quote: 'The NGO tie-ups made my wheelchair delivery so smooth. Excellent service!',
      },
    ].map((story) => (
      <Card key={story.name} sx={{ maxWidth: 300 }}>
        <img
          src={story.img}
          alt={story.name}
          style={{ width: '100%', height: 200, objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />
        <CardContent>
          <Typography variant="subtitle1" color="primary" fontWeight="bold">
            {story.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "{story.quote}"
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Stack>
</Box>

        {/* Primary CTA */}
        <Stack direction="row" justifyContent="center" sx={{ mb: 6 }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            
            href="/products"
          >
              Want to know more
          </Button>
        </Stack>

        {/* Get Involved CTA */}
        <Box
          sx={{
            py: 5,
            px: 2,
            backgroundColor: '#c8e6c9',
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Want to Make Assistive Tech Affordable?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            Partner with ResQ.Net as a vendor, NGO, or donor. Together, we can bridge the accessibility gap and empower millions.
          </Typography>
          <Button variant="outlined" color="primary" href="/contact">
            Get Involved
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default Home;

