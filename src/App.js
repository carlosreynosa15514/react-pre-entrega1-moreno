import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Bienvenido a la Tienda de Construccion'/>
    </div>
  );
}

export default App;
