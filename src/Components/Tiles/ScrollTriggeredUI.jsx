import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollTriggeredUI.css';
import Heading from '../Heading/Heading';

gsap.registerPlugin(ScrollTrigger);
const ScrollTriggeredUI = () => {

  const sections = [
    {
      title: 'Strategy',
      subtitle: 'We’re looking for Strategy Analyst in Mumbai',
      img: './bajaj-logo.png'
    },
    {
      title: 'Consumer Lighting',
      subtitle: 'We’re looking for Trade Sales Manager in Noida',
      img: './a2.png'
    },
    {
      title: 'Human Research',
      subtitle: 'We’re looking for Specialist - Talent Management in Bangalore.',
      img: './a3.png'
    },
  ];


  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {

    revealRefs.current.forEach((el, index) => {

      gsap.fromTo(el, {
        autoAlpha: 0,
        // x: 0,
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          // x:1,
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App flex">
      <main className="App-main ">
        {/* <h1 className="poppins-bold">Get Discovered</h1> */}
        
        <Heading heading={'Get Discovered'}/>

        <h5 className="poppins-medium">We’re always on the look-out for exceptional talent to delight our consumers and lead positive change. Kick-start your career with us.</h5>
        {
          sections.map(({ title, subtitle, img }) => (
              <div className="App-section" key={title} ref={addToRefs}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <a href="/">Know More <img src="./arrow.svg" alt="" /></a>
                
              </div>
            
          ))
        }
      </main>
    </div>
  );

};

export default ScrollTriggeredUI;
