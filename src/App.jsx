import { Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Sidebar from './components/SidebarLayout';
import AddTag from './components/AddTag';
import TagList from './components/TagList';
import Welcome from "./components/Welcome";

export default function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: { default: '#f9f9f9', paper: '#fff' },
            primary: { main: '#1976d2' }
          }
        : {
            background: { default: '#121212', paper: '#1e1e1e' },
            primary: { main: '#90caf9' }
          })
    }
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Sidebar />
        {/* Dark/Light toggle tugmasi AppBarga integratsiya qilingan bo‘lishi mumkin; lekin shu yerda ham namoyish qilamiz */}
        <Box sx={{ position: 'fixed', top: 70, right: 20, zIndex: 1100 }}>
          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit" bgColor="red" sx={{ cursor: 'pointer' }}>
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
        <Routes>
          <Route path="/*" element={<Welcome />} />
          <Route path="/addtag" element={<AddTag />} />
          <Route path="/list" element={<TagList />} />
        </Routes>
    </ThemeProvider>
  );
}

