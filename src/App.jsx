// import React,{ BrowserRouter, Route, Routes } from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import AboutUs from './containers/AboutUs/AboutUs'
import Home from "./containers/Home/Home";
import Films from "./containers/Films/Films";
import './App.css'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/films" element={<Films />}/>        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
