import React,{useEffect, useState} from 'react';

// Local Imports
import Item from '../Item/Item';
import './ItemList.css';
import { db } from '../../../fuegobase/fuegobase';

// Modules Imports
import Grid from '@mui/material/Grid';
import { getDocs,collection, query, where, orderBy ,limit } from 'firebase/firestore';


const ItemList = ({nombreCategoria}) => {

    // State
    const [productos, setProductos] = useState([])

    useEffect(() => {   
        const e_loader = document.getElementById("loader")
        const e_gridContainer = document.getElementById("gridContainer")
        const e_error = document.getElementById("error")
        
        e_loader.classList.remove("esconder")
        e_gridContainer.classList.add("esconder")
        e_error.classList.add("esconder")
        
        const productosCollection = collection(db, 'productos')
        let q
        nombreCategoria != undefined ?  q = query(productosCollection, where('categoria','==',nombreCategoria)) : q = query(productosCollection, orderBy("name", "asc"), limit(3))

        getDocs(q).then( 
            async (data) => {
                if(data.docs.length != 0){
                    const arrayProductos = await data.docs.map(
                        (producto) => {
                            return {
                                id: producto.id,
                                ...producto.data()
                            }
                    })
                    setProductos(arrayProductos)
                    e_loader.classList.add("esconder")
                    e_gridContainer.classList.remove("esconder")
                }
                else{
                    e_loader.classList.add("esconder")
                    e_error.innerText = "Categoria inexistente"
                    e_error.classList.remove("esconder")
                }   
        }).catch((error) => { 
            console.log(error)
            e_loader.classList.add("esconder")
            e_error.classList.remove("esconder")})

    },[nombreCategoria])
    
    return(
        <>  
            <span id="loader" className="loader"></span>
            <h2 id="error" className="error">Error al cargar datos</h2>
            <Grid container id="gridContainer" spacing={2} sx={{paddingTop: 2}}>
                {productos.map(
                    (x) => <Item producto={x}></Item>
                )}
            </Grid>
        </>
    )
}

export default ItemList;
