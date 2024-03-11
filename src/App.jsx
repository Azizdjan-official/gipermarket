import { Route, Routes } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Home from "./pages/Homepage/Home"
import About from "./pages/AbousUs/About"
import Products from './pages/Products/Product';
import SingleProduct from './pages/Products/SingleProduct';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<SingleProduct/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
