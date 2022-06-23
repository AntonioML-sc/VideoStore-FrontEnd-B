import { useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from "./containers/Home/Home";
import './App.css'



function App() {


  return (
    <div className="App">
      <Footer />
      <Home/>
      <Header/>
    </div>
  )
}

export default App
