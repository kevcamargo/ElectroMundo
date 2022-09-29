
import React from 'react';
import './ItemListContainer.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import cover from '../../../media/img/cover_sale.jpg';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Productos from '../../../mock';


const ItemListContainer = ({greeting}) => {

    const {idCategoria} = useParams()

    const arrayProductosFiltrado = Productos.filter( 
        (elemento) => {
            if(elemento.categoria === idCategoria || idCategoria == undefined){
                return elemento
            }
        }
    )

    console.log(arrayProductosFiltrado)

    const contenidoCarrito = (producto) =>{
        if(producto == 1){
            console.log("Se añadio un producto al carrito")
        }
        else{
            console.log("Se añadieron "+producto+" productos al carrito")
        }
    }

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
                        <ItemList array_productos={arrayProductosFiltrado}></ItemList>
                    </CardContent>


                </Card>
            </Container>

        </div>
        
    )
  }
  
  export default ItemListContainer;