import React from 'react';
import milestones from '../asserts/milestones.png';
import milestones2 from '../asserts/milestones2.png';
import milestones3 from '../asserts/milestones3.png';
import milestones_background from '../asserts/coin-bacground.png';
import styled from 'styled-components';

export default function Milestones() {
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
  ]
  return (
    <Section>
      <div className="background">
        <img src={milestones_background} alt='milestone background' />
      </div>
      <div className="milestones">
        {
          milestone.map(({ image, data, amount }) => {
            return (
              <div className="milestone" key={amount}>
                <p>{amount}</p>
                <span>{data}</span>
                <img src={image} alt="Milestone" />
              </div>
            );
          })
        }
      </div>
    </Section>
  )
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
    background-color: rgba(45, 25, 29, 0.3); /* Cor com transparência usando rgba() */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3; /* Altere este valor para ajustar a transparência da imagem de fundo */
    }
  }

  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: green;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  .milestone {
    position: relative;
    z-index: 3;
  }
`;
