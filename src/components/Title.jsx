import React from 'react';
import styled from 'styled-components';

export default function Title({ value }) {
  return (
    <Div>
      <h1>{value}</h1>
    </ Div>
  );
}

const Div = styled.div`
   
`;
