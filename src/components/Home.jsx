import React from 'react';
import styled from 'styled-components';
import home from '../asserts/home.png';
import cannabis from '../asserts/cannabis.jpg';
import Navbar from './Navbar';

export default function Home() {
  return (
    <Section id='home'>
      <Navbar />
    </Section>
  )

}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
`;
