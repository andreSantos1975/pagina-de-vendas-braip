import React, { useState } from 'react';
import loadmore from '../asserts/icon2.ico';
import styled from 'styled-components';

export default function Testimonials() {

  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: 'SPA',
      name: 'Julia Beatriz',
      review: 'After I started using gerard cannabis I no longer feel back pain. Im going to buy five so I dont run out of them in my stock. ',
    },
    {
      designation: 'FULL',
      name: 'Flavio Antônio',
      review: 'Feel back pain. Im going to by ffive so I dont run out of then in my stock.',
    },
    {
      designation: 'SAIN',
      name: 'Lotus Marquense',
      review: 'Cannabis I no longer feel back pain. Im going to buy five so I dont run out of them in my stock.  them in my stock. ',
    },
  ]
  return (
    <Section>
      <div className="container">
        <div className="testimonials">
          {
            testimonials.map(({ designation, name, review }, index) => {
              return (
                <div className={`testimonials ${selected === index ? "active" : "hidden"}`} key={index}>
                  <div className="image">
                    <div className="cicle2">
                    <img src={loadmore} className='img__icon2' alt='Loadmore ' />
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
        </div>
        <div className="controls">
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
        </div>
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
            height: 3rem;
            width: 3rem;
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

