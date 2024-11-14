import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '600px' }}>
            MOVIE
          </Typography>
          <Button sx={{ color: 'white',marginTop:'-2px' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function App() {
  return (
    <div>
      <ButtonAppBar />
    </div>
  );
}