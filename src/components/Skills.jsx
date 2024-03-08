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
      name: "Corpo",
      amount: 34
    },
    {
      name: "Cabelos",
      amount: 19
    },
    {
      name: "Mãos",
      amount: 68
    },
    {
      name: "Medicinal",
      amount: 22
    },
  ];

  return (
    <Section id="skills" ref={element}>
      <Title value='skill' />
      <div className="skills__title">
        <p>Indicações</p>
        <h2>Habilidades geral dos produtos no site </h2>
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
               Ação dos produtos de beleza e produtos de saúde no site  
          </p>
          <p className="descriptions">
             Para ter sucesso e onde você deve ter maior alcance.
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
      color: var(--tertiary-color);
     }
     h2 {
      color: var(--tertiary-color);
      font-size: 2rem;
     }
}
.skills__bars {
  display: flex;
  margin-left: 156px;
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
      margin-left: -30px;
    }
    h2 {
      margin-left: -30px;
      margin-top: 22px;
    }
  }

  .skills__bars {
    padding: 0.5rem;

    .skills__bar__bar {
      width: 134px;
      height: 190px;
      margin-left: -90px;
     
      .label-container {
        
        margin-top: 53px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

      span {
         height: 12px;
         width: 166px;
         margin-top: 10px;
        }
     }
    }
  }

  .skills__content {
    height: 380px;
  .title {
      margin-left: 59px;
    }
  
    .descriptions {
      margin-left: 59px;
    }
  }
}
`;