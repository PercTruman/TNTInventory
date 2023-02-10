import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function SmallNavbar() {
    const navigate = useNavigate();
    const theme = useTheme();

  return (
    <div style={{marginBottom:'5rem'}}>
    <AppBar position='static'>
        <Toolbar color={theme.palette.primary.light}>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                }}
            >
                <Button
                    onClick={() => navigate('/-orders')}
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                    }}
                >
                    Create Order
                </Button>
                <Button
                    onClick={() => navigate('/-fireworks')}
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                    }}
                >
                    Find Fireworks
                </Button>
                <Button
                    onClick={() => navigate('/-pods')}
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                    }}
                >
                    Pods
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
</div>
  )
}

export default SmallNavbar