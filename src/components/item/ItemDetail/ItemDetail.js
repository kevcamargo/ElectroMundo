import React, { useState, useContext } from 'react';
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
import Button from '@mui/material/Button';
import './ItemDetail.css';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Categorias from '../../../mock/Categorias';
import Productos from '../../../mock/Productos';
import CartProvider, { CartContext} from '../../../context/CartContext';

const ItemDetail = ({producto}) => {

    /* const arrayNombre = [{'nombre': 'pepe'},{'nombre':'pollo'}]
    const arrayAñadido = [...arrayNombre,{'nombre':'pipo'}]
    console.log(arrayAñadido)
    console.log(arrayNombre) */
    

    const obtenerRutaCategoria = (categoria) => {
        const arrayCategoriasFiltrado = Categorias
            .filter( (x) => {
                if(x.nombre === categoria){
                    return(x)
                }
            })
        return arrayCategoriasFiltrado[0].ruta
    }

    const [mostrarFinalizarCompra, setMostrarFinalizarCompra] = useState(false)
    const [alertMensaje, setAlertMensaje] = useState("")
    const {addItem} = useContext(CartContext)

    const handlerClick_FinalizarCompra = (cantidadProducto, idProducto) => {
        setMostrarFinalizarCompra(true)
        setAlertMensaje(mensajeProductoAñadido(cantidadProducto))
        const productoFiltrado = Productos.find( (x) => x.id==idProducto)
        addItem(productoFiltrado, cantidadProducto)
    }
    
    const mensajeProductoAñadido = (x) => x==1 ?  ("Se añadio un producto al carrito") : ("Se añadieron "+x+" productos al carrito");

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
                                <h2 className='container--precio'>{producto.price}</h2>
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
                                        <ItemCount idProducto={producto.id} stock={producto.stock} initial={1} onAdd={handlerClick_FinalizarCompra} sx={{padding: 2}}/>
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
                    <Box className="container--boxCaracteristicas">
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
                    
                </div>
            
            </Container>
        </>
    )
}

export default ItemDetail