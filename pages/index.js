import React from 'react';
import { About } from '../Components/About';
import Hero from '../Components/Hero';
import Portforlio from '../Components/Portforlio';
import Quote from '../Components/Quote';

export default function Home() {
  return (
    <div >
    <Hero/>
    <About/>
    {/* <Quote/> */}
    <Portforlio/>
    </div>
  )
}
