import React from 'react';
import milestones from '../asserts/milestones.png';
import milestones2 from '../asserts/milestones4.png';
import milestones3 from '../asserts/milestones3.png';
import milestones_background from '../asserts/coin-bacground.png';
import styled from 'styled-components';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { milestonesAnimations } from 'animation';

export default function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestones,
      data: "Client Served",
      amount: "877",
    },
    {
      image: milestones2,
      data: "of raw data",
      amount: "1.4M",
    },
    {
      image: milestones3,
      data: "Reviews",
      amount: "5.4K",
    },
  ];

  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestones_background} alt='milestone background' />
      </div>
      <div className="milestones">
        {milestone.map(({ image, data, amount }) => (
          <motion.div
            className="milestone"
            key={amount}
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: 'tween',
              duration: 0.8,
            }}
          >
            <p>{amount}</p>
            <span>{data}</span>
            <img src={image} alt="Milestone" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(30, 20, 15, 1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }
  }

  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  .milestone {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    gap: 2rem;
    p {
      font-size: 5rem;
      font-weight: bolder;
      line-height: 3rem; // Corrigido para line-height
    }
    span {
      text-transform: uppercase;
      color: #fffffffc7;
    }
    img {
      height: 6rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 5rem 2rem;

    .background {
      width: 100%;
      height: 100%;
    }

    .milestones {
      grid-template-columns: 1fr;
      gap: 2rem; // Reduzido o espaçamento para 2rem
      padding: 2rem; // Ajustado o padding
    }

    .milestone {
      p {
        font-size: 3rem; // Ajustado o tamanho da fonte para dispositivos móveis
        line-height: 2rem; // Ajustado o line-height para dispositivos móveis
      }
      img {
        height: 4rem; // Ajustado a altura da imagem para dispositivos móveis
      }
    }
  }
`;

