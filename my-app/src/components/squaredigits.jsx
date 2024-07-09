import './minecleaner.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

import squareGamesError from './Images/squaresgameError.png'
import squareGamesNormal from './Images/squaresgameNormal.png'
import squareGamesPossible from './Images/squaresgamePossible.png'
import squareGamesWinner from './Images/squaresgameWin.png'

/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
*/


    


function Squaredigits(){
    return (
        <div id="minecleanerdiv">
        <div class="leftrightdiv">
            <h1>Square Digits</h1>
            <a href="/projects" class="returntorpojects">Return to Projects</a>
        </div>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Category:</b> Game</ListGroup.Item>
            <ListGroup.Item><b>Language:</b> Web Project</ListGroup.Item>
            <ListGroup.Item><b>Link:</b> <ul><li> <a href="https://github.com/adadamc/squaredigits" target="_blank">GitHub</a></li> </ul></ListGroup.Item>
            <ListGroup.Item><b>Notes:</b> The game can be played online, follow the <code>Play Game</code> link.</ListGroup.Item>
        </ListGroup>

        <h2>About</h2>
        <p>Given a grid of 81 tiles, you must fill each one with a digit from 1-9 but you can only have 1 of each digit in each row, column, and 3x3 grid.</p>
        <h2>Updates</h2>
        <p>The first version of this project was released on Feb 27th, 2022 and was made in a day over the span of a few hours. More updates will be added in the future.</p>
        
        <Accordion>

            <Accordion.Item eventKey="0">
            <Accordion.Header>Feb 27th, 2022</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Initial release</li>
                <li>Alerts player of any mistakes (digit duplicated)</li>
                <li>Player can see all possible digits by clicking the "Possible" button</li>
                <li>3 patterns, 1 randomly selected when page is opened</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

        <h2>Gallery</h2>
        

        <Carousel>


        <Carousel.Item>
      <img
        className="d-block w-100"
        src={squareGamesNormal}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        src={squareGamesPossible}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={squareGamesError}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={squareGamesWinner}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    </Carousel>


    </div>
    )
}

export default Squaredigits;