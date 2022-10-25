import React,{useEffect, useState} from 'react';

// Local Imports
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

// Modules Imports
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { db } from '../../../fuegobase/fuegobase';
import { collection, getDoc, doc } from 'firebase/firestore';




const ItemDetailContainer = () => {

    // Router
    const {idProducto} = useParams()

    // State
    const [item, setItem] = useState({})     

    useEffect( () => {

        // Obtenemos los elements
        const e_loader = document.getElementById("loaderDetail")
        const e_gridContainer = document.getElementById("gridContainerDetail")
        const e_error = document.getElementById("error")

        // Modificamos las clases para mostrar el loader y esconder el grid o el error
        e_loader.classList.remove("esconder")
        e_gridContainer.classList.add("esconder")
        e_error.classList.add("esconder")

        // Firestore
        const productosCollection = collection(db, 'productos')

        // Obtenemos la referencia de la coleccion productos
        const ref = doc(productosCollection, idProducto)

        // Promesa de Datos. En caso de ser exitosa se modifica el estado Item para asi luego mostrar la vista del producto. Despues escondemos el loader. En caso de fallar se muestra un mensaje de error. 
        getDoc(ref).then( 
            async (result) => {
                if(result.data() != undefined){
                    await setItem({
                        id: result.id,
                        ...result.data()
                    })
                    e_loader.classList.add("esconder")
                    e_gridContainer.classList.remove("esconder")
                }
                else{
                    await setItem({})
                    e_loader.classList.add("esconder")
                    e_error.innerText = "Producto inexistente"
                    e_error.classList.remove("esconder")
                }
        }).catch((error) => { 
            console.log(error)
            e_error.classList.remove("esconder")})
        
    },[idProducto])

    return(
        <>  
            <span id="loaderDetail" className="loader"></span>
            <h2 id="error" className="error esconder">Error al cargar datos</h2>
            <Grid container id="gridContainerDetail" className='esconder'>
                {Object.keys(item).length != 0 ? <ItemDetail producto={item} /> : <h1>Error al cargar producto</h1>}
            </Grid>
        </>
    )
}

export default ItemDetailContainer;