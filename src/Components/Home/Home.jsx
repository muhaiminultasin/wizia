import React from 'react'
import Header from '../Navbar/Header'
import Hero from './Section/Hero'
import Partners from './Section/Partners'
import Group from './Section/Group'
import Train from './Section/Train'
import Review from './Section/Review'
import Effort from './Section/Effort'
import GetStared from './Section/GetStared'
import Footer from './Section/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Partners/>
      <Group/>
      <Train/>
      <Review/>
      <Effort/>
      <GetStared/>
      <Footer/>
    </>
  )
}

export default Home
