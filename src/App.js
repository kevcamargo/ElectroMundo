import './App.css';
import Navbar from './components/header/Navbar/Navbar';
import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"¡ Ofertas por tiempo limitado !"}/>
    </div>
  )
}

export default App;
