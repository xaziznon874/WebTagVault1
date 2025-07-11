import React, { useEffect, useState, useRef } from 'react';
import {
  Box, Typography, Card, CardContent, TextField, Autocomplete, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import EditTagModal from './EditTagModal';

export default function TagList() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const tagRefs = useRef({});

  const fetchTags = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tags');
      setTags(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchTags(); }, []);

  const handleSelect = (e, value) => {
    if (value && tagRefs.current[value]) {
      tagRefs.current[value].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEdit = (tag) => {
    setSelectedTag(tag);
    setOpenModal(true);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: { xs: 10, sm: 8 }, p: 2 }}>
      <Typography variant="h5" gutterBottom>Taglar Ro'yxati</Typography>
      <Autocomplete
        options={tags.map((t) => t.tagName)}
        onChange={handleSelect}
        renderInput={(params) => <TextField {...params} label="Tagni qidirish" fullWidth />}
        sx={{ mb: 3 }}
      />

      {tags.map(tag => (
        <Card
          key={tag.id}
          ref={(el) => tagRefs.current[tag.tagName] = el}
          sx={{ mb: 2, boxShadow: 3, cursor: 'default' }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">{tag.tagName}</Typography>
              <IconButton onClick={() => handleEdit(tag)} sx={{ cursor: 'pointer' }}>
                <EditIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{tag.description}</Typography>
            <Box sx={{ mt: 1, p: 1,  borderRadius: 1, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              {tag.code}
            </Box>
          </CardContent>
        </Card>
      ))}

      {selectedTag && (
        <EditTagModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          tag={selectedTag}
          refresh={fetchTags}
        />
      )}
    </Box>
  );
}
