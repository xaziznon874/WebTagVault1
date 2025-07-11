import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function Welcome() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        height: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2
      }}
    >
      <EmojiObjectsIcon sx={{ fontSize: 60, mb: 2, color: isDark ? 'gold' : 'orange' }} />
      <Typography variant="h4" gutterBottom>
        Web Tag Vault’ga xush kelibsiz!
      </Typography>
      <Typography variant="body1" maxWidth="600px">
        Yangi teg qo‘shish yoki mavjud teglar ro‘yxatini ko‘rish uchun chap menyudagi bo‘limlardan birini tanlang.
      </Typography>
    </Box>
  );
}
