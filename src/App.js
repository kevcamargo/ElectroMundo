// Local Imports
import './App.css';
import Navbar from './components/header/Navbar/Navbar';
import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/item/CartView/Cart';
import DataUser from './components/item/DataUser/DataUser';
import CartProvider from './context/CartContext';
import UserProvider from './context/UserContext';

// Modules Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <UserProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"¡ Ofertas por tiempo limitado !"} />} />
              <Route path="/categorias/:idCategoria" element={<ItemListContainer/>} />
              <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<DataUser/>} />
            </Routes>
          </UserProvider>
        </CartProvider>
      
      </BrowserRouter>
    </div>
  )
}

export default App;
