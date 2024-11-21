import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Services/>
    <Portfolio/>
    <GetStarted/>
    <Footer/>
    </>
  )
}
