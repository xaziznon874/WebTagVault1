import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTag from "./components/AddTag";
import TagList from "./components/TagList";
import SidebarLayout from './components/SidebarLayout'
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <SidebarLayout/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<AddTag />} />
            <Route path="/list" element={<TagList />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
