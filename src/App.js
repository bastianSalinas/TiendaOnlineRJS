import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a ForMoreHP"/>
      <ItemCount inicio={1} stock={20} agregado={(cantidad) => console.log('Cantidad agregada: ', cantidad)} />   
    </div>
  );
}

export default App;
