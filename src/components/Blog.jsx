import React from 'react';
import styled from 'styled-components';
import play from '../assets/play.ico';
import home1 from '../assets/home.jpeg';
import home2 from '../assets/serum.png';
import home3 from '../assets/milestone.png'; 
//import Title from './Title';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { blogsAnimation } from 'animation';

export default function Blog() {
  const [element, controls] = useScroll();

  const blogData = [
    {
      title: "Rosa Amazônica",
      type: "Sérium Farcial",
      description: "Único Sérim 11 em  1 do Brasil usado por influêncies renomadas do Brasil. Aproveite 90 dias de garantia.",
      image: home1 
    },
    {
      title: "Velvet Lab",
      type: "Sérium Farcial",
      description: "9 efeitos em 1 Sérum. Reduz a aparência das rugas instantaneamente, A tecnologia americana que devolve a beleza da sua pele! Aproveite o frete grátis e garantia de 30 dias",
      image: home2 
    },
    {
      title: "New Detox",
      type: "cápsulas!",
      description: "Seu corpo livre de inchaços! Você mais magra já nas primeiras semanas. PRODUTO COM ANVISA APROVADO! Fabricado pela Capsul Brasil. Aproveite 30 dias de garantia, Ebook e aplicativo",
      image: home3 
    },
  ];

  return (
    <Section id='blog' ref={element}>
     
      <div className="blogs">
        {blogData.map(({ title, type, description, image }) => (
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
            <div className="image" style={{ backgroundImage: `url(${image})` }} /> {/* Use a imagem correspondente */}
            <div className="content">
              <h1>{title}</h1>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt='Play' />
                <span>Saiba mais</span>
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
    margin: 10rem 1rem;

    .blog {
      .image {
        height: 20rem; 
        width: 20rem;
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




