import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsYoutube,  } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { footerTextAnimation } from 'animation';

export default function Footer() {
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
        &copy: React Web Site Transition animation
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
      </motion.div>
    </Foot>
  )
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  margin-top: 4px;

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
`;

