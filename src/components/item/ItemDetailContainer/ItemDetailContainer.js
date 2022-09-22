import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import lenovo from '../../../media/img/notebook/lenovo3.jpeg';
import lenovo2 from '../../../media/img/notebook/lenovo2.png';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const producto_lenovo = {
    'id': 100,
    'name':  "Notebook Lenovo 16' Ryzen 7 16GB 512GB SSD Legion 5 Pro",
    'price': "$ 449.999",
    'image_url': lenovo,
    'image_url2': lenovo2,
    'stock': 5,
    'descripcion': 'Rendimiento épico por dentro y por fuera Procesamiento AMD Ryzen™ y tarjeta gráfica NVIDIA® GeForce RTX™ Perfecta para juegos de alta resolución Primera laptop de 16” del mundo con hasta 165 Hz Tecnología de audio 3D de Nahimic: podrás ver y oír a cualquier enemigo acercándose a ti La retroiluminación del teclado es opcional y puede variar según el modelo; algunos puertos/ranuras también pueden variar o ser opcionales',
    'procesadorModelo': 'AMD Ryzen 7',
    'procesadorVelocidad': '4.4GHz', 
    'memoriaRam': '16 GB',
    'memoriaSSD': '512 GB',
    'pantallaPlaca': 'NVIDIA® GeForce® RTX™ 3070',
    'pantallaTecno': 'IPS 500nits Anti-glare 165Hz',
    'pantallaPulgada': '16 pulgadas'
}

const ItemDetailContainer = () => {

    const promesa = new Promise((res,rej)=>{
        res(producto_lenovo)
    })

    const [item, setItem] = useState({})
    
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
                <ItemDetail producto={item}/>
            </Grid>
        </>
    )
}

export default ItemDetailContainer;