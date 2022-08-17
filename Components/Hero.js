import React from 'react';
// import Typewriter from 'typewriter-effect';
import { useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Hero() {
  //   const type = <Typewriter
  //   options={{
  //       strings: ['Software Developer', 'Coding Instructor', 'Mentor'],
  //       autoStart: true,
  //       loop: true,
  //     }}
  // />
  const {text} = useTypewriter({
    words: ['Full-stack Developer', 'Coding Instructor', 'Mentor'],
    loop: true, // Infinit
  })
  return (
    <div
  id="hero"
  className="hero route bg-image"
  style={{ backgroundImage: "url(/Images/bitmoji.png)" }}>
  <div className="overlay-itro" />
  <div className="hero-content display-table">
    <div className="table-cell">
      <div className="container">
        <h1 className="hero-title mb-4">I am Maria Tuhirirwe </h1>
        
         <p className="hero-subtitle">
        A  {text} 
        <Cursor />
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
