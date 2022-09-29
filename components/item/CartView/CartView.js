import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const CartView = () => {
    return(
        <>
        <Stack spacing={2}>
            <Box>
                <ProductionQuantityLimitsIcon sx={{ fontSize: 140, padding: 5}} />
            </Box>

            <h1> Tu carrito está vacío </h1>
            <h3>Descubrí las categorías del sitio y elegí los mejores productos.</h3>
        </Stack>
        </>
    )
}

export default CartView
