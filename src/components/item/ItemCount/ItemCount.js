import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ItemCount.css';

const ItemCount = ({idProducto, stock, initial, onAdd}) => {

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

    const agregarProductoAlCarrito = () => {
        setContador(initial)
        onAdd(contador)
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
                    <Button variant="contained" className='boton_carrito' onClick={agregarProductoAlCarrito}>
                        Agregar al Carrito
                        <ShoppingCartIcon sx={{marginLeft: 1}}/> 
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default ItemCount;
