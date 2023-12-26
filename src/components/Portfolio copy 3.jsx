import React from 'react';
import styled from 'styled-components';

import icon2 from '../asserts/icon2.ico';
import portfolio from '../asserts/portfolio.png';
import portfolio2 from '../asserts/portfolio2.png';
import portfolio3 from '../asserts/portfolio3.png';
import portfolio4 from '../asserts/portfolio4.png';
import portfolio5 from '../asserts/portfolio5.png';
import portfolio6 from '../asserts/portfolio6.png';
import portfolio7 from '../asserts/portfolio7.png';
import portfolio8 from '../asserts/portfolio8.png';
import portfolio9 from '../asserts/portfolio9.png';

export default function Portfolio() {
  return (
    <Section>
      <div className="grid">
        <div className="grid-box" style={{ background: `url(${portfolio}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio2}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio3}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio4}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio5}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio6}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio7}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio8}) no-repeat right center`, backgroundSize: 'cover' }} />
        <div className="grid-box" style={{ background: `url(${portfolio9}) no-repeat right center`, backgroundSize: 'cover' }} />
      </div>
      <div className="portfolio more">
        <span>Load More</span>
        <img src={icon2} alt="Load More" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding-bottom: 2rem;
  background-color: var(--secundary-color);

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-box {
    height: 15rem;
    width: 100%;
    cursor: pointer;
  }

  .portfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    span {
      margin-right: 1rem;
      color: #fff;
    }

    img {
      width: 20px;
      height: auto;
    }
  }
`;
