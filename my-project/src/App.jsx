import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  
import {Navbar} from "./components/Navbar";
import {Cart} from "./pages/cart/cart"
import {Shop} from "./pages/shop/shop"

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
    
    </>
    
  );
}