import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTag() {
  const [tagName, setTagName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!tagName || !description || !code) return alert("Barcha maydonlarni to‘ldiring");

    await axios.post('http://localhost:5000/tags', {
      tagName, description, code
    });

    // Yangi sahifaga o‘tish
    navigate('/list');
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>HTML Tag Qo‘shish</Typography>
      <TextField
        label="Teg nomi"
        fullWidth
        value={tagName}
        onChange={e => setTagName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Teg haqida"
        fullWidth
        value={description}
        onChange={e => setDescription(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Kod"
        fullWidth
        multiline
        rows={3}
        value={code}
        onChange={e => setCode(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>Qo‘shish</Button>
    </Box>
  );
}
