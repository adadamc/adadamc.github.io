import './minecleaner.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

import lobbyDG from './Images/LobbyDG.png'
import swordfightingDG from './Images/SwordFightingDG.png'
import shopDG from './Images/ShopDG.png'

/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
*/


    


function Dominominigames(){
    return (
        <div id="minecleanerdiv">
        <div class="leftrightdiv">
            <h1>Manic Minigames</h1>
            <a href="/projects" class="returntorpojects">Return to Projects</a>
        </div>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Category:</b> Game</ListGroup.Item>
            <ListGroup.Item><b>Language:</b> Lua</ListGroup.Item>
            <ListGroup.Item><b>Link:</b> <a href="https://www.roblox.com/games/741251277/Manic-Minigames" target="_blank">Roblox (Closed Source)</a></ListGroup.Item>
            <ListGroup.Item><b>Notes:</b> At least 2 players are required.</ListGroup.Item>
        </ListGroup>

        <h2>About</h2>
        <p>Played by over 130,000 unique players, Manic Minigames contains a wide variety of minigames for users to play ranging from sword fighting free-for-alls to puzzle games.</p>

        <h2>Additional Features</h2>
        <p>Other than the core game, some features and mechanics are implemented to enhance the user experince.</p>

        <h2>Shop</h2>
        <p>The in-game shop allows players to purchase items to customize their avatar. This is a versatile shop that allows items to be added quickly through code, the UI is updated automatically based on values in an array. Individual items can have a timer that takes the item off-sale at a certain time. Additionally, items can be set to require a user to be in a specific group or have a subscription. When a user makes a purchase request, the server validates that the user meets all requirements for the item before completing the purchase.</p>

        <h2>Leaderboards</h2>
        <p>The game has multiple leaderboards visible in the lobby to recognize the top players based on specific criteria which can be limited to a specific range of time or all-time.</p>

        <h2>Updates</h2>
        <p>This game no longer receives major updates. It now mostly receives bug-fixes and item updates.</p>
        
        <Accordion>

            <Accordion.Item eventKey="0">
            <Accordion.Header>Feb 20th, 2022</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>New item in shop: 2022 Title (Price: Free) (Available until Jan 1st, 2023)</li>
                <li>Removed outdated reference to trading features in some menus</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>Dec 8th, 2020</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Premium Benefits (Exclusive items, discounts) for membership holders</li>
                <li>Temporary daily gift bonuses until Early January (XP and Gift Box)</li>
                <li>Player Lookup now has achievement badges</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>Aug 20th, 2020</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>New inventory UI</li>
                <li>Various other UI improvements</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
            <Accordion.Header>Jun 17th, 2020</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>New shop UI</li>
                <li>New features in shop include: Top Paid and Free Items each month (including a leaderboard)</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

        <h2>Gallery</h2>
        

        <Carousel>


        <Carousel.Item>
      <img
        className="d-block w-100"
        src={lobbyDG}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        src={swordfightingDG}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={shopDG}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    </Carousel>

    <h2>Other Contributors</h2>
    <p>Majority of the programming and UI work was done by me. Most of the modeling/maps was completed by Roblox user <a href="https://www.roblox.com/users/50602311/profile" target="_blank">Generabilis.</a></p>


    </div>
    )
}

export default Dominominigames;