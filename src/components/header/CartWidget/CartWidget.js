import React, {useContext, useState, useEffect} from 'react';

// Local Imports
import '../Navbar/Navbar.css';
import {CartContext} from '../../../context/CartContext';

// Modules Imports
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';



const CartWidget = () => {

    // Context
    const valorCartContext = useContext(CartContext)

    // State
    const [cantidadCarrito, setcantidadCarrito] = useState(0)

    const actualizarCantidad = () => {
        let acumulador = 0
        if(valorCartContext.contenidoCart.length != 0){
            for(let i=0; i<valorCartContext.contenidoCart.length; i++){
                acumulador = valorCartContext.contenidoCart[i].cantidad + acumulador
            }
        }
        return acumulador
    }

    useEffect(() => {
        setcantidadCarrito(actualizarCantidad())
    },[valorCartContext])
    
    return(
    <>
        <IconButton style={{marginTop: 10}} color="warning" size="large">
            <Badge badgeContent={cantidadCarrito} color="warning">
                <ShoppingCartIcon className='header--button--carrito'/>
            </Badge>
        </IconButton>
    </>)
}

export default CartWidget
