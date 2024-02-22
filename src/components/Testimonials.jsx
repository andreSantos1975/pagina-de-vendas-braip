import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { portfolioAnimations } from 'animation';

export default function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const testimonials = [
    {
      designation: 'MA',
      name: 'Julia Beatriz',
      review: 'Recomendo o rosa amazônica para todas mulheres do Brasil.',
      image: image1,
    },
    {
      designation: 'CE',
      name: 'Flavia Antônia',
      review: 'Notei que minha pele ficou mais macia e mais firme, também desapareceu algumas machas que eu tinha.',
      image: image2,
    },
    {
      designation: 'MG',
      name: 'Lídia Maria',
      review: 'Depois que começei a usar rosa amazônica fiquei dez anos mais nova.',
      image: image3,
    },
  ];

  return (
    <Section ref={element}>
      <div className="container">
        <motion.div className="testimonials"
          variants={portfolioAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8
          }}
        >
          {
            testimonials.map(({ designation, name, review }, index) => {
              return (
                <div className={`testimonials ${selected === index ? "active" : "hidden"}`} key={index}>
                  <div className="image">
                    <div className="cicle2">
                      <img src={testimonials[index].image} className='img__icon2' alt={`Loadmore ${index}`} />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">
                      {designation}
                    </span>
                    <h3 className='title'>{name}</h3>
                  </div>
                  <p className="descripion">{review}</p>
                </div>
              );
            })
          }
        </motion.div>
        <motion.div className="controls"
          variants={portfolioAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() =>
              setSelected(0)}>
          </button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() =>
              setSelected(1)}>
          </button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() =>
              setSelected(2)}>
          </button>
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; /* Centralizar na direção transversal (cross-axis) */
    gap: 2rem;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 50%;
      margin: 0 auto; 
      .testimonials {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centralizar na direção transversal (cross-axis) */
        gap: 1rem;
        .image {
         position: relative;
         .cicle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 6rem;
          width: 6rem;
          border-radius: 10rem;
          background-color: #fff;
        
          .img__icon2 {
            height: 100%; /* Usar a altura completa do círculo2 */
            width: 100%;  /* Usar a largura completa do círculo2 */
            border-radius: 50%; /* Aplicar o border-radius para formar um círculo */
          }
        }
        
        }
      }
      .hidden {
        display: none;
      }
      color: #ffff;
      .descripion {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;

      button {
        width: 20px; 
        height: 20px; 
        border-radius: 50%;
        background-color: #fff; /* Cor de fundo */
        border: 1px solid #fff; /* Borda */
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease;

        &.active {
          background-color: var(--primary-color); /* Cor de fundo quando ativo */
        }

        &:hover {
          background-color: #ccc; /* Cor de fundo ao passar o mouse */
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      .testimonials {
        width: 100%;
        flex-direction: column;
        text-align: left;
  
        .testimonials {
          width: 100%;
  
          .image {
            .cicle2 {
              height: 7rem;
              width: 7rem;
            }
          }
        }
  
        .descripion {
          height: auto;
          word-wrap: break-word;
          text-align: justify;
          padding: 0 1rem;
        }
      }
  
      .controls {
        flex-direction: row;
        justify-content: center;
      }
    }
  
    .img__icon2 {
      height: 345px;
      width: 345px;
      border-radius: 50%;
    }
  }
  
  
`;

