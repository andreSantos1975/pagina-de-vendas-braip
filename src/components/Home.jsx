import React from 'react';
import styled from 'styled-components';
import home from '../asserts/home.png';
//import cannabis from '../asserts/cannabis.jpg';
import Navbar from './Navbar';
import play from '../asserts/play.ico';

export default function Home() {
  return (
    <Section id='home'>
    <Navbar />
    <div className="home">
      <div className="content">
        <div className="title">
          <h1>Cannabis Gelow</h1>
        </div>
        <div className="subTitle">
          <p>
            O gelow cannabis é feito com as melhores matérias primas do mercado. GelowCannabis importa
            diretamente da Marijane industria SA
          </p>
        </div>
        <img src={play} alt='Play-Botton' />
      </div>
    </div>
      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Academy</strong>
            <p>
            travel in flowers
            </p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>
            travelinflowers@gmail.com
            </p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>
            +5561991637838
            </p>
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
      </div>
    </Section>
  )

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

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }

      .subTitle {
        p {
          widht: 70%;
        
        }
      }
    }

    .title,
    .subTitle {
      background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
      padding: 10px; /* Espaçamento interno */
      border-radius: 5px; /* Borda arredondada, ajuste conforme necessário */
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secundary-color);
    padding: 4rem;
   
  
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Corrija aqui: grid-template-columns */
      background-color: rgb(33, 131, 34);
      color: #ffff;
      gap: 0.5rem;


    }
    .col {
      margin-right: 1.2rem; 
    }
  }
  
`;