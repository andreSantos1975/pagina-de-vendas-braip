import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

export default function Video() {
  const videoId = '5VZfQ63hR9M'; // Substitua pelo ID do vídeo do YouTube

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // acessar o player (event.target) se necessário
    event.target.playVideo();
  };

  return (
    <Section id='section'>
      <div className="background">
        <div className="video">
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .video {
    z-index: 10;
  }
`;
