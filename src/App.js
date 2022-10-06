import './App.css';
import Navbar from './components/header/Navbar/Navbar';
import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/item/CartView/Cart';
import CartProvider from './context/CartContext';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"¡ Ofertas por tiempo limitado !"} />} />
            <Route path="/categorias/:idCategoria" element={<ItemListContainer/>} />
            <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </CartProvider>
      
      </BrowserRouter>
    </div>
  )
}

export default App;
