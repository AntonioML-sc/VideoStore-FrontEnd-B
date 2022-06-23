import { useState, BrowserRouter, Route, Routes } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import AboutUs from './containers/AboutUs/AboutUs'
// import Home from "./containers/Home/Home";
import './App.css'



function App() {


  return (
    <div className="App">
        <Header />
         <AboutUs/>
        <Footer />
    </div>
  )
}

export default App
