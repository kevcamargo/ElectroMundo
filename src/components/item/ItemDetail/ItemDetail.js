import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ({producto}) => {

    const contenidoCarrito = (x) =>{
        if(x == 1){
            console.log("Se añadio un producto al carrito")
        }
        else{
            console.log("Se añadieron "+x+" productos al carrito")
        }
    }

    return(
        <>
            
            <Container>
                
                <div className='container--box'>
                    {/* Presentacion */}
                    <Box className="container--boxProducto fontPrincipal">
                        <h5 className='container--spanRuta reset'>
                            Electromundo -&gt; Computadoras -&gt;
                            <b className='container--spanRutaActual'>{producto.name}</b>
                        </h5>
                        <Grid container spacing={0} sx={{paddingTop: 1}}>
                            <Grid item md={7} className="container--grid--imagen">
                                <img src={producto.image_url} className='container--imagen' alt="producto"></img>
                            </Grid>
                            <Grid item md={4} sx={{paddingLeft: 3}}>
                                <h3 className='container--tituloProducto reset'>{producto.name}</h3>
                                <h2 className='container--precio'>{producto.price}</h2>
                                <Container sx={{paddingTop: 5}}>
                                    <ItemCount idProducto={producto.id} stock={producto.stock} initial={1} onAdd={contenidoCarrito} sx={{padding: 2}}/>
                                    <h5 className='container--stock'>
                                        Stock disponible :  {producto.stock} 
                                    </h5>
                                </Container>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Descripcion */}
                    <Box className="container--boxDetalle fontPrincipal">
                        <h3 className='container--subtitulo'>Descripcion</h3>
                        <Stack justifyContent="center" alignItems="center" spacing={6}>
                            <img src={producto.image_url2} className='container--imagenDetalle' alt="productoDescripcion"></img>
                            <p className='container--textoDetalle'>
                                {producto.descripcion}
                            </p>
                        </Stack>
                    </Box>
                    {/* Características Tecnicas */}
                    <Box className="container--boxCaracteristicas">
                        <h3 className='container--subtitulo'>Características Técnicas</h3>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>
                            <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='specs--titulo negrita' width={300} align='center'>Procesador</TableCell>
                                                <TableCell className='specs--cell' align='right'>
                                                    <TableContainer>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Modelo</TableCell>
                                                                        <TableCell className='specs--cell' align='right'>{producto.procesadorModelo}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Velocidad</TableCell>
                                                                        <TableCell className='specs--cell' align='right'>{producto.procesadorVelocidad}</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                            </Table>
                                                    </TableContainer>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                            </TableContainer>
                            <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='specs--titulo negrita' width={300} align='center'>Memoria y Almacenamiento</TableCell>
                                                <TableCell className='specs--cell' align='right'>
                                                    <TableContainer>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Disco SSD</TableCell>
                                                                        <TableCell className='specs--cell' align='right'>{producto.memoriaSSD}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Memoria RAM</TableCell>
                                                                        <TableCell align='right'>{producto.memoriaRam}</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                            </Table>
                                                    </TableContainer>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                            </TableContainer>
                            <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='specs--titulo negrita' width={300} align='center'>Pantalla y Video</TableCell>
                                                <TableCell className='specs--cell' align='right'>
                                                    <TableContainer>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Tamaño de pantalla</TableCell>
                                                                        <TableCell className='specs--cell' align='right'>{producto.pantallaPulgada}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Tecnología de pantalla</TableCell>
                                                                        <TableCell className='specs--cell' align='right'>{producto.pantallaTecno}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell className='specs--cell negrita'>Placa de Video</TableCell>
                                                                        <TableCell align='right'>{producto.pantallaPlaca}</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                            </Table>
                                                    </TableContainer>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                            </TableContainer>
                        </Stack>
                    </Box>
                </div>
                
            </Container>
        </>
    )
}

export default ItemDetail