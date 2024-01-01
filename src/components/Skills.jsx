import React from 'react';
import styled from 'styled-components';
import Title from './Title';

export default function Skills() {
  const skillsData = [
    {
      name: "Facial",
      amount: 75
    },
    {
      name: "Skin",
      amount: 34
    },
    {
      name: "SPA",
      amount: 50
    },
    {
      name: "Cosmetic",
      amount: 68
    },
    {
      name: "Medical",
      amount: 57
    },
  ];

  return (
    <Section id="skills">
      <Title value='skills' />
      <div className="skills__title">
        <p>Our Skills</p>
        <h2>Checker Our Supper Skills</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {
           skillsData.map(({ name, amount }) => {
            return (
              <div className="skills__bar__bar" key={name}>
                <progress className="progress-bar" value={amount} max="100" />
                <div className="label-container">
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </div>
            );
          })
          }
        </div>
        <div className="skills__content">
          <p className="title">
            Beauty Servicess and Products
          </p>
          <p className="descriptions">
            To be a successFull becauty you sochoud have witch range.
          </p>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
   min-height: 100vh;
   height: 140vh;
   background-color: var(--secundary-color);

.sideTitle {
    h1 {
      color: #fff;
      font-size: 9rem;
      z-index: 2;
    }
}
.skills__title {
    padding: 6rem 10rem;
     p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
     }
     h2 {
      color: green;
      font-size: 2rem;
     }
}
.skills__bars {
  display: flex;
  margin-left: 56px;
  gap: 2rem; /* Ajuste conforme necessário para o espaçamento entre as barras */
  align-items: center;

  .skills__bar__bar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .progress-bar {
      transform: rotate(-90deg);
      transform-origin: bottom;
      width: 10rem;
      height: 1rem;
      -webkit-appearance: none;
      appearance: none;
    
      &::-webkit-progress-bar {
        height: 1rem;
        background-color: var(--primary-color);
        border-radius: 20px; /* Estilizando o background da barra de progresso */
      }
    
      &::-webkit-progress-value {
        height: 1rem;
        background-color: var(--secondary-color); /* Cor da barra de progresso preenchida */
        border-radius: 20px; /* Estilizando as extremidades da barra de progresso preenchida */
      }
    }
    

    .label-container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 1rem;
      span {
        margin-left: 93px;
        writing-mode: vertical;
      }
    
    }
    h3 {
      margin-top: 27px;
      margin-left: 10px;
      font-size: 2rem;
    }
  }
}
}
.skills__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    margin-top: 5rem; 
    margin-left: 12rem; 
    font-size: 2rem; 
    font-weight: bold; 
    color: var(--primary-color); 
  }

  .descriptions {
    margin-top: 1rem; 
    margin-left: 12rem; 
    font-size: 1.5rem; 
    color: var(--secundary-color);
  }
  &__content {
    display: flex;
    flex-directio: column;
    gap: 2rem;
    color: #fff;
    z-index: 2; 
  }
}


`;
