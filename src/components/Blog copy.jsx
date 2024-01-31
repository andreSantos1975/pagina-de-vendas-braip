import React from 'react';
import styled from 'styled-components';
import play from '../asserts/play.ico';
import home from '../asserts/home.png';
import Title from './Title';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { blogsAnimation } from 'animation';

export default function Blog() {
  const [element, controls] = useScroll();

  const blogData = [
    {
      title: "MARIJANE CANNABIS",
      type: "THC",
      description: "Os produtos MARIJANE CANNABIS têm o delta 90 janne"
    },
    {
      title: "COLHEITA DAS FLORES",
      type: "THC",
      description: "As flores possuem um alto grau de THC"
    },
    {
      title: "CDB NATURAL",
      type: "CDB",
      description: "As flores de CDB possuem o necessário para acabar"
    },
  ];

  return (
    <Section id='blog' ref={element}>
      <Title value='Blog' />
      <div className="blogs">
        {blogData.map(({ title, type, description }) => (
          <motion.div
            className="blog"
            key={title}
            variants={blogsAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: 'tween',
              duration: 0.8
            }}
          >
            <div className="image" style={{ backgroundImage: `url(${home})` }} />
            <div className="content">
              <h1>{title}</h1>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt='Play' />
                <span>Read More</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 10rem 5rem;

    .blog {
      .image {
        height: 15rem; /* Ajuste a altura conforme necessário */
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .content {
        text-align: center;

        h1 {
          color: var(--secondary-color);
          font-size: 1.5rem;
          margin-top: 1rem; /* Adicione uma margem superior para separar do topo */
        }

        .type {
          font-size: 1rem;
          color: var(--primary-color);
          font-weight: bolder;
          text-transform: uppercase;
        }

        .description {
          font-size: 1rem;
          text-align: center;
        }

        .more {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
          color: var(--secondary-color);

          img {
            margin-bottom: 0.5rem;
            width: 45px;
            height: 45px;
            cursor: pointer;

            span {
              letter-spacing: 0.1rem;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin: 0 1rem;
    }
  }
`;




