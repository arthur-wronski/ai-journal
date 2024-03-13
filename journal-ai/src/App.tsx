import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Button size="medium">Hello world</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
