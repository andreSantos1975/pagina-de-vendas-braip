import React from 'react';
import styled from 'styled-components';
import icon2 from '../assets/icon2.ico';

import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { portfolioAnimations } from 'animation';

import portfolio from '../assets/portfolio.jpeg';
import portfolio4 from '../assets/Blue.jpeg';
import portfolio3 from '../assets/milestone.png';
import portfolio2 from '../assets/serum.png';
import portfolio5 from '../assets/portfolio5.webp';
import portfolio6 from '../assets/nature3.jpeg'; 



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

  return (
    <Section id='portfolio' ref={element}>
    
      <div className="grid">
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            variants={portfolioAnimations}
            animate={controls}
            transition={{ delay: 0.03, type: 'tween', duration: 0.8 }}
            className={`grid-box ${item.double ? 'double' : ''}`}
            style={{
              background: `url(${item.image}) no-repeat right center`,
              backgroundSize: 'cover',
              width: item.double ? '100%' : 'auto',
            }}
          />
        ))}
      </div>
      <div className="portfolio more">
        <span>New Detox certificado pela Anvisa</span>
        <img src={icon2} alt="Load More" style={{ width: '20px', height: 'auto' }} />
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
      "eight six seven seven";
  }

  .grid-box {
    min-height: 15rem; // Alterado para min-height
    width: 100%;
    cursor: default;
    box-sizing: border-box;
    background: center / cover no-repeat; // Adicionado para prevenir conteúdo invisível
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
      color: var(--tertiary-color);
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    img {
      margin-left: -22px;
    }
  }

  @media screen and (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six";
    }

    .grid-box {
      height: auto; // Revertido para height:auto
    }
  }
`;
