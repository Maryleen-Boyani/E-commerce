import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  
import {Navbar} from "./components/Navbar";
import {Cart} from "./pages/cart/cart"
import {Shop} from "./pages/shop/shop"
import { ShopContextProvider } from "./context/shop-context";

export default function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
      
    
    </div>
    
  );
}