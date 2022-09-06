import React from 'react';
import './Navbar.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../media/img/logo_electromundo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TvIcon from '@mui/icons-material/Tv';
import SpeakerIcon from '@mui/icons-material/Speaker';

const Navbar = () => {
    const [value, setValue] = React.useState('computadoras');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className='header--main'>
            <Box sx={{ bgcolor: 'black', width: '100%'}}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid xs={2}>
                            <Stack direction="row" spacing={2}>
                                <img src={logo} className="header--logo" alt="logo" />
                                <h2 className="header--title">Electromundo</h2>
                            </Stack>
                        </Grid>
                        <Grid xs={8}>
                            {/* Espacio en blanco del navbar */}
                        </Grid>
                        <Grid textAlign="right" xs={2}>
                        <IconButton color="warning" size="large">
                            <ShoppingCartIcon className='header--button--carrito'/>
                        </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: 'black'}}>
                <Container className="header--menubar" maxWidth="lg">
                    <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Computadoras"
                        value="computadoras"
                        icon={<ComputerIcon />}
                    />
                    <BottomNavigationAction
                        label="Celulares"
                        value="celulares"
                        icon={<SmartphoneIcon />}
                    />
                    <BottomNavigationAction
                        label="Consolas"
                        value="consolas"
                        icon={<SportsEsportsIcon />}
                    />
                    <BottomNavigationAction
                        label="Televisores"
                        value="televisores"
                        icon={<TvIcon />}
                    />
                    <BottomNavigationAction
                        label="Audio"
                        value="audio"
                        icon={<SpeakerIcon />}
                    />
                    </BottomNavigation>
                </Container>
            </Box>
        </header>
        
    )
}

export default Navbar