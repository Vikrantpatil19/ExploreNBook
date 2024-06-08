import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Carousel from '../../component/Carousel/Carousel'
import HeroAero from '../../component/Hero_Section/HeroAero/HeroAero'
import HeroTrain from '../../component/Hero_Section/HeroTrain/HeroTrain'
import Features from '../../component/Features_Section/Features'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <HeroAero/>
      <HeroTrain/>
      <Features/>
    </div>
  )
}

export default Home