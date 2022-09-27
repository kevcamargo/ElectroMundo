import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import lenovo from '../../../media/img/notebook/lenovo3.jpeg';
import lenovo2 from '../../../media/img/notebook/lenovo2.png';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Productos from '../../../mock';


const ItemDetailContainer = () => {

    const {idProducto} = useParams()

    const arrayProductoFiltrado = Productos.filter( 
        (elemento) => {
            if(elemento.id == idProducto){
                return elemento
            }
        }
    )

    const promesa = new Promise((res,rej)=>{
        res(arrayProductoFiltrado[0])
    })

    // Esta linea la comentamos porque no me funciona productos.caracteristicas en ItemDetail.js 
    /* const [item, setItem] = useState({}) */

    // Si la defino asi entonces si me funciona. Obviamente si hago esto, el useEffect no tendria sentido. Porque inicialmente le estoy asignado el valor del arrayProductoFiltrado[0]
    const [item, setItem] = useState(arrayProductoFiltrado[0])
    
    // Efecto para el montaje
    
    useEffect(() => {   
    
        const e_loader = document.getElementById("loaderDetail")
        const e_gridContainer = document.getElementById("gridContainerDetail")
        e_gridContainer.classList.add("esconder")
    
        setTimeout(()=>{
            e_loader.classList.add("esconder")
            e_gridContainer.classList.remove("esconder")

            const getItem = async () => {
                try{
                    console.log(promesa)
                    const respuesta = await promesa
                    
                    setItem(respuesta)
                    console.log("Exito")
                }
                catch{
                    console.log("Error")
                }
            }

            getItem()

        },2000)

    },[])

    
    return(
        <>  
            <span id="loaderDetail" className="loader"></span>
            <Grid container id="gridContainerDetail" className='esconder'>
                <ItemDetail producto={item} />
            </Grid>
        </>
    )
}

export default ItemDetailContainer;