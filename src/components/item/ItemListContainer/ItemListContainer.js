
import cover from '../../../media/img/cover_sale.jpg';
import hp from '../../../media/img/notebook/hp.jpeg';
import lenovo from '../../../media/img/notebook/lenovo.jpeg';
import acer from '../../../media/img/notebook/acer.jpeg';
import msi from '../../../media/img/notebook/msi.jpeg'; 
import alienware from '../../../media/img/notebook/alienware.jpeg';
import gigabyte from '../../../media/img/notebook/gigabyte.jpeg';

import React from 'react';
import './ItemListContainer.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ComputerIcon from '@mui/icons-material/Computer';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const Productos = [
        {
            'id': 100,
            'name':  "Notebook Lenovo 16' Ryzen 7 16GB 512GB SSD Legion 5 Pro",
            'specs': {
                'procesador': 'AMD Ryzen 7 - 4.4GHz',
                'ram': '16 GB',
                'video': 'GeForce RTX 3070'
            },
            'price': "$ 449.999",
            'image_url': lenovo,
            'stock': 5 
        },
        {
            'id': 101,
            'name': "Notebook Acer 15,6' Core i7 8GB 512GB SSD Nitro 5",
            'specs': {
                'procesador': 'Intel Core™ i7 - 2.3GHz',
                'ram': '8 GB',
                'video': 'GeForce RTX 3050'
            },
            'price': "$ 319.999",
            'image_url': acer,
            'stock': 7 
        },
        {
            'id': 102,
            'name': "Notebook HP 16,1' Core i5 8GB 512GB SSD Omen",
            'specs': {
                'procesador': 'Intel Core™ i5 - 4.5GHz',
                'ram': '8 GB',
                'video': 'GeForce RTX 3050'
            },
            'price': "$ 359.999",
            'image_url': hp,
            'stock': 3
        },
        {
            'id': 103,
            'name': "Notebook Gigabyte Aero 16 Ke5 16 Uhd Oled I7-12700h Rtx 3060",
            'specs': {
                'procesador': 'Intel Core™ i7 - 5GHz',
                'ram': '16 GB',
                'video': 'GeForce RTX 3060'
            },
            'price': "$ 592.019",
            'image_url': gigabyte,
            'stock': 8
        },
        {
            'id': 104,
            'name': "Notebook Alienware 15,6' Core i7 16GB 512GB SSD",
            'specs': {
                'procesador': 'Intel Core™ i7 - 5GHz',
                'ram': '16 GB',
                'video': ' GeForce RTX 3070'
            },
            'price': "$ 679.999",
            'image_url': alienware,
            'stock': 2
        },
        {
            'id': 105,
            'name': "Notebook MSI Katana 15.6' Core I7-12700H 16GB RAM 512GB SSD RTX3050TI",
            'specs': {
                'procesador': 'Intel Core™ i7 - 4.7GHz',
                'ram': '16 GB',
                'video': ' GeForce RTX 3060'
            },
            'price': "$ 457.999",
            'image_url': msi,
            'stock': 4
        }
    ]

    // Valor inicial del producto

    const contenidoCarrito = (producto) =>{
        if(producto == 1){
            console.log("Se añadio un producto al carrito")
        }
        else{
            console.log("Se añadieron "+producto+" productos al carrito")
        }
    }

    return (
        
        <div className='main'>
            <h1 className='main--titulo'>{greeting}</h1>
            <img src={cover} className='main--cover' alt="cover"></img>
            <Container className='main--container'>
                <Card className='main--card'>
                    <CardContent className='main--cardcontent'>
                        <h2 className='card--titulo'>
                            <ComputerIcon className='card--logoTitulo'/>
                            Computadoras recomendadas para el Gaming
                        </h2>
                    </CardContent>
                    <CardContent className='main--cardcontentitem' sx={{borderColor: 'transparent'}}>
                        <ItemList array_productos={Productos}></ItemList>
                    </CardContent>
                </Card>
            </Container>
        </div>
        
    )
  }
  
  export default ItemListContainer;
  