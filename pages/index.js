import React from 'react';
import { About } from '../Components/About';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import More from '../Components/More';
import Portforlio from '../Components/Portforlio';
import Quote from '../Components/Quote';

export default function Home() {
  return (
    <div >
    <Hero/>
    <About/>
    
    <Portforlio/>
    <More/>
    <Quote/>
    <Contact/>
    </div>
  )
}
