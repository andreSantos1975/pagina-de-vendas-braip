import React from 'react';
import styled from 'styled-components';
import home from '../assets/home5.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { homeAnimation, homeInfoAnimation } from 'animation';

export default function Home() {
  return (
    <Section id='home'>
      <Navbar />
      <motion.div className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
        
        </div>
      </motion.div>
      <motion.div className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 155vh;
  background-size: contain; /* Alterado para 'contain' */
  background-position: center; /* Centraliza a imagem */
  position: relative;
  overflow: hidden; /* Evita que a imagem vaze para fora do contêiner */

  .content img {
    width: 40px;
    height: 100px;
  }

  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 0;
      padding-left: 18rem;
    }
  }

  .title,
  .subTitle {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    margin-top: -29px;
  }

  .subTitle {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 1rem;
    }

    p {
      width: 70%;
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secundary-color);
    padding: 4rem;
   /* z-index: 1; */

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      background-color: rgb(33, 131, 34);
      color: #ffff;
      gap: 0.5rem;
    }

    .col {
      margin-right: 1.2rem;
    }
  }
  
@media screen and (max-width: 600px) {
 .info {
  position: relative;
  bottom: -5rem;
 }
 .content {
  width: 100%;
  margin-left: -139px;
  padding-left: 1rem;
 }
 .grid {
  margin-left: -30px;
  grid-template-columns: 1fr;
  width: calc(100% + 60px);
 }
 .col {
  margin-right: 1.2rem;
}
.col p {
  word-break: break-all;
}
}

`;


