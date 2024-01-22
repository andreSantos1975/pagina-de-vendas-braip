import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsYoutube,  } from 'react-icons/bs';

export default function Footer() {
  return (
    <Foot>
      <span>
        &copy: React Web Site Transition animation
      </span>
      <div className="footer__social__icons">
        <BsFacebook />
        <BsYoutube />
      </div>
    </Foot>
  )
}

const Foot = styled.footer`
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

