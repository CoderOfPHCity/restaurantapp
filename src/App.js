
import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Product from "./components/Product";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
     
      <About />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Product />} />
      </Routes>
      <Product />
      <Contact />
      
    <div className="container">
      <article>
        </article>
    </div>
  </div>
  );
}

export default App;
