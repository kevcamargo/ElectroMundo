import './App.css';
import Navbar from './components/header/Navbar/Navbar';
import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer/ItemDetailContainer';



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      {/* <ItemDetail producto={producto_lenovo}/> */}
      <ItemListContainer greeting={"¡ Ofertas por tiempo limitado !"}/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App;
