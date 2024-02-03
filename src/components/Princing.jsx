import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
//import princing from '../asserts/carvalho.jpg';
//import princing2 from '../asserts/agua-viva.jpg';
import play from '../asserts/play.ico';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { princingAnimation } from 'animation';

export default function Princing() {
  const [element, controls] = useScroll();
  const plans = [
    {
      name: "Basic",
      price: 13,
    },
    {
      name: "Pro",
      price: 29,
    },
    {
      name: "Expert",
      price: 60,
    },
  ];

  const data = [
    {
      value: "Full face Rs.250",
      type: "Basic",
    },
    {
      value: "Chikees",
      type: "Basic",
    },
    {
      value: "Jalline 30",
      type: "Basic",
    },
    {
      value: "Upe lipe 50",
      type: "Basic",
    },
    {
      value: "Upe line 150",
      type: "Pro",
    },
    {
      value: "Full laik 400",
      type: "Pro",
    },
    {
      value: "Huf lengs",
      type: "Expert",
    },
    {
      value: "Dalles Backp 600",
      type: "Expert",
    },
    {
      value: "Clip Setap 780",
      type: "Expert",
    },
  ];

  return (
    <Section ref={element}>
      <Title value='princing' />
      {/*<div className="background">
        <img src={princing} alt='background' className='bg2' />
        <img src={princing2} alt='background' className='bg2' />
      </div>*/}
      <div className="princing__title">
        <p>Findng princing</p>
        <h1>Finding sinling princing pro, expert, basic</h1>
      </div>
      <div className="princing">
        {plans.map(({ name, price }, index) => {
          return (
            <motion.div className="princing__plan" key={index}
              variants={princingAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: 'tween',
                duration: 0.8,
              }}
            >
              <div className="princing__plan__name">
                <h2>{name}</h2>
                <div className="princing__plan_name__price">
                  <span>$</span>
                  <p>{price}</p>
                </div>
              </div>
              <div className="princing__plan__content">
                <ul className={`princing__plan__content__feactures ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        {name === 'Basic' ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className='line'>{value}</li>
                          )
                        ) : name === 'Pro' ? (
                          type === 'Basic' || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className='line'>{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
                <div className="princing__plan__content_actions">
                  <span className="order-now">ORDER NOW</span>
                  <img className="order-now-icon" src={play} alt='Order Now' />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  .background {
    position: relative;
    width: 100%;
    height: 100%;

    .bg1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 30%; 
      height: auto;
      z-index: -1;
    }
    .bg2 {
      position: absolute;
      bottom: -34.3rem;
      right: 0;
      width: 30%; 
      margin-right: -17px;
      height: auto;
      z-index: -1;
    }
  }

  .princing__plan__name {
    .princing__plan_name__price {
      margin-top: 10px;
      color: #fff;
      font-size: 2rem; /* Ajuste o tamanho do número conforme necessário */
      display: flex;
      align-items: baseline; /* Alinha o símbolo monetário à linha de base do número */
    
      span {
        font-size: 1.5rem; /* Ajuste o tamanho do símbolo monetário conforme necessário */
        margin-left: 5px; /* Adiciona um espaço entre o número e o símbolo monetário */
      }
    }
    
  }
  .princing__title {
    margin: 2rem 12rem;
    margin-left: 253px;
  
    p {
      color: #40E0D0;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      margin-left: 63px;
    }
    h1 {
      color: #40E0D0;
      font-size: 2rem;
    }
  }
  .princing {
    display: flex;
    margin-top: 80px;
    justify-content: space-around;
    padding: 0 10rem;
    margin-left: 69px;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      img {
        cursor: pointer;
      }
      .order-now {
        font-size: 16px; 
        color: var(--secondary-color);
        
      }
      
      .order-now-icon {
        width: 40px; 
        height: 40px; 
        margin-top: 12px;
      }
      &:nth-child(2) {

        .princing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }
      &__name {
        background-color: var(--primary-color);
        width: 8rem;
        height: 8rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
           position: relative;
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: #fff;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
 
    }
  }
 }

 @media screen and (max-width: 600px) {
   padding: 1rem;
   background-color: var(secondary-color);
     princing__title {
    margin: 0;
    padding: 0 2rem;
    text-align: center;
      h2 {
        font-size: 1.3rem;
      }
   }
    .princing {
      grid-template-columns: 1fr;
      padding: 1rem;
      gap: 4rem;
      &__plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
         &__name {
          height: 10rem;
          widht: 10rem;
          h2 {
            font-size: 1.5rem;
          }
         }
         &__price {
          
         }
      }
    }
 }

`;

