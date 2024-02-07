import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { skillsBarAnimation } from 'animation';

export default function Skills() {
  const [element, controls] = useScroll();
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
      name: "Cosmetic",
      amount: 50
    },
    {
      name: "SPA",
      amount: 68
    },
    {
      name: "Medical",
      amount: 57
    },
  ];

  return (
    <Section id="skills" ref={element}>
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
                <motion.div className="skills__bar__bar" key={name}
                  variants={skillsBarAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.03,
                    type: 'tween',
                    duration: 1.3
                  }}
                >
                  <progress className="progress-bar" value={amount} max="100" />
                  <div className="label-container">
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
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
      z-index: 3;
    }
}
.skills__title {
    padding: 6rem 10rem;
     p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: #40E0D0;
     }
     h2 {
      color: #40E0D0;
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
  margin-top: 34px;
  height: 300px;;
  background-color: var(--secondary-color);

  .title {
    margin-top: 5rem; 
    margin-left: 12rem; 
    font-size: 2rem; 
    font-weight: bold; 
    color: #fff; 
  }

  .descriptions {
    margin-top: 1rem; 
    margin-left: 12rem; 
    font-size: 1.5rem; 
    color: #fff; 
  }
  &__content {
    display: flex;
    flex-directio: column;
    gap: 2rem;
    color: #fff;
    z-index: 2; 
  }
}

@media screen and (max-width: 600px) {
  .skills__title {
    p {
      margin-left: -10px;
    }
    h2 {
      margin-left: -10px;
    }
  }

  .skills__bars {
    padding: 2rem;

    .skills__bar__bar {
      width: 145px;
      height: 300px;
      margin-left: -112px;
     
      .label-container {
        
        margin-top: 23px;
      
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      
        span {
         height: 12px;
         width: 106px;
         margin-top: 10px;
        }
     }
    }
  }

  .skills__content {
   
  
    .title {
      margin-left: 59px;
    }
  
    .descriptions {
      margin-left: 59px;
    }
    &__content {
   
    }
  }
}

`;