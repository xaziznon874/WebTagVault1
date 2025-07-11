import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Backdrop,
  useTheme
} from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function EditTagModal({ open, handleClose, tag, refresh }) {
  const theme = useTheme();
  const [form, setForm] = useState(tag || {});

  useEffect(() => {
    if (tag) setForm(tag);
  }, [tag]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/tags/${form.id}`, form);
      refresh();
      handleClose();
    } catch (err) {
      console.error('Xatolik:', err);
    }
  };

  const bgColor = theme.palette.mode === 'dark' ? '#1e1e1f' : '#999';
  const textColor = theme.palette.mode === 'dark' ? '#f5f5f5' : '#fff';
  const labelColor = theme.palette.mode === 'dark' ? '#bbbbbb' : '#fff';

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 900 }}
    >
      <motion.div
        initial={{ opacity: 1, scale:0.1 }}
        animate={{ opacity: 1, scale: 0.99 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '1000px',
          margin: '0% auto',
          outline: 'none'
        }}
      >
        <Typography variant="h6" mb={2}>Tegni Tahrirlash</Typography>

        <TextField
          name="tagName"
          label="Teg Nomi"
          fullWidth
          value={form.tagName || ''}
          onChange={handleChange}
          margin="normal"
          autoFocus
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
          name="description"
          label="Tavsif"
          fullWidth
          multiline
          rows={10}
          value={form.description || ''}
          onChange={handleChange}
          margin="normal"
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
          name="code"
          label="Kod"
          fullWidth
          multiline
          rows={4}
          value={form.code || ''}
          onChange={handleChange}
          margin="normal"
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
          onClick={handleSave}
          sx={{ mt: 2, float: 'right', cursor: 'pointer' }}
        >
          Saqlash
        </Button>
      </motion.div>
    </Modal>
  );
}
