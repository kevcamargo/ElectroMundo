import React from 'react';
import '../Navbar/Navbar.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return(
    <>
        <IconButton color="warning" size="large">
            <ShoppingCartIcon className='header--button--carrito'/>
        </IconButton>
    </>)
}

export default CartWidget
