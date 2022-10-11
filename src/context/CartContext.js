import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [contenidoCart, setcontenidoCart] = useState([])
    
    const addItem = (producto, cantidad) => {
        
        console.log(producto.id)
        if(isInCart(producto.id)){

            const aux_contenidoCart = [...contenidoCart]
            const productoEnElCarrito = aux_contenidoCart.find((x) => x.id === producto.id)
            const cantidadAñadida = cantidad + parseInt(productoEnElCarrito.cantidad)
            const posicion = aux_contenidoCart.indexOf(productoEnElCarrito)

            if(cantidadAñadida>0){
                aux_contenidoCart[posicion] = {
                    'id': producto.id,
                    'name': producto.name,
                    'price': producto.price,
                    'image_url': producto.image_url,
                    'stock': producto.stock,
                    'cantidad': cantidadAñadida,
                }
                
                setcontenidoCart(aux_contenidoCart)
            }
            else{
                setcontenidoCart(aux_contenidoCart.filter((x) => x.id !== producto.id))   
            }
        }
        else{
            const productoCarrito = {
                'id': producto.id,
                'name': producto.name,
                'price': producto.price,
                'image_url': producto.image_url,
                'stock': producto.stock,
                'cantidad': cantidad,
            }
            setcontenidoCart([...contenidoCart, productoCarrito])
        }
    }

    const removeItem = (idProducto) => {
        if(isInCart(idProducto)){
            const aux_contenidoCart = [...contenidoCart]
            setcontenidoCart(aux_contenidoCart.filter((x) => x.id !== idProducto))
        }
    }
 
    const clear = () => {
        setcontenidoCart([])
    }

    const isInCart = (idProducto) => contenidoCart.some((x) => x.id === idProducto)


    return (
        <CartContext.Provider value={{contenidoCart, addItem, clear, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider
