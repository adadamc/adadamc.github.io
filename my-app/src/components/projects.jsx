import './projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import busLogo from './Images/DRTImage.png'
import mineCleanerLogo from './Images/MineCleaner.png'
import squareDigitsLogo from './Images/SquareDigits.png'
import dominoMinigamesLogo from './Images/DominoMinigames.png'
import canComputeLogo from './Images/CANCompute.png'

function Projects(){
    return (
      <div id="projectsDiv">
        <h1>Projects</h1>
        <p>Take a look at various projects that I have worked on.</p>
        
        <div id="cardsDiv">
            

            <Card style={{ width: '18rem', display: 'inline-block'}}>
                <Card.Img variant="top" src={mineCleanerLogo} />
                <Card.Body>
                <Card.Title>Mine Cleaner</Card.Title>
                <Badge bg="secondary">Java</Badge>
                <Card.Text id="cardText1">
                Your objective is to locate all the bombs without hitting them. This puzzle game requires you to make informed decisions based on limited hints of what is nearby.
                </Card.Text>
                <br></br>
                <Button variant="primary" href="/minecleaner">Learn More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block'}}>
                <Card.Img variant="top" src={squareDigitsLogo} />
                <Card.Body>
                <Card.Title>Square Digits</Card.Title>
                <Badge bg="secondary">Web Application</Badge>
                <Card.Text id="cardText1">
                Given a grid of 81 tiles, you must fill each one with a digit from 1-9 but you can only have 1 of each digit in each row, column, and 3x3 grid.
                </Card.Text>
                <br></br>
                <br></br>
                <Button variant="primary" href="/squaredigits">Learn More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block'}}>
                <Card.Img variant="top" src={canComputeLogo} />
                <Card.Body>
                <Card.Title>CANCompute</Card.Title>
                <Badge bg="secondary">Python</Badge>
                <Badge bg="danger" id="badge2ha">Hackathon</Badge>
                <Card.Text id="cardText1">
                Upload a PDF Financial Document and CANCompute will make the text machine-readable, filter out pages without numerical tables, and convert data to a json file.
                </Card.Text>
                <br></br>
                <Button variant="primary" href="/cancompute">Learn More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block'}}>
                <Card.Img variant="top" src={dominoMinigamesLogo} />
                <Card.Body>
                <Card.Title>Manic Minigames</Card.Title>
                <Badge bg="secondary">Lua</Badge>
                <Card.Text id="cardText1">
                Players can enjoy a variety of minigames with a wide range of genres.
                </Card.Text>
                <br></br>
                <br></br>
                <br></br>
                
                <Button variant="primary" href="/dominominigames">Learn More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block'}}>
                <Card.Img variant="top" src={busLogo} />
                <Card.Body>
                <Card.Title>DRT Transit Info</Card.Title>
                <Badge bg="secondary">Web Application</Badge>
                <Card.Text id="cardText1">
                This handy tool uses open data from Durham Region Transit to show riders all the routes, stops, departure times, and other info they need.
                </Card.Text>
                <br></br>
                <Button variant="primary" href="/busproject">Learn More</Button>
                </Card.Body>
            </Card>


        </div>

        <br></br>

        <h1>School Projects</h1>
        <p>Descriptions of some projects I have worked on in university. Due to being class assignments, the copyright belongs to the school and the code can't be shown.</p>

        <ul>
            <li>Youtube Trending Video Analysis</li> 
            <ul>
                <li><Badge bg="secondary">Python - ML</Badge> <Badge bg="danger">Group Project</Badge></li>
                <li>Utilizes Python libraries and frameworks including pandas, torch, and lightning</li>
                <li>Uses LSTM: Using a vocab, determines the likelihood of a video trending based on the title and tags</li>
            </ul>
            <li>Shell</li> 
            <ul>
                <li><Badge bg="secondary">C / C++</Badge></li>
                <li>Created a shell that can execute commands, and re-direct input and output.</li>
            </ul>
            <li>Chat Client & Server</li>
            <ul>
                <li><Badge bg="secondary">C / C++</Badge></li>
                <li>Relevant Topics: Sockets</li>
                <li>Allows a server to receive, store, and transmit a log of messages from an indefinite number of clients. Clients are able to send and receive messages.</li>
            </ul>
            <li>Packet Sniffer / Analyzer</li>
            <ul>
                <li><Badge bg="secondary">C / C++</Badge></li>
            </ul>
            <li>Email Spam Filter</li>
            <ul>
                <li><Badge bg="secondary">Java</Badge></li>
                <li>The user selects a folder full of spam emails and another full of normal emails.</li>
                <li>The application checks the frequency of words in each folder and determines the likelihood of emails being spam based on the words in them.</li>
                <li>Allows a user to adjust the sensitivity of the filter to their liking.</li>
            </ul>
            <li>File Sharer</li>
            <ul>
                <li><Badge bg="secondary">Java</Badge></li>
                <li>Relevant Topics: Sockets</li>
                <li>Allows any number of users to upload text files to a server for others to download.</li>
                <li>Allows the user to download files uploaded by other users.</li>
            </ul>
        </ul>


    </div>
    )
}

export default Projects;