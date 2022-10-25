import React from 'react';

// Local Imports
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import cover from '../../../media/img/cover_sale.jpg';

// Modules Imports
import {Container, Card, CardContent} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {

    // Router
    const {idCategoria} = useParams()    

    const mostrarSaludo = () => {
        return(
            <>
                <h1 className='main--titulo'>{greeting}</h1>
                <img src={cover} className='main--cover' alt="cover"></img>
            </>
        )
    }
    
    const mostrarRecomendacion = () => {
        return(
            <CardContent className='main--cardcontent'>
                <h2 className='card--titulo'>
                    <StarIcon className='card--logoTitulo'/>
                    Lo último en productos novedosos
                </h2>
            </CardContent>
        )
    }

    return (
        
        <div className='main'>

            {greeting != undefined ? mostrarSaludo() : null}

            <Container className='main--container'>
                <Card className='main--card'>

                    {greeting != undefined ? mostrarRecomendacion() : null}

                    <CardContent className='main--cardcontentitem' sx={{borderColor: 'transparent'}}>
                        <ItemList nombreCategoria={idCategoria}></ItemList>
                    </CardContent>

                </Card>
            </Container>

        </div>
        
    )
  }
  
  export default ItemListContainer;