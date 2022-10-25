import React from 'react';

// Local Imports
import './Item.css';

// Modules Imports
import {Grid, IconButton, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material/';
import MemoryIcon from '@mui/icons-material/Memory';
import { Link } from 'react-router-dom';


const Item = ({producto}) => {
    
    const verDetalle = 'verDetalle'+producto.id
    const spanMostrar = 'span'+producto.id
    const spanOcultar = 'spant'+producto.id


    // mostrarDetalle - Al hacer click se procede a realizar un toggle para ocultar o mostrar los detalles de un producto 
    const mostrarDetalle = () => {
        const div_detalle = document.getElementById(verDetalle)
        const e_spanMostrar = document.getElementById(spanMostrar)
        const e_spanOcultar = document.getElementById(spanOcultar)
        div_detalle.classList.toggle("esconder")
        e_spanMostrar.classList.toggle("esconder")
        e_spanOcultar.classList.toggle("esconder")
    }

    // Renderiza los datos de detalle de un producto
    const renderDetalle = () => {
        let renderDetalle = []
        if(producto.specs_detalle != undefined){
            for(let i = 0; i < producto.specs_detalle.length; i++) {
                renderDetalle.push(
                    <TableRow>
                        <TableCell className='specs--cell negrita'>{producto.specs_name[i]}</TableCell>
                        <TableCell className='specs--cell' align='right'>{producto.specs_detalle[i]}</TableCell>
                    </TableRow>
                )
            }
        }
        return renderDetalle
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

                <Link to={"/producto/"+producto.id}>
                    <h4 className='item--titulo'>
                        {producto.name}
                    </h4>
                </Link>
                
                <h2 className='item--precio'>
                    $ {Intl.NumberFormat('en-US').format(producto.price)}
                </h2>

                <div id={verDetalle} className="esconder">
                    <h6 className='item--stock'>Stock disponible: {producto.stock}</h6>
                    <Grid container spacing={0} sx={{paddingTop: 2}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                            <MemoryIcon></MemoryIcon>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: 'center'}}>
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
                                    {renderDetalle()}
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>
                    
                </div>

            </Grid>
        </>
    )
}

export default Item;
