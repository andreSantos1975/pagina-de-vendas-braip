import React from 'react';
import styled from 'styled-components';
import play from '../asserts/play.ico';
import home from '../asserts/home.png';
import Title from './Title';

// ...

export default function Blog() {
  const blogData = [
    {
      title: "MARIJANE CANNABIS",
      type: "THC",
      descripton: "Os produtos MARIJANE CANNABIS tem o delta 90 janne"
    },
    {
      title: "COLHEITA DAS FLORES",
      type: "THC",
      descripton: "As flores possuem um alto gral de thc"
    },
    {
      title: "CDB NATURAL",
      type: "CDB",
      descripton: "As flores de CDB possue o necessário para acabar"
    },
  ];
  return (
    <Section id='blog'>
       <Title value='Blog'/>
       <div className="blogs">
         {blogData.map(({title, type, descripton}) =>{
          return(
            <div className="blog" key={title}>
              <div className="image">
                <div className="title">
                  <h1>{title}</h1>
                  <span className="type">{type}</span>
                  <div className="description">
                    <p>{descripton}</p>
                  </div>
                  <div className="more">
                    <img src={play} alt='Play' />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
          )
         })}
       </div>
    </Section>
  )
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
        margin-top: -64px; /* A margem negativa esta subindo a seção para o top */
        height: 15rem;
        background: url(${home}) no-repeat center center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
          text-align: center;
          h3 {
            color: var(--secundary-color);
            font-size: 1.5rem;
          }
        }

        .type,
        .description,
        .more {
          color: black; /* Configura a cor da descrição */
          text-align: center;
        }

        h1 {
          margin-top: 480px; /* Move o title, type e description para baixo da imagem home */
          color: var(--secondary-color);
          font-size: 1.5rem;
        }

        .type {
          font-size: 1rem;
          color: var(--primary-color);
          font-weight: bolder; 
          text-transform: uppercase; 
        }
        

        .description {
          font-size: 1rem;
          height: 10rem;
        }

        .more {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -6rem; /* Move a div more para o margin-top */
          color: var(--secondary-color);

          img {
            margin-bottom: 0.5rem;
            width: 45px; 
            height: 45px; 
            gap: 1rem;
            cursor: pointer;
            span {
              latter-spancing: 0.1rem;
              text-transform: uppercase; 
             
            }
          }
        }
      }
    }
  }
`;
