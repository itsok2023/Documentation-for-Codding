import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Getting from "./pages/Getting";
import Reactwithtailwind from "./reacttailwind/reactwithtailwind";

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/getting" element={<Getting/>}></Route>
        <Route path="/reactwithtailwind" element={<Reactwithtailwind />}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App