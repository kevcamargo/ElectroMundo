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
import {Link} from 'react-router-dom';

const categorias = [
    {
        id: 0,
        nombre: 'Computadoras',
        ruta: '/categorias/computadoras',
        icono: <ComputerIcon />
    },
    {
        id: 1,
        nombre: 'Celulares',
        ruta: '/categorias/celulares',
        icono: <SmartphoneIcon />
    },
    {
        id: 2,
        nombre: 'Consolas',
        ruta: '/categorias/consolas',
        icono: <SportsEsportsIcon />
    },
    {
        id: 3,
        nombre: 'Televisores',
        ruta: '/categorias/televisores',
        icono: <TvIcon />
    },
    {
        id: 4,
        nombre: 'Audio',
        ruta: '/categorias/audio',
        icono: <SpeakerIcon />
    }
]

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
                                <Link to="/"><img src={logo} className="header--logo" alt="logo" value={''} onClick={handleChange} /></Link>
                                <h2 className="header--title">Electromundo</h2>
                            </Stack>
                        </Grid>
                        <Grid xs={8}>
                            {/* Espacio en blanco del navbar */}
                        </Grid>
                        <Grid textAlign="right" xs={2}>
                            <Link to="/cart"><CartWidget/></Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

             {/* Seccion inferior del navbar */}

            <Box sx={{ background: 'black'}}>
                <Container className="header--menubar" maxWidth="lg">
                    <BottomNavigation showLabels value={value} onChange={handleChange}>
                        {
                            categorias.map((categoria) => {
                                return(
                                    <BottomNavigationAction component={Link} to={categoria.ruta} label={categoria.nombre} value={categoria.id} icon={categoria.icono} />
                                )
                            })
                        }
                    </BottomNavigation>
                </Container>
            </Box>
        </header>
        
    )
}

export default Navbar
