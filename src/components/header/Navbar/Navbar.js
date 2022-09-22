import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../../media/img/logo_electromundo.png'
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TvIcon from '@mui/icons-material/Tv';
import SpeakerIcon from '@mui/icons-material/Speaker';

const Navbar = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className='header--main'>
            
            {/* Seccion superior del navbar */}

            <Box className='box'>
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
                            <CartWidget/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

             {/* Seccion inferior del navbar */}

            <Box sx={{ background: 'black'}}>
                <Container className="header--menubar" maxWidth="lg">
                    <BottomNavigation showLabels value={value} onChange={handleChange}>
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
