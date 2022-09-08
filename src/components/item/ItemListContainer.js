import cover from '../../media/img/cover_sale.jpg';
import hp from './notebook/hp.jpeg';
import lenovo from './notebook/lenovo.jpeg';
import acer from './notebook/acer.jpeg';
import React from 'react';
import './ItemListContainer.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ComputerIcon from '@mui/icons-material/Computer';
import Grid from '@mui/material/Grid';

const ItemListContainer = ({greeting}) => {
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
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img src={lenovo} className='item--img' alt="lenovo"></img>
                            <h5 className='item--titulo'>
                                Notebook Lenovo Gamer 16” Ryzen 7 16GB 512GB SSD Legion 5 Pro
                            </h5>
                            <h2 className='item--precio'>
                                $ 449.999
                            </h2>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={acer} className='item--img' alt="acer"></img>
                            <h5 className='item--titulo'>
                                Notebook Gamer Acer 15,6” Core i7 8GB 512GB SSD Nitro 5
                            </h5>
                            <h2 className='item--precio'>
                                $ 319.999
                            </h2>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={hp} className='item--img' alt="hp"></img>
                            <h5 className='item--titulo'>
                                Notebook Gamer HP 16,1” Core i5 8GB 512GB SSD Omen
                            </h5>
                            <h2 className='item--precio'>
                                $ 359.999
                            </h2>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
      </div>
    )
  }
  
  export default ItemListContainer;
  