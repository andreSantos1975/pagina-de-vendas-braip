import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { footerTextAnimation } from 'animation';

export default function Footer() {
  const currentDate = new Date().getFullYear(); // Obtenha o ano atual

  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
           variants={footerTextAnimation}
           animate={controls}
           transition={{
             delay: 0.02,
             type: 'tween',
             duration: 0.8
           }}
      >
        &copy; {currentDate} Direitos reservados A7 Web Designer
      </motion.span>
      <motion.div className="footer__social__icons"
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.8
        }}
      >
        <BsFacebook />
        <BsYoutube />
        <BsInstagram />
      </motion.div>
    </Foot>
  )
}

const Foot = styled(motion.footer)`
  background-color: var(--tertiary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  margin-top: 4px;

  span {
    margin-left: -96px;
    font-size: 0.9rem;
  }

  .footer__social__icons {
    display: flex;
    gap: 1rem;
     svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
       &:hover {
        color: var(--secondary-color);
       }
     }
  }

  @media screen and (max-width: 600px) {
    .footer__social__icons {
      margin-left: 100px;
      justify-content: center; // Centraliza os ícones horizontalmente
    }
  
    span {
      margin-left: -100px; // Remove a margem à esquerda do texto
      text-align: center; // Centraliza o texto horizontalmente
      margin-bottom: 1rem; // Adiciona margem inferior para separar o texto dos ícones
    }
  
    .footer__social__icons svg {
      font-size: 1.2rem; // Reduza o tamanho dos ícones para caber dentro do contêiner
    }
  }
  
`;

