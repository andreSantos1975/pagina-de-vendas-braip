import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../asserts/logo.png';
import { GiHamburguerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { navAnimation } from 'animation';

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav ref={element}
      variants={navAnimation}
      transition={{delay: 0.1}}
      animate={controls}
    >
      <div className="brand__container">
        <a href="#" className='brand'>
          <img src={logo} alt='logo' />
        </a>
        <div className="toogle"></div>
      </div>
      <div className="link">
        <ul>
          <li className="active">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between; 
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toogle {
      display: none;
    }
    .brand img {
      width: 40px; /* Ajuste o valor conforme necessário para diminuir o tamanho da logo */
      height: auto; /* Mantém a proporção da imagem */
    }
  }
  .link {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #ffff;
          text-decoration: none;
          font-weight: 400; /* Correção aqui */
          font-size: 0.9rem;
          text-transform: uppercase; /* Correção aqui */
        }
      }
    }
  }
`;
