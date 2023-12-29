import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import play from '../asserts/play.ico';
import services from '../asserts/folha1.png';
import services2 from '../asserts/folha2.png';
import services3 from '../asserts/folha3.png';

export default function Services() {
  const data = [
    {
      type: "Blowout",
      text: "Chelow Cannabis was developed with the best first-world technology so you can experience significant results",
      image: services
    },
    {
      type: "Blowout",
      text: "Chelow Cannabis Pro has nanoparticle materials so that its active ingredient is absorbed easily.",
      image: services2
    },
    {
      type: "Blowout",
      text: "Chelow Cannabis Ultra Blue is concentrated in the Delta 90 formula with 10% CBD",
      image: services3
    },
  ];

  return (
    <Section id='services'>
      <Title value="produtos" fontSize="1rem" />
      <div className="services">
        {data.map(({ type, text, image }, index) => {
          return (
            <div className="services__service" key={index}>
              <div className="services__service__image">
                <img src={image} alt='Services' />
                <img src={play} alt='Readmore' className="play-icon" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <div className="services__service__description">{text}</div>
            </div>
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
    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: #fff;
          }
          h2 {
            color: green;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem; // Corrigido de "margim" para "margin"
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
        width: 40px; // Ajuste o tamanho conforme necessário
        height: auto;
      }
    }
  }
`;
