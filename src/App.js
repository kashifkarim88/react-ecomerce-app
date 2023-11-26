import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Addproducts from "./components/Addproducts";
import CartItems from "./components/CartItems";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Protected Component= {Products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/cartitems" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
