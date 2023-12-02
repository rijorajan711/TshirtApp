
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './Mainpages/Landing';
import Header from './Components/Header';
import Cart from './Mainpages/Cart';
import WishList from './Mainpages/Wishlist';



function App() {
  return (
    <div className="App">
  
    <Header />
  
    <Routes>
   
     <Route path='/' element={<Landing />}/>
     <Route path='/cart' element={<Cart />} />
     <Route path='/wishlist' element={<WishList/>}/>
    </Routes>



    </div>
  );
}

export default App;




