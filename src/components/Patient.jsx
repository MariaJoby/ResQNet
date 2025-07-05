import React, { useState } from 'react';
import {Box,Button,Card,CardContent,Checkbox,Container,FormControlLabel,FormGroup,Stack,TextField,Typography,MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const aidItemsList = [
  'Hearing Aid',
  'Mobility Aid (Wheelchair/Walker)',
  'Braille Kit',
  'Learning Support Device',
  'Speech Device',
  'Custom Orthotic Device'
];

const RequestAid = () => {
  const [selectedAids, setSelectedAids] = useState([]);
  const [urgency, setUrgency] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAidToggle = (item) => {
    setSelectedAids((prev) =>
      prev.includes(item)
        ? prev.filter((aid) => aid !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show confirmation
    setSubmitted(true);
  };

  return (
    <Box sx={{ backgroundColor: '#eef6ff', py: 6, minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" textAlign="center" gutterBottom>
          Request Assistance
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          Fill out the form to request necessary assistive devices or support.
        </Typography>

        {!submitted ? (
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField label="Full Name" fullWidth required />
                  <TextField label="Address" multiline rows={2} fullWidth required />
                  <TextField label="Phone Number" fullWidth required />
                  <TextField label="Annual Income" fullWidth required />
                  <FormControl fullWidth>
                    <InputLabel>Urgency Level</InputLabel>
                    <Select value={urgency} onChange={(e) => setUrgency(e.target.value)} required>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Moderate">Moderate</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Aid Selection */}
<Typography variant="subtitle1" sx={{ mt: 2 }}>
  Select Required Items:
</Typography>

<FormGroup>
  {aidItemsList.map((item) => (
    <FormControlLabel
      key={item}
      control={
        <Checkbox
          checked={selectedAids.includes(item)}
          onChange={() => handleAidToggle(item)}
        />
      }
      label={item}
    />
  ))}

  {/* Other Option */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#1976d2', marginRight: '4px' }}>➕</span>
      Other:
    </Typography>
    <TextField
      placeholder="Specify custom item"
      variant="outlined"
      size="small"
      fullWidth
      onBlur={(e) => {
        const value = e.target.value.trim();
        if (value && !selectedAids.includes(value)) {
          setSelectedAids([...selectedAids, value]);
        }
        e.target.value = ''; // clear the field after entry
      }}
    />
  </Box>
</FormGroup>


                  {/* Uploads */}
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Upload Documents:
                  </Typography>
                  <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />}>
                    Upload Disability Certificate
                    <input type="file" hidden required />
                  </Button>
                  <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />}>
                    Upload Income Certificate
                    <input type="file" hidden required />
                  </Button>

                  <Button type="submit" variant="contained" color="primary" size="large">
                    Submit Request
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" textAlign="center" color="green" sx={{ mt: 4 }}>
            ✅ Your request has been submitted. Our team will contact you shortly!
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default RequestAid;
