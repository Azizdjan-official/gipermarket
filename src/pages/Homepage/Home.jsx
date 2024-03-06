import React from 'react'
import SimpleSlider from './Hero';
import AutoPlay from './Category';
import Action from './Action';
import Smartphones from './Smartphones';
import Laptop from './Laptop';
import Brands from './Brands';
import Group from './Group';

const Home = () => {
  return (
    <div>
      <SimpleSlider/>
      <div>
        <AutoPlay/>
      </div>
      <div>
        <Smartphones/>
      </div>
      <div>
        <Action/>
      </div>
      <div>
        <Group/>
      </div>
      <div>
        <Smartphones/>
      </div>
      <div>
        <Laptop/>
      </div>
      <div>
        <Brands/>
      </div>
    </div>
  )
}

export default Home
