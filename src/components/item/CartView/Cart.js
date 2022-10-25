import React, { useContext, useState, useEffect } from 'react';

// Local Imports
import {CartContext} from '../../../context/CartContext';
import './Cart.css'; 
import { db } from '../../../fuegobase/fuegobase';

// Modules Imports
import { Box, Stack, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Tooltip, IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import { getDoc, collection, doc, addDoc, serverTimestamp, updateDoc} from 'firebase/firestore';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckIcon from '@mui/icons-material/Check';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';




const CartView = () => {

     // Context
    const valorCartContext = useContext(CartContext)

    // States
    const [carritoVacio, setcarritoVacio] = useState(true)
    const [monto, setMonto] = useState(0)
    const [comprador, setComprador] = useState([])
    const [compraExitosa, setCompraExitosa] = useState(false)
    
    // Firestore
    const usuariosCollection = collection(db, 'usuarios')
    const ventasCollection = collection(db, 'ventas')
    const productosCollection = collection(db, 'productos')

    const ref_Usuarios = doc(usuariosCollection, "FaMaFUuuvaPms9Q2k6sA")

    getDoc(ref_Usuarios).then(
        async (result) => {
            const usuario = await result.data()
            setComprador(usuario)
        }
    ).catch(
        (error) =>
        console.log(error)
    )

    const productosAdquiridos = valorCartContext.contenidoCart.map(
        (producto) => {
            return {
                id: producto.id,
                name: producto.name,
                cantidad: producto.cantidad,
                total: (parseInt(producto.cantidad) * parseInt(producto.price))
            }
    })

    const actualizarStock = () => {
        const productos = valorCartContext.contenidoCart

        for (let index = 0; index < productos.length; index++) {
            const ref_Productos = doc(productosCollection, productos[index].id)
            updateDoc(ref_Productos, {
                stock: productos[index].stock - productos[index].cantidad
            });
            
        }

    }
    
    const handlerFinalizarCompra = () => {

        addDoc(ventasCollection, {
            comprador,
            items: productosAdquiridos,
            date: serverTimestamp(),
            total: monto
        }) 

        actualizarStock()
        setCompraExitosa(true)
        valorCartContext.clear()
    }

    const montoTotal = () => {
        let acumulador = 0
        if(valorCartContext.contenidoCart.length != 0){
            for(let i=0; i<valorCartContext.contenidoCart.length; i++){
                acumulador = (valorCartContext.contenidoCart[i].cantidad * valorCartContext.contenidoCart[i].price) + acumulador
            }
        }
        return acumulador
    }

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

                <Grid container>
                    <Grid xs={2}></Grid>
                    <Grid xs={3} style={{padding: 1}}>
                        <Button color='inherit' className='boton--limpiar' variant="outlined" onClick={valorCartContext.clear}>
                            <CleaningServicesIcon sx={{marginRight: 2}}/> Limpiar Carrito
                        </Button>
                    </Grid>
                    <Grid xs={2}></Grid>
                    <Grid xs={3}>
                        <Tooltip title={'Antes de finalizar su compra. Por favor, valide si sus datos de usuario son correctos.'}>
                            <Button color='inherit' className='boton--limpiar' variant="outlined" onClick={handlerFinalizarCompra}>
                                <CheckIcon sx={{marginRight: 2}}/> Finalizar Compra
                            </Button>
                        </Tooltip>
                        
                    </Grid>
                    <Grid xs={2}></Grid>
                </Grid>
            </>
        )
    }
    
    const renderCompraExitosa = () => {
        return(
            
            <>
                <Stack>
                    <h1 className='titulo'> ¡ Gracias por su compra ! </h1>
                </Stack>
                <Stack>
                    <ShoppingBagIcon sx={{ fontSize: 180, padding: 5}} />
                </Stack>
                <Stack>
                    <h2 className='subtitulo'> Le invitamos a que siga explorando nuestros productos. </h2>
                </Stack>
                <Button component={Link} to='/' color='inherit' className='boton--inicio' variant="outlined">Volver a Inicio</Button>
            </>
            
        )
    }

    return(
        <Container>
             <Stack spacing={2} style={{alignItems: 'center'}}>
                { carritoVacio && !compraExitosa ? 
                    renderCarritoVacio()
                    :
                    compraExitosa ? 
                        renderCompraExitosa()
                        :
                        renderCarritoProductos()
                }            
            </Stack>
        </Container>
       
    )
}

export default CartView
