import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { projectCountSelector } from '../store/projects/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const projectsLeft = useSelector(projectCountSelector);
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ margin: 'auto' }}>
          Total projects: {projectsLeft}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
