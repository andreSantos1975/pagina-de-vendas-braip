import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      {visible && (
        <a href="#home">
          <FaChevronUp />
        </a>
      )}
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;

  a {
    display: none;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: 0.4s ease-in-out;

    svg {
      color: #fff;
      font-size: 1.4rem;
    }
  }
`;
