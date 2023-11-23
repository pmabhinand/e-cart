import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <h1>E-CART</h1>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
