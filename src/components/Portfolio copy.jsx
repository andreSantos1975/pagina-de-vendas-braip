import React from 'react';
import styled from 'styled-components';
import icon2 from '../asserts/icon2.ico';
import portfolio from '../asserts/portfolio.png';
import portfolio2 from '../asserts/canhamo.png';
import portfolio4 from '../asserts/portfolio4.png';
import portfolio5 from '../asserts/portfolio5.png';
import portfolio6 from '../asserts/portfolio7.png';
import portfolio7 from '../asserts/coin.jpg';
import portfolio8 from '../asserts/portfolio8.png';
import portfolio9 from '../asserts/portfolio9.png';
//import portfolio10 from '../asserts/portfolio10.png';
//import portfolio11 from '../asserts/portfolio3.png';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { portfolioAnimations } from 'animation';


export default function Portfolio() {
  const [element, controls] = useScroll();
  return (
    <Section id='portfolio' ref={element}>
      <div className="grid">
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box" style={{ background: `url(${portfolio}) no-repeat right center`, backgroundSize: 'cover' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box" style={{ background: `url(${portfolio2}) no-repeat right center`, backgroundSize: 'cover' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box" style={{ background: `url(${portfolio4}) no-repeat right center`, backgroundSize: 'cover' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box double" style={{ background: `url(${portfolio5}) no-repeat right center`, backgroundSize: 'cover' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box double" style={{ background: `url(${portfolio6}) no-repeat right center`, backgroundSize: 'cover', width: '100%' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box" style={{ background: `url(${portfolio7}) no-repeat right center`, backgroundSize: 'cover' }} />
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="grid-box" style={{ background: `url(${portfolio8}) no-repeat right center`, backgroundSize: 'cover' }} />
      </div>
      <div className="portfolio more">
        <span>Load More</span>
        <img src={icon2} alt="Load More" style={{ width: '50px', height: 'auto' }} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding-bottom: 2rem;
  background-color: var(--secundary-color);

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
    "one two two two"
    "one three four four"
    "five six seven seven"
    "eight six seven seven"
  }

  .grid-box {
    height: 15rem;
    width: 100%;
    cursor: pointer;
  
    &:nth-of-type(1) {
      grid-area: one;   
      background: url(${portfolio}) no-repeat right center;
      background-size: cover;
      height: 100%;
      z-index: 10;
    }
  
   &:nth-of-type(2) {
      grid-area: two;  
      background: url(${portfolio2}) no-repeat right center;
      background-size: cover;
      height: 100%;
    }
    }
 &:nth-of-type(4) {
      grid-area: four;
      background: url(${portfolio4}) no-repeat right center;
      background-size: cover;
    }   
    &:nth-of-type(5) {
      grid-area: six;
      background: url(${portfolio5}) no-repeat right center;
      background-size: cover;
      z-index: 10;
    }
    &:nth-of-type(6) {
      grid-area: five;
      background: url(${portfolio6}) no-repeat right center;
      background-size: cover;
    }   
    &:nth-of-type(7) {
      grid-area: seven;
      background: url(${portfolio7}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(8) {
      z-index: 10;
      grid-area: eight;
      background: url(${portfolio8}) no-repeat right center;
      background-size: cover;
      height: 100%;
    }
    &:nth-of-type(9) {
      grid-area: nine;
      background: url(${portfolio9}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(10) {
      grid-area: ten;
      background: url(${portfolio9}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(11) {
      grid-area: eleven;
      background: url(${portfolio9}) no-repeat right center;
      background-size: cover;
    }
       box-sizing: border-box; /* Isso garante que o padding não aumente o tamanho total da .grid-box */
  }

  .double {
    grid-column: span 2;
  }

  .portfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    span {
      margin-right: 1rem;
      color: #fff;
    }

    img {
      width: 20px;
      height: auto;
    }
  }
  .portfolio.more {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0;
    span {
      color: #40E0D0;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }

 
  

 

  @media screen and (max-width: 600px) {
    .grid {
      padding: 0rem 0rem;
      grid-template-columns: 1fr;
    }
  
    .grid-box {
      height: 25rem !important;
    }
  
    
  }
  

grid-template-areas:
      "one"
      "two"
      "three"
      "four"
      "five"
      "six"
      "seven"
      "eight"
      .grid-box {
        height: 25rem !important
      }
    }
  
  }
  
  
  

`;
