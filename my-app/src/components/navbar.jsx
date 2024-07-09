
import Navbarr from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

import gitHubLogo from './Images/GitHub-Mark-Light-32px.png'
import linkedInLogo from './Images/In-White-34.png'

function Navbar(){
    return (
      <div id="topNavBar">
        <Navbarr variant="dark" className ="color-nav">
        <Container>
        <Nav className="me-auto">
          <Nav.Link className="Nav_link" href="/">About Me</Nav.Link>
          <Nav.Link className="Nav_link" href="/projects">Projects</Nav.Link>
          <Nav.Link className="Nav_link" href="/contact">Contact</Nav.Link> 
        </Nav>
        <Nav.Link className="Nav_link" href="https://github.com/adadamc" target="_blank"><img src={gitHubLogo}></img></Nav.Link>
        <Nav.Link className="Nav_link" href="https://www.linkedin.com/in/adam-d-adamczyk/" target="_blank"><img src={linkedInLogo}></img></Nav.Link>
        </Container>
      </Navbarr>
    </div>
    )
}

export default Navbar;