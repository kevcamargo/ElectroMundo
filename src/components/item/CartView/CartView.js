import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteIcon from '@mui/icons-material/Delete';
import {CartContext} from '../../../context/CartContext';
import Productos from '../../../mock/Productos';
import Button from '@mui/material/Button'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CartView = () => {
    const valorCartContext = useContext(CartContext)
    const [carritoVacio, setcarritoVacio] = useState(true)
    
    const revisarCarritoVacio = () => {
        for(let producto of Productos){
            if(valorCartContext.isInCart(producto.id)){
                return false
            }
        }
        return true
    }

    useEffect(() => {
        setcarritoVacio(revisarCarritoVacio())
    },[valorCartContext])

    const renderCarritoVacio = () => {
        return(
            <>  
                <Box>
                    <ProductionQuantityLimitsIcon sx={{ fontSize: 140, padding: 5}} />
                </Box>
                <h1> Tu carrito está vacío </h1>
                <h3>Descubrí las categorías del sitio y elegí los mejores productos.</h3>
            </>
        )
    }

    const renderCarritoProductos = () => {
        const arrayCart = valorCartContext.contenidoCart

        return(
            <>
                <h1> Tu Carrito actual</h1>
                {valorCartContext.contenidoCart.map((x) =>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {x.id}
                                    </TableCell>
                                    <TableCell>
                                        {x.cantidad}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Button onClick={() => valorCartContext.removeItem(x.id)}>
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                )}

                <button onClick={valorCartContext.clear}>Limpiar</button>
            </>
        )
    }
    
    return(
        <Container>
             <Stack spacing={2}>
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
