import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      {/* shubham */}
      <div  className="bg-slate-900 py-2">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  )
};

export default App;
