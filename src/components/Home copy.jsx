import React from 'react';
import styled from 'styled-components';
import home from '../asserts/home.jpeg';
import play from '../asserts/play.ico';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { homeAnimation, homeInfoAnimation  } from 'animation';
 
export default function Home() {
  return (
    <Section id='home'>
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Cannabis Gelow</h1>
          </div>
          <div className="subTitle">
            <div className="icon">
              <img src={play} alt='Play-Botton' />
            </div>
            <p>
              O gelow cannabis é feito com as melhores matérias primas do mercado. GelowCannabis importa diretamente da Marijane
              industria SA
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Academy</strong>
            <p>travel in flowers</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>travelinflowers@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+5561991637838</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>322 Long Fly</p>
            <p>997773 India</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>sparking</p>
            <p>spa cream</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Working</p>
            <p>monday to friday</p>
            <p>08:00 as 17:00</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;

  .content img {
    width: 40px;
    height: auto;
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


