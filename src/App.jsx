import { Route, Routes } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Home from "./pages/Homepage/Home"
import About from "./pages/AbousUs/About"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
