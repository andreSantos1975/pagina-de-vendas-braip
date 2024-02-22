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
      <VideoContainer>
        <SideVideos>
          <motion.div
            className="side-video"
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
              width="300"
              height="250"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </motion.div>
          {/* Adicione outro vídeo à esquerda, se necessário */}
        </SideVideos>
        <CenterVideo>
          <motion.div
            className="center-video"
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
              width="400"
              height="300"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </motion.div>
        </CenterVideo>
        <SideVideos>
          {/* Adicione outro vídeo à direita, se necessário */}
          <motion.div
            className="side-video"
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
              width="300"
              height="250"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </motion.div>
        </SideVideos>
      </VideoContainer>
      <TextInfo>
        <p>
          "Milhares de clientes em todo o mundo confiam em nossos produtos de beleza para realçar sua aparência e elevar sua confiança. Veja o que alguns deles têm a dizer sobre suas experiências:

          "Estou apaixonada pelos resultados que obtive ao usar os produtos deste site. Minha pele nunca esteve tão radiante e saudável!" - Laura S., Rio de Janeiro.

          "Os produtos de beleza deste site tornaram minha rotina de cuidados com a pele mais simples e eficaz. Meu rosto nunca se sentiu tão suave e hidratado!" - Sofia R., São Paulo.

         "Desde que comecei a usar os produtos deste site, tenho recebido elogios constantes sobre minha aparência. Nunca me senti tão confiante e bonita!" - Marta P., Mato Grosso.

          Descubra por si mesmo por que tantas pessoas confiam em nossos produtos para realçar sua beleza natural. Faça seu pedido hoje e dê o primeiro passo para uma aparência deslumbrante e uma autoconfiança renovada!"
        </p>
      </TextInfo>
      <MobileTitle>
        <h2>Título no Dispositivo.</h2>
      </MobileTitle>
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
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SideVideos = styled.div`
  width: 25%;
`;

const CenterVideo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
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





