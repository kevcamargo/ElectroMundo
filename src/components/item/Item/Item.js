import React from 'react';
import './Item.css';
import Grid from '@mui/material/Grid';
import ItemCount from '../ItemCount/ItemCount';
import IconButton from '@mui/material/IconButton';
import MemoryIcon from '@mui/icons-material/Memory';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Item = ({producto}) => {

    const contenidoCarrito = (x) =>{
        if(x == 1){
            console.log("Se añadio un producto al carrito")
        }
        else{
            console.log("Se añadieron "+x+" productos al carrito")
        }
    }

    const verDetalle = 'verDetalle'+producto.id
    const spanMostrar = 'span'+producto.id
    const spanOcultar = 'spant'+producto.id

    const mostrarDetalle = () => {
        const div_detalle = document.getElementById(verDetalle)
        const e_spanMostrar = document.getElementById(spanMostrar)
        const e_spanOcultar = document.getElementById(spanOcultar)
        div_detalle.classList.toggle("esconder")
        e_spanMostrar.classList.toggle("esconder")
        e_spanOcultar.classList.toggle("esconder")
    }

    return(
        <>
            <Grid item xs={4}>
                <IconButton onClick={mostrarDetalle}>
                    <img src={producto.image_url} className='item--img' alt={producto.id}>
                    </img>
                    <span id={spanMostrar} className='span'>Mostrar Detalles</span>
                    <span id={spanOcultar} className='span esconder'>Ocultar Detalles</span>
                </IconButton>
                <div id={verDetalle} className="esconder">
                    <h6 className='item--stock'>Stock disponible: {producto.stock}</h6>
                    <h4 className='item--titulo'>
                        {producto.name}
                    </h4>
                    <Grid container spacing={0} sx={{paddingTop: 0}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                            <MemoryIcon></MemoryIcon>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: 'left'}}>
                            Especificaciones
                        </Grid>
                        <Grid item xs={2}>
                            <MemoryIcon></MemoryIcon>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>

                    <Grid container sx={{paddingTop: 2}}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='specs--cell negrita'>Procesador</TableCell>
                                        <TableCell className='specs--cell' align='right'>{producto.specs.procesador}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='specs--cell negrita'>Memoria RAM </TableCell>
                                        <TableCell align='right'>{producto.specs.ram}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='specs--cell negrita'>Placa de Video</TableCell>
                                        <TableCell className='specs--cell' align='right'>{producto.specs.video}</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>
                    
                </div>
                    
                <h2 className='item--precio'>
                    {producto.price}
                </h2>
                <ItemCount idProducto={producto.id} stock={producto.stock} initial={1} onAdd={contenidoCarrito}/>

            </Grid>
        </>
    )
}

export default Item;
