import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import '../styles/footer.css';

import favicon from '../img/favicon.png' 

export default function Footer () {
  return (
    <>
      <Container fluid className='f-container'>
        <div className='f-footer'>
          <NavLink to='/'>
            <img className='f-favicon' src={favicon} />
          </NavLink>
          <p>© MatchMaker APP 2023 Copyright www.matchmaker.com</p>
        </div>
      </Container> 
    </>
  );
};
