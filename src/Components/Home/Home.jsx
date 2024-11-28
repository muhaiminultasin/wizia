import React from 'react'
import Header from '../Navbar/Header'
import Hero from './Section/Hero'
import Partners from './Section/Partners'
import Group from './Section/Group'
import Train from './Section/Train'
import SimpleSlider from '../Sliders'
import Review from './Section/Review'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Partners/>
      <Group/>
      <Train/>
      <Review/>
    </div>
  )
}

export default Home
