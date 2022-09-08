import cover from './media/img/cover_sale.jpg';
import './App.css';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/item/ItemListContainer';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"¡ Ofertas por tiempo limitado !"}/>
    </div>
  )
}

export default App;
