import React from 'react';
import styled from 'styled-components';
import { useScroll } from './UseScroll';
import { motion } from 'framer-motion';
import { videoAnimations } from 'animation';

export default function Video() {
  const [element, controls] = useScroll();

  const videoId = 'qaQm9_3LyWk';

  return (
    <Section id='section' ref={element}>
      <div className="background">
        <motion.div className="video"
          variants={videoAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
        >
          <iframe
            title="YouTube Video"
            width="800" // Ajuste conforme necessário
            height="500" // Ajuste conforme necessário
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        </motion.div>
        <TextInfo>
          <p>
            Seu texto informativo aqui. Pode incluir detalhes sobre o vídeo ou qualquer outra informação relevante.
          </p>
        </TextInfo>
        <MobileTitle>
          <h2>Título no Dispositivo.</h2>
        </MobileTitle>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #FF1493;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .video {
    z-index: 10;
    margin-left: 150px;

    iframe {
      width: 550px;
      height: 350px;
    }
  }
  @media screen and (max-width: 600px) {
    .video {
      z-index: 10;
      margin-left: 70px;
  
      iframe {
        width: 250px;
        height: 350px;
      }
  }
`;

const TextInfo = styled.div`
z-index: 10;
color: #fff;
max-width: 1200px;
margin-top: 43px;
text-align: center;
padding-left: 124px; 

p {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-left: -90px;
}

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    margin-left: -25px;
    p {
      height: auto; /* Permita que a altura do texto se ajuste automaticamente */
      word-wrap: break-word; /* Quebra de palavras para evitar vazamentos */
      text-align: justify; /* Justificar o texto para um melhor alinhamento */
      padding: 0 1rem; /* Adicione um espaçamento lateral conforme necessário */
    }
  }
`;

const MobileTitle = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    margin-top: 1rem;
    margin-left: -20px;
  
    
    h2 {
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      margin-left: 73px;
    }
  }
`;




