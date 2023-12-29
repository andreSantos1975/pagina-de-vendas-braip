import React from 'react';
import styled from 'styled-components';
import play from '../asserts/play.ico';
import home from '../asserts/home.png';
import Title from './Title';

export default function Blog() {
  const blogData = [
    {
      title: "MARIJANE CANNABIS",
      type: "THC",
      descripton: "Os produtos MARIJANE CANNABIS tem o delta 90 extraídos com inteligência artificial de flores de blue janne"
    },
    {
      title: "COLHEITA DAS FLORES",
      type: "THC",
      descripton: "As flores possuem um alto gral de thc"
    },
    {
      title: "CDB NATURAL",
      type: "CDB",
      descripton: "As flores de CDB possue o necessário para acabar com a depressão"
    },
  ];
  return (
    <Section id='blog'>
       <Title value='Blog'/>
       <div className="blogs">
         {blogData.map(({title, type, descripton}) =>{
          return(
            <div className="blog">
              <div className="image">
                <div className="title">
                  <h1>{title}</h1>
                </div>
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
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 15rem;
      background: url(${home}) no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
 }
`;


