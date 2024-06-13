import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Carousel from '../../component/Carousel/Carousel'
import HeroAero from '../../component/Hero_Section/HeroAero/HeroAero'
import HeroTrain from '../../component/Hero_Section/HeroTrain/HeroTrain'
import Features from '../../component/Features_Section/Features'
import Globe from '../../component/Globe_Section/Globe'
import AdvertiseVdo from '../../component/Advertise_Video/Advertisevideo'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <HeroAero/>
      <HeroTrain/>
      <Features/>
      <Globe/>
      <AdvertiseVdo/>
    </div>
  )
}

export default Home