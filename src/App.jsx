import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import "./index.css"

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />    
    </div>
  )
}

