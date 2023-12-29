import React from 'react';
import styled from 'styled-components';

export default function Video() {
  return (
    <Section id='section'>
      <div className="background">
        <div className="video">
          <video
            width='960'
            height='515'
            controls
          >
            <source src="/videos/seu_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  // Estilos do seu componente aqui...
`;
