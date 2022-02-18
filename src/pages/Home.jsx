import React from 'react'

import Herosliders from '../components/Herosliders'
import slider from '../assets/fake-data/slider'

const Home = () => {
  return (
    <div className="home-main">
       < Herosliders data={slider} />
    </div>
  )
}

export default Home