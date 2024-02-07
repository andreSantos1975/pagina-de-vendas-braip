import React, { useState } from 'react';
import loadmore from '../asserts/icon2.ico';
//import loadmoreImage from '../asserts/loadmore.jpg'; // Substitua o caminho pela sua imagem
import image1 from '../asserts/image1.jpg';
import image2 from '../asserts/image2.jpg';
import image3 from '../asserts/image3.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { portfolioAnimations } from 'animation';

export default function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const testimonials = [
    {
      designation: 'SPA',
      name: 'Julia Beatriz',
      review: 'After I started using gerard cannabis I no longer feel back pain. Im going to buy five so I dont run out of them in my stock.',
      image: image1,
    },
    {
      designation: 'FULL',
      name: 'Flavio Antônio',
      review: 'Feel back pain. Im going to by ffive so I dont run out of then in my stock.',
      image: image2,
    },
    {
      designation: 'SAIN',
      name: 'Lotus Marquense',
      review: 'Cannabis I no longer feel back pain. Im going to buy five so I dont run out of them in my stock.  them in my stock.',
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
        width: 20px; /* Ajuste o tamanho desejado */
        height: 20px; /* Ajuste o tamanho desejado */
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
`;

