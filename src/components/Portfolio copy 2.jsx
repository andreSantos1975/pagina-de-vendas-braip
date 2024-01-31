import React from 'react';
import styled from 'styled-components';
import icon2 from '../asserts/icon2.ico';

import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { portfolioAnimations } from 'animation';

import portfolio from '../asserts/portfolio.png';
import portfolio2 from '../asserts/portfolio2.png';
import portfolio3 from '../asserts/portfolio3.png';
import portfolio4 from '../asserts/portfolio4.png';
import portfolio5 from '../asserts/portfolio5.png';
import portfolio6 from '../asserts/portfolio6.png';



const portfolioData = [
  { image: portfolio, double: false },
  { image: portfolio2, double: false },
  { image: portfolio3, double: true },
  { image: portfolio4, double: true },
  { image: portfolio5, double: false },
  { image: portfolio6, double: false },


];


export default function Portfolio() {
  const [element, controls] = useScroll();


  portfolioData.forEach((item, index) => {
    console.log(`Imagens no Portfolio ${index + 1}: ${item.image}`);
  });

  return (
    <Section id='portfolio' ref={element}>
      <div className="grid">
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            variants={portfolioAnimations}
            animate={controls}
            transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
            className={`grid-box ${item.double ? 'double' : ''}`}
            style={{
              background: `url(${item.image}) no-repeat right center`,
              backgroundSize: 'cover',
              width: item.double ? '100%' : 'auto'
            }}
          />
        ))}
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
      padding: 0;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 
        "one"
        "two"
        "three"
        "four"
        "five"
        "six";
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
