import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

export default function Video() {
  const videoId = 'qaQm9_3LyWk';

  const opts = {
    height: '300',
    width: '480',
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
        <TextInfo>
          <p>
            Seu texto informativo aqui. Pode incluir detalhes sobre o vídeo ou qualquer outra informação relevante.
          </p>
        </TextInfo>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #006400;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .video {
    z-index: 10;
    margin-top: -75px;
    margin-right: 320px;
  }
`;

const TextInfo = styled.div`
  z-index: 10;
  margin-top: -220px;
  margin-left: 580px;
  color: #fff;
  max-width: 300px;
  
  p {
    font-family: 'Poppins', sans-serif; /* Use Poppins e fallback para sans-serif se Poppins não estiver disponível */
    font-size: 16px; /* Tamanho da fonte */
    line-height: 1.5; /* Espaçamento entre linhas */
    margin-bottom: 16px; /* Espaçamento inferior */
  }
`;
