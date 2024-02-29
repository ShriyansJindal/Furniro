import "./App.css";
import Cart from "./Components/Cart";

import Home from "./Components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
      {/* <Navbar />
      <HeroSec />
      <Browse />
      <Products/> */}
    </>
  );
}

export default App;
