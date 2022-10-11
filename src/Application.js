import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { Box } from '@mui/material';

const Application = () => {
  return (
    <div>
      <Box>
        <Header />
        <Box
          sx={{
            paddingTop: '80px',
            paddingLeft: '20px',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Application;
