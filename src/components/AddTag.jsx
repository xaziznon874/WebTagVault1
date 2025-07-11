import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Slide, useTheme
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTag() {
  const [tagName, setTagName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!tagName || !description || !code) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    try {
      await axios.post('http://localhost:5000/tags', { tagName, description, code });
      navigate('/list');
    } catch (error) {
      alert("Xatolik yuz berdi!");
    }
  };

  const textColor = theme.palette.mode === 'dark' ? '#f5f5f5' : '#111';
  const labelColor = theme.palette.mode === 'dark' ? '#bbb' : '#444';

  return (
    <Slide direction="right" in={true}>
      <Paper
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 10, sm: 10 },
          p: 3,
          borderRadius: 2,
          boxShadow: 20,
          // maxWidth responsiv media queries bilan
          '@media (max-width: 320px)': {
            maxWidth: 300
          },
          '@media (min-width: 374px)': {
            maxWidth: 355
          },
          '@media (min-width: 424px)': {
            maxWidth: 400
          },
          '@media (min-width: 765px) and (max-width: 992px)': {
            maxWidth: 650
          },
          '@media (min-width: 993px) and (max-width: 1024px)': {
            maxWidth: 750
          },
          '@media (min-width: 1025px) and (max-width: 1200px)': {
            maxWidth: 850
          },
          '@media (min-width: 1201px) and (max-width: 1440px)': {
            maxWidth: 850
          },
          '@media (min-width: 1441px) and (max-width: 10440px)': {
            maxWidth: 1550
          },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Yangi Teg Qo‘shish
        </Typography>

        <TextField
          label="Teg Nomi"
          fullWidth
          margin="normal"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          InputProps={{
            sx: {
              color: textColor,
              caretColor: textColor
            }
          }}
          InputLabelProps={{
            sx: {
              color: labelColor
            }
          }}
        />

        <TextField
          label="Teg Tavsifi"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          InputProps={{
            sx: {
              color: textColor,
              caretColor: textColor
            }
          }}
          InputLabelProps={{
            sx: {
              color: labelColor
            }
          }}
        />

        <TextField
          label="Kod"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          InputProps={{
            sx: {
              color: textColor,
              caretColor: textColor,
              fontFamily: 'monospace'
            }
          }}
          InputLabelProps={{
            sx: {
              color: labelColor
            }
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            cursor: 'pointer'
          }}
        >
          Qo‘shish
        </Button>
      </Paper>
    </Slide>
  );
}
