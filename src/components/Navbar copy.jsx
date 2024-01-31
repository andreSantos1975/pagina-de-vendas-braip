import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../asserts/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
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
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a href="#" className='brand'>
          <img src={logo} alt='logo' />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={ () => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
            onClick={ (e) =>{
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
          )} 
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
    .toggle {
      display: none;
    }
    .brand img {
      width: 40px; /* Para diminuir o tamanho da logo */
      height: auto; /* Mantém a proporção da imagem */
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
   
      }
      li {
        a {
          color: #ffff;
          text-decoration: none;
          font-weight: 400; 
          font-size: 0.9rem;
          text-transform: uppercase; 
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
     .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({state}) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

      }
     }
  }
  
`;
