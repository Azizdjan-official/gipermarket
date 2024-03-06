import { Route, Routes } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Home from "./pages/Homepage/Home"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
