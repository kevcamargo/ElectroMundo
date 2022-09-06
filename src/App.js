import cover from './media/img/cover_sale.jpg';
import './App.css';
import Navbar from './components/header/Navbar'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <img src={cover} className='App--cover'alt="cover"></img>
    </div>
  )
}

export default App;
