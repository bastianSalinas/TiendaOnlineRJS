import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContext } from './components/Context/CartContext';
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={ { carrito, setCarrito } }>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
