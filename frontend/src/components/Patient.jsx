import React, { useState } from 'react';
import {Box,Button,Card,CardContent,Checkbox,Container,FormControlLabel,FormGroup,Stack,TextField,Typography,MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios'; // at the top if not already imported

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
const [form, setForm] = useState({
  fullName: '',
  address: '',
  phoneNumber: '',
  annualIncome: '',
  urgency: '',
  disabilityCert: null,
  incomeCert: null,
});

const onText = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

const onFile = (e) => {
  const { name, files } = e.target;
  setForm((prev) => ({ ...prev, [name]: files[0] }));
};

  const handleAidToggle = (item) => {
    setSelectedAids((prev) =>
      prev.includes(item)
        ? prev.filter((aid) => aid !== item)
        : [...prev, item]
    );
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  /* 1️⃣  Guard: make sure both files exist */
  if (!form.disabilityCert || !form.incomeCert) {
    alert("Please upload both required documents.");
    return;
  }

  /* 2️⃣  Build the multipart body */
  const formData = new FormData();

  // text fields
  formData.append("fullName",      form.fullName);
  formData.append("address",       form.address);
  formData.append("phoneNumber",   form.phoneNumber);
  formData.append("annualIncome",  form.annualIncome);
  formData.append("urgency",       form.urgency);

  // array → JSON string
  formData.append("selectedAids", JSON.stringify(selectedAids));

  // files
  formData.append("disabilityCert", form.disabilityCert);
  formData.append("incomeCert",     form.incomeCert);

  /* 3️⃣  POST to backend */
  try {
    await axios.post("http://localhost:5000/api/request-aid", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setSubmitted(true);
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Error submitting request.");
  }
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
  <TextField
    label="Full Name"
    name="fullName"             
    value={form.fullName}         
    onChange={onText}            
    fullWidth
    required
  />

  <TextField
    label="Address"
    name="address"                
    value={form.address}
    onChange={onText}
    multiline
    rows={2}
    fullWidth
    required
  />

  <TextField
    label="Phone Number"
    name="phoneNumber"            
    value={form.phoneNumber}
    onChange={onText}
    fullWidth
    required
  />

  <TextField
    label="Annual Income"
    name="annualIncome"           
    value={form.annualIncome}
    onChange={onText}
    fullWidth
    required
  />

  <FormControl fullWidth required>
    <InputLabel>Urgency Level</InputLabel>
    <Select
      name="urgency"              
      value={form.urgency}
      onChange={onText}
    >
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
                    <input type="file"  name="disabilityCert" onChange={onFile} hidden required />
                  </Button>
                  <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />}>
                    Upload Income Certificate
                    <input type="file" name="incomeCert" onChange={onFile} hidden required />
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
