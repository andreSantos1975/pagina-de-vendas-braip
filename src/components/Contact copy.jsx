import React from 'react';
import styled from 'styled-components';
import Title from './Title';

export default function Contact() {
  return (
    <Section id='contact' >
      <Title value='contact'/>
      <div className="contact">
        <div className="contact__title">
          <p>Stain in touch with me</p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say hi</h4>
            <p>If you have any questions simply use the following details</p>
            <p>Business out to theik thers presence to never level If you have any questions simply use the following details</p>
          </div>
          <p>
            <strong>Address:</strong> 33 Flyover Road
          </p>
          <p>
            <strong>Email:</strong> Cannabis@gmail.com
          </p>
          <p>
            <strong>Website:</strong> www.website.com
          </p>
            <div className="contact__data__form">
              <input type='text' placeholder='name' />
              <input type='email' placeholder='email' />
              <textarea placeholder='message'></textarea>
              <button>Send Message</button>
            </div>
        </div>
      </div>
    </Section >
  )
}

const Section = styled.section`
   min-height: 100vh;
   .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        letter-spancing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color:  var(--secundary-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spancing: 0.1rem;
          text-align: justify;
          margin-top: 20px;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
    }
   }
`;
