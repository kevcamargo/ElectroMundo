import React, { useState } from 'react';

// Local Imports
import './ItemCount.css';

// Modules Imports
import {Grid, Button, Input} from '@mui/material/';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ItemCount = ({idProducto, stock, initial, onAdd}) => {

    // State
    const [contador, setContador] = useState(initial)
    
    const sumarProducto = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const quitarProducto = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const handler_agregarProductoAlCarrito = () => {
        setContador(initial)
        onAdd(contador, idProducto)
    }

    return(
        <>
        
        <Grid container className='grid'>
            <Grid item xs={3}>
                <Button variant="text" className='boton' onClick={quitarProducto}>
                    <RemoveCircleOutlinedIcon/>
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Input disableUnderline='true' className='input' readOnly='true' id={'input_'+idProducto} value={contador}/>
            </Grid>
            <Grid item xs={3}>
                <Button variant="text" className='boton' onClick={sumarProducto}>
                    <AddCircleIcon/>
                </Button>
            </Grid>
            <Grid container sx={{paddingTop:2}}>
                 <Grid item xs={12}>
                    <Button variant="contained" className='boton_carrito' onClick={handler_agregarProductoAlCarrito}>
                        Agregar al Carrito
                        <ShoppingCartIcon sx={{marginLeft: 1}}/> 
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <h5 className='container--stock'>
            Stock disponible :  {stock} 
        </h5>
        </>
    )
}

export default ItemCount;
