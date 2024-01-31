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
            width="480"
            height="300"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        </motion.div>
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
  background-color: #FF1493;
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
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 600px) {
    
  }
`;
