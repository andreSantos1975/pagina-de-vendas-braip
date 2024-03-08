import React from 'react';
//import Title from '../components/Title';
import styled from 'styled-components';
import play from '../assets/play.ico';
import services from '../assets/serum2.jpg';
import services2 from '../assets/serum.png';
import services3 from '../assets/milestone.png';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from 'animation';


export default function Services() {
  const [element, controls] = useScroll();
  const data = [
    {
      type: "Rosa Amazônica",
      text: "Reduz a aparência das rugas instantaneamente, Hidratação 24 horas, Clareia e Uniformiza a Pele, Clareador de Manchas, Elimina o “Pé de Galinha” e “Bigode Chinês, Devolve a Firmeza e Elasticidade a sua Pele, Combate Estrias e Foliculite, Alívio das irritações, 11 efeitos em 1 sérum, Rosa Mosqueta + Ácido Hialurônico + Verisol.",
      image: services,
      affiliateLink: "https://ev.braip.com/ref?pv=proeo8oe&af=afi5dg9l5g"
    },
    {
      type: "Velvet Lab",
      text: "Reduz a aparência das rugas instantaneamente, Hidratação 24 horas, Clareia e Uniformiza a Pele, Clareador de Manchas, Elimina o “Pé de Galinha” e Bigode Chinês, Devolve a Firmeza e Elasticidade a sua Pele, Combate Estrias e Foliculite, Alívio das irritações, Vitaminas A, E, B3 e B5, Velvet Lab com 9 efeitos em 1 sérum.",
      image: services2,
      affiliateLink: "https://app.monetizze.com.br/r/ATR23928555"
    },
    {
      type: "New Detox",
      text: "New Detox é um poderoso suplemento que acelera o seu metabolismo, diminui o inchaço e a retenção, elimina as substâncias inflamatórias e te faz emagrecer de forma rápida, saudável e definitiva.",
      image: services3,
      affiliateLink: "https://ev.braip.com/ref?pv=pro6e1zm&af=afi07d09g2"
    },
  ];

  return (
    <Section id='services' ref={element}>
      {/*<Title value="produtos" fontSize="1rem" />*/}
      <div className="services">
        {data.map(({ type, text, image, affiliateLink }, index) => {
          return (
            <motion.div className="services__service" key={index}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt='Services' style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <img src={play} alt='Readmore' className="play-icon" />
                </a>
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <div className="services__service__description">{text}</div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 9rem;
    margin-top: 5rem;
    gap: 5rem;
    margin-left: 150px;
    
    &__service {
      padding: 1rem;
    
      
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        
        .services__service__title {
          span {
            color: #fff;
          }
          h2 {
            color: #40E0D0;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
        cursor: pointer
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secundary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
    .services__service__image {
      margin-bottom: 3rem;
      
      .play-icon {
        width: 40px; 
        height: auto;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr; /* Altera a exibição para uma coluna em telas menores */
      gap: 2rem;
      paddint: 0 2rem;
      margin-left: 1px; /* Ajusta a margem para o contêiner .services */
    }
  
    .services__service {
      padding: 2rem; /* Ajusta o padding para tornar a .services__service mais larga */
    }
  
    h1 {
      margin-left: -40px; 
    }
  }
`;