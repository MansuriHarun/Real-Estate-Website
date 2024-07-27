import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from "./components/Footer";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import "./App.css"
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;