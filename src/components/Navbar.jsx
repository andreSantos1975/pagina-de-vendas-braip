import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../asserts/logo.png';
import { GiHamburguerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Nav>
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

const Nav = styled.nav`
  
`;
