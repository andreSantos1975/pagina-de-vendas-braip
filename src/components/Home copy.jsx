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
      flex-direction: column; /* Correção aqui */
      align-items: flex-start; /* Correção aqui */
      width: 60%; /* Correção aqui */
      color: #fff;
      gap: 1.2rem;
      margin-top: 0; /* Correção aqui */
      padding-left: 18rem;
    }
  }
`;