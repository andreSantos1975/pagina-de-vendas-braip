import React from 'react';
import styled from 'styled-components';

export default function Title({ value }) {
  return (
    <Div>
      <h1>{value}</h1>
    </Div>
  );
}

const Div = styled.div`
   position: relative;
   h1 {
    position: absolute;
    transform: translateX(-30%) translateY(20vw) rotate(-90deg);
    font-size: 5rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 400;
   }
`;
