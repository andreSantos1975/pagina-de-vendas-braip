import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

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
        <WhatsAppButton href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE">
          <FaWhatsapp />
        </WhatsAppButton>
      )}
    </div>
  );
}

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: green; /* Cor de fundo do botão do WhatsApp */
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.4s ease-in-out;

  svg {
    color: #fff;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    bottom: 40px; // Ajusta a posição vertical do botão do WhatsApp
    right: 40px; // Mantém a posição horizontal do botão.
  }
`;

