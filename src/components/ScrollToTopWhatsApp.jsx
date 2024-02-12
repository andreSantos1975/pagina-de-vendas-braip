import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa';

export default function ScrollToTopWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {visible && (
        <Div>
          <a href="#home">
            <FaChevronUp />
          </a>
          <WhatsAppButton href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE">
            <FaWhatsapp />
          </WhatsAppButton>
        </Div>
      )}
    </div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  position: relative;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  top: 370px;
  right: 40px;
  background-color: green; /* Cor de fundo do botão do WhatsApp */
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: 0.4s ease-in-out;

  svg {
    color: #fff;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    top: calc(100vh - 160px); // Ajusta a posição vertical do botão do WhatsApp
    right: 40px; // Mantém a posição horizontal do botão.
  }
`;
