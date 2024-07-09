import './minecleaner.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

import mineCleanerInGame from './Images/MineCleanerMainGame.png'
import mineCleanerSizeSelect from './Images/MineCleanerSizeSelect.png'

/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
*/


    


function Minecleaner(){
    return (
        <div id="minecleanerdiv">
        <div class="leftrightdiv">
            <h1>Mine Cleaner</h1>
            <a href="/projects" class="returntorpojects">Return to Projects</a>
        </div>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Category:</b> Game</ListGroup.Item>
            <ListGroup.Item><b>Language:</b> Java</ListGroup.Item>
            <ListGroup.Item><b>Link:</b> <a href="https://github.com/adadamc/mine-cleaner" target="_blank">GitHub</a></ListGroup.Item>
            <ListGroup.Item><b>Notes:</b> Full instructions within GitHub README.md</ListGroup.Item>
        </ListGroup>

        <h2>About</h2>
        <p>Your objective in Mine Cleaner is to locate all the bombs without hitting them. Upon selecting a tile that is not a bomb you will be able to see how many bombs are touching (including diagonally) that tile from 0 to 8. You can use this information to help determine good guesses for where to click next. Use the flag tool to mark where bombs are, this will also prevent you from clicking these tiles accidentally which would cause the game to end. To win make sure you flag all bombs and click on all tiles that are not bombs.</p>
        <h2>Updates</h2>
        <p>This project was started in 2019 as an open-ended school project and was programmed in around one month. After this time, the project was updated to fix minor bugs, improve the user experience, and clean the code.</p>
        
        <Accordion>

            <Accordion.Item eventKey="0">
            <Accordion.Header>2022 Version</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Spots marked with 0 (no bombs touching) will now be automatically removed when discovered</li>
                <li>Upon losing the game, a detailed overview of what was correctly and incorrectly guessed is now shown</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>2019 Version</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Initial Release</li>
                <li>This version is not on GitHub</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

        <h2>Additional Instructions</h2>
        <p>More info on how to run the program can be found at the GitHub link in the README.md file.</p>
        <h2>Gallery</h2>
        

        <Carousel>


        <Carousel.Item>
      <img
        className="d-block w-100"
        src={mineCleanerInGame}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        src={mineCleanerSizeSelect}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    </Carousel>


    </div>
    )
}

export default Minecleaner;