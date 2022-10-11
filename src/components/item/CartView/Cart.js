import React, { useContext, useState, useEffect } from 'react';

// Local Imports
import {CartContext} from '../../../context/CartContext';
import './Cart.css'; 

// Modules Imports
import { Box, Stack, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';



const CartView = () => {
    const valorCartContext = useContext(CartContext)
    const [carritoVacio, setcarritoVacio] = useState(true)
    const [monto, setMonto] = useState(0)
    
    
    /* const revisarCarritoVacio = () => {
        console.log(valorCartContext.contenidoCart.length)
        for(let producto of Productos){
            if(valorCartContext.isInCart(producto.id)){
                return false
            }
        }
        return valorCartContext.contenidoCart.length!=0
    } */

    const montoTotal = () => {
        let acumulador = 0
        if(valorCartContext.contenidoCart.length != 0){
            for(let i=0; i<valorCartContext.contenidoCart.length; i++){

                /* const producto = productoFiltrado(valorCartContext.contenidoCart[i].id)
                acumulador = (valorCartContext.contenidoCart[i].cantidad * producto.price) + acumulador */

                acumulador = (valorCartContext.contenidoCart[i].cantidad * valorCartContext.contenidoCart[i].price) + acumulador

            }
        }
        return acumulador
    }

    /* const productoFiltrado = (idProducto) => Productos.find((producto) => idProducto == producto.id) */

    useEffect(() => {
        setcarritoVacio(valorCartContext.contenidoCart.length==0)
        setMonto(montoTotal())
    },[valorCartContext])

    const renderCarritoVacio = () => {
        return(
            <>  
                <Box>
                    <ProductionQuantityLimitsIcon sx={{ fontSize: 140, padding: 5}} />
                </Box>
                <h1 className='titulo'> Tu carrito está vacío </h1>
                <h3 className='subtitulo'>Descubrí las categorías del sitio y elegí los mejores productos.</h3>
                <Button component={Link} to='/' color='inherit' className='boton--inicio' variant="outlined">Volver a Inicio</Button>
            </>
        )
    }

    const renderCarritoProductos = () => {    
        
        return(
            <>
                <h1 className='titulo'>Mi Carrito</h1>

                <TableContainer className='tabla'>
                        <Table>
                            <TableHead className='tabla--head'>
                                <TableRow >
                                    <TableCell></TableCell>
                                    <TableCell className='tabla--head--celda'>Nombre</TableCell>
                                    <TableCell style={{textAlign: 'center'}} className='tabla--head--celda'>Precio (Unidad)</TableCell>
                                    <TableCell style={{textAlign: 'center'}} className='tabla--head--celda'>Cantidad</TableCell>
                                    <TableCell style={{textAlign: 'right'}} className='tabla--head--celda'>Total</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>

                {valorCartContext.contenidoCart.map(
                    (x) =>
            
                    <TableBody>
                        <TableRow>
                            <TableCell style={{width: 80}}>
                                <img className='tabla--body--celda--img' src={x.image_url} ></img> 
                            </TableCell>
                            <TableCell className='tabla--body--celda'>
                                <Link className="producto--nombre" to={"/producto/"+x.id}>{x.name}</Link>
                            </TableCell>
                            <TableCell style={{textAlign: 'center'}}>
                                {Intl.NumberFormat('en-US').format(x.price)} $
                            </TableCell>
                            <TableCell style={{textAlign: 'center'}}>
                                <IconButton disabled={x.cantidad==1} color='inherit'>
                                    <RemoveCircleIcon onClick={ () => valorCartContext.addItem(x,-1)}/>
                                </IconButton>
                                {x.cantidad}
                                <IconButton disabled={x.stock==x.cantidad} color='inherit'>
                                    <AddCircleIcon onClick={ () => valorCartContext.addItem(x,1)}/>
                                </IconButton>
                            </TableCell>
                            <TableCell style={{textAlign: 'right'}}>
                                {Intl.NumberFormat('en-US').format(x.cantidad * parseFloat(x.price))} $
                            </TableCell>
                            <TableCell className='boton--eliminar' align='center'>
                                <IconButton size='large' color='inherit' onClick={() => valorCartContext.removeItem(x.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>  
                )}
                    <TableHead className='tabla--head'>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell style={{textTransform: 'uppercase'}}  className='tabla--head--celda'>
                                Monto total
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell style={{textAlign: 'right'}} className='tabla--head--celda'>
                                {Intl.NumberFormat('en-US').format(monto)} $
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    </Table>
                </TableContainer>

                <Button color='inherit' className='boton--limpiar' variant="outlined" onClick={valorCartContext.clear}>Limpiar Carrito</Button>
            </>
        )
    }
    
    return(
        <Container>
             <Stack spacing={2} style={{alignItems: 'center'}}>
            { carritoVacio ? 
                renderCarritoVacio()
                :
                renderCarritoProductos()
            }            
        </Stack>
        </Container>
       
    )
}

export default CartView
