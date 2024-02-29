import React from 'react'
import Navbar from "./Navbar"
import HeroSec from "./HeroSec"
import Browse from "./Browse"
import Products from './Products'
const Home = () => {
  return (
    <>
    <Navbar/>
       <HeroSec />
      <Browse />
      <Products/> 
    </>
  )
}

export default Home