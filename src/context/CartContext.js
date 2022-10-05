import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [contenidoCart, setcontenidoCart] = useState([])
    
    const addItem = (producto, cantidad) => {

        if(isInCart(producto.id)){
            const aux_contenidoCart = [...contenidoCart]
            const productoEnElCarrito = aux_contenidoCart.find((x) => x.id == parseInt(producto.id))
            const cantidadAñadida = cantidad + parseInt(productoEnElCarrito.cantidad)
            const carritoActualizado = aux_contenidoCart.filter((x) => x.id != parseInt(producto.id))
            carritoActualizado.push({
                'id': producto.id,
                'cantidad': cantidadAñadida
            })
            setcontenidoCart(carritoActualizado)
        }
        else{
            const productoCarrito = {
                'id': producto.id,
                'cantidad': cantidad
            }
            setcontenidoCart([...contenidoCart, productoCarrito])
        }
        
    }

    const removeItem = (idProducto) => {
        if(isInCart(idProducto)){
            const aux_contenidoCart = [...contenidoCart]
            setcontenidoCart(aux_contenidoCart.filter((x) => x.id != parseInt(idProducto)))
        }
    }
 
    const clear = () => {
        setcontenidoCart([])
    }

    const isInCart = (idProducto) => contenidoCart.some((x) => x.id == idProducto)
    
    return (
        <CartContext.Provider value={{contenidoCart, addItem, clear, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider