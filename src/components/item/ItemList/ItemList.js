import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({array_productos}) => {

    const promesa = new Promise((res,rej)=>{
        res(array_productos)
    })

    const [productos, setProductos] = useState([])

    // Efecto para el montaje
    useEffect(() => {   
        const e_loader = document.getElementById("loader")
        const e_gridContainer = document.getElementById("gridContainer")
        
        e_loader.classList.remove("esconder")
        e_gridContainer.classList.add("esconder")

        setTimeout(()=>{

            e_loader.classList.add("esconder")
            e_gridContainer.classList.remove("esconder")

            promesa.then(
                (result) => {
                console.log("Se cargaron los elementos con exito")
                setProductos(result)
            }).catch(() => {console.log("Error al cargar datos")})

        },1000)
    },[array_productos])
    

    return(
        <>  
            <span id="loader" className="loader"></span>
            <Grid container id="gridContainer" spacing={2} sx={{paddingTop: 2}}>
                {productos.map(
                    (x) => <Item producto={x}></Item>
                )}
            </Grid>
        </>
    )
}

export default ItemList;
