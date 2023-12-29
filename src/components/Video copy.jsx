import React from 'react';
import styled from 'styled-components';

export default function Video() {
  return (
    <Section id='section'>
      <div className="background">
        <div className="video">

          <iframe
            width='960'
            height='515'
            src="https://www.youtube.com/watch?v=5VZfQ63hR9M&t=3869s"
            title='Youtube vídeo player'
            frameBorder="0"
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>

        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  // Estilos do seu componente aqui...
`;
