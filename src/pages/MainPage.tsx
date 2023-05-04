import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Workspace from '../components/Workspace/Workspace';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const MainPage: React.FC = () => {

  return (
    <Box sx={{padding: '30px 0'}}>
      <Container>
        <Grid container columnSpacing={6}>
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
        <Grid item lg={8} >
          <Workspace />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;