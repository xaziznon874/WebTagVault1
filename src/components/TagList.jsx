import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {
  Box, Typography, Card, CardContent, TextField, List, ListItem, ListItemText, Autocomplete
} from '@mui/material';

export default function TagList() {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const tagRefs = useRef({});

  useEffect(() => {
    axios.get('http://localhost:5000/tags')
      .then(res => setTags(res.data));
  }, []);

  const handleSearchSelect = (tagName) => {
    const tagRef = tagRefs.current[tagName];
    if (tagRef && tagRef.scrollIntoView) {
      tagRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>HTML Teglar Ro‘yxati</Typography>

      <Autocomplete
        options={tags.map(t => t.tagName)}
        onInputChange={(event, value) => setSearch(value)}
        onChange={(e, val) => handleSearchSelect(val)}
        renderInput={(params) => (
          <TextField {...params} label="Teg nomi bo‘yicha qidiruv" variant="outlined" fullWidth sx={{ mb: 3 }} />
        )}
      />

      {tags.map((tag, idx) => (
        <Card
          key={idx}
          ref={(el) => (tagRefs.current[tag.tagName] = el)}
          sx={{ mb: 2 }}
        >
          <CardContent>
            <Typography variant="h6">{tag.tagName}</Typography>
            <Typography>{tag.description}</Typography>
            <pre style={{ background: '#f4f4f4', padding: '8px' }}>{tag.code}</pre>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
