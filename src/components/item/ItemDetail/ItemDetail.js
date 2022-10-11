import React, { useState, useContext, useEffect } from 'react';

// Local Imports
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Categorias from '../../../mock/Categorias';
import {CartContext} from '../../../context/CartContext';

// Modules Imports
import { Alert, Box, Container, Grid, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';




const ItemDetail = ({producto}) => {
    const {addItem, contenidoCart} = useContext(CartContext)

    const [mostrarFinalizarCompra, setMostrarFinalizarCompra] = useState(false)
    const [alertMensaje, setAlertMensaje] = useState("")
    const [mostrarSinStock, setmostrarSinStock] = useState(false)
    
    const productoCarrito = contenidoCart.find((x) => x.id==producto.id)

    useEffect(() => {
        if(productoCarrito != null){
            setmostrarSinStock(productoCarrito.cantidad == producto.stock)
        }
    },[])

    const handlerClick_FinalizarCompra = (cantidadProducto, idProducto) => {
        setMostrarFinalizarCompra(true)
        setAlertMensaje(mensajeProductoAñadido(cantidadProducto))
        addItem(producto, cantidadProducto)
    }

    const obtenerRutaCategoria = (categoria) => {
        const arrayCategoriasFiltrado = Categorias
            .filter( (x) => {
                if(x.nombre === categoria){
                    return(x)
                }
            })
        return arrayCategoriasFiltrado[0].ruta
    }
    
    const mensajeProductoAñadido = (x) => x==1 ?  ("Se añadio un producto al carrito.") : ("Se añadieron "+x+" productos al carrito.");

    return(
        <>
            <Container>

                <div className='container--box'>

                    {/* Presentacion */}
                    <Box className="container--boxProducto fontPrincipal">
                        <h5 className='container--spanRuta reset'>
                            <Link to="/">Electromundo </Link> 
                            -&gt;
                            <Link to={obtenerRutaCategoria(producto.categoria)}> {producto.categoria} </Link>
                            -&gt;
                            <b className='container--spanRutaActual'>{producto.name}</b>
                        </h5>
                        <Grid container spacing={0} sx={{paddingTop: 1}}>
                            <Grid item md={7} className="container--grid--imagen">
                                <img src={producto.image_url} className='container--imagen' alt="producto"></img>
                            </Grid>
                            <Grid item md={4} sx={{paddingLeft: 3}}>
                                <h3 className='container--tituloProducto reset'>{producto.name}</h3>
                                <h2 className='container--precio'>$ {Intl.NumberFormat('en-US').format(producto.price)}</h2>
                                <Container sx={{paddingTop: 5}}>
                                    
                                    {
                                        mostrarFinalizarCompra ?
                                        <Grid container xs={12}>
                                            <Grid item xs={12}>
                                                <Alert sx={{marginBottom: 2}} className="container--alert" severity="success" color="warning" variant="outlined">{alertMensaje}</Alert>
                                                <Button component={Link} to={"/cart"} variant="contained" className='boton_carrito'>
                                                    Finalizar compra
                                                    <DoneIcon sx={{marginLeft: 1}}/> 
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        :
                                        mostrarSinStock ? 
                                            <Grid container xs={12}>
                                                <Grid item xs={12}>
                                                    <Alert sx={{marginBottom: 2}} className="container--alert" severity="warning" color="warning" variant="outlined"> Sin stock disponible.</Alert>
                                                    <Button component={Link} to={"/"} variant="contained" className='boton_carrito'>
                                                        Volver a Inicio
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        :
                                        <ItemCount idProducto={producto.id} stock={ productoCarrito ? producto.stock - productoCarrito.cantidad : producto.stock} initial={1} onAdd={handlerClick_FinalizarCompra} sx={{padding: 2}}/>
                                    }
                                    
                                </Container>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Descripcion */}
                    <Box className="container--boxDetalle fontPrincipal">
                        <h3 className='container--subtitulo'>Descripción</h3>
                        <Stack justifyContent="center" alignItems="center" spacing={6}>
                            <img src={producto.image_url2} className='container--imagenDetalle' alt="productoDescripcion"></img>
                            <p className='container--textoDetalle'>
                                {producto.descripcion}
                            </p>
                        </Stack>
                    </Box>

                    {/* Características Tecnicas */}
                    {/* <Box className="container--boxCaracteristicas">
                        <h3 className='container--subtitulo'>Características Técnicas</h3>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>

                            {producto.caracteristicas.map(
                                (x) => 
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='specs--titulo negrita' width={300} align='center'>{x.titulo}</TableCell>
                                                <TableCell className='specs--cell' align='right'>
                                                    <TableContainer>
                                                            <Table>
                                                                <TableHead>
                                                                    {x.data.map(
                                                                        (y) => 
                                                                        <TableRow>
                                                                            <TableCell className='specs--cell negrita'>{y.subtitulo}</TableCell>
                                                                            <TableCell className='specs--cell' align='right'>{y.detalle}</TableCell>
                                                                        </TableRow>
                                                                    )}
                                                                </TableHead>
                                                            </Table>
                                                    </TableContainer>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                            )}
                            
                        </Stack>
                    </Box>
                     */}
                </div>
            
            </Container>
        </>
    )
}

export default ItemDetail