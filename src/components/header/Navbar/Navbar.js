import React, {useEffect, useContext} from 'react';

// Local Imports
import './Navbar.css';
import logo from '../../../media/img/logo_electromundo.png';
import Categorias from '../../../mock/Categorias';
import CartWidget from '../CartWidget/CartWidget';
import {UserContext} from '../../../context/UserContext';

// Modules Imports
import { Grid, Box, Container, Stack, BottomNavigation, BottomNavigationAction, Avatar, Chip } from '@mui/material/';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Navbar = () => {
    const valorUserContext = useContext(UserContext)

    const [value, setValue] = React.useState('');
    const [username, setUsername] = React.useState('...');

    useEffect(()=>{
        setUsername(valorUserContext.nombre)
    },[valorUserContext])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className='header--main'>
            
            {/* Seccion superior del navbar */}
            <Box className='box'>
                <Container maxWidth="lg">
                    <Grid container>

                        {/* Titulo & Logo */}
                        <Grid xs={2}>
                            <Stack direction="row" spacing={2}>
                                <Link to="/"><img src={logo} className="header--logo" alt="logo" value={''} onClick={handleChange} /></Link>
                                <h2 className="header--title">Electromundo</h2>
                            </Stack>
                        </Grid>

                        {/* Espacio en blanco del navbar */}
                        <Grid xs={8}>
                        </Grid>

                        {/* Boton Cart & User */}
                        <Grid textAlign="right" xs={2}>
                            <Grid container>
                                <Grid xs={5} sx={{marginTop: 0}}>
                                    <Link to="/cart" onClick={handleChange}><CartWidget /></Link>
                                </Grid>
                                <Grid xs={7} sx={{marginTop: 0.2}}>
                                    <Chip 
                                    component={Link} 
                                    to='/user' 
                                    className="profile" 
                                    color="warning" 
                                    avatar={<Avatar style={{backgroundColor: '#fbd007', color:'black'}}><AccountCircleIcon/></Avatar>} 
                                    label={username} />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

             {/* Seccion inferior del navbar */}
            <Box sx={{ background: 'black'}}>
                <Container className="header--menubar" maxWidth="lg">
                    <BottomNavigation showLabels value={value} onChange={handleChange}>
                        {
                            Categorias.map((categoria) => {
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
