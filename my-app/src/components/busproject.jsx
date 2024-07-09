import './busproject.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

import mainTimes from './Images/RoutesMapOneTransit.png'
import subRoutes from './Images/SubRoutesTransit.png'


    


function Busproject(){


    return (
        <div id="busprojectdiv">
        <div class="leftrightdiv">
            <h1>DRT Transit Info</h1>
            <a href="/projects" class="returntorpojects">Return to Projects</a>
        </div>

        <Alert variant="danger">
      <Alert.Heading>Project no longer kept up to date</Alert.Heading>
      <p>
        This project is no longer prioritized, and the data on it is not up to date.
      </p>
    </Alert>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Category:</b> Data / Utility</ListGroup.Item>
            <ListGroup.Item><b>Language:</b> Web Project (JavaScript)</ListGroup.Item>
            <ListGroup.Item><b>Links:</b> <a href="https://github.com/adadamc/transitinfo" target="_blank">GitHub</a></ListGroup.Item>
            <ListGroup.Item><b>Notes:</b> You can view the code on GitHub or try out a live demo on my legacy website (linked below).</ListGroup.Item>
        </ListGroup>

        <h2>About</h2>
        <p>This project uses data from Durham Region Transit (DRT) to dynamically load in bus routes, sub-routes(a,b,c), all stops located within a sub-route and their stop times. If any changes occur to the DRT service, this website can be updated simply by uploading the new data via txt files (that are in a csv format).</p>

        <h2>Gallery</h2>
        

        <Carousel>


          <Carousel.Item>
            <img
            className="d-block w-100"
            src={mainTimes}
            alt="Image shows routes 411 (runs on weekends), 420 (temporary suspension), and route 502 (with stop info being shown)."
          />
            <Carousel.Caption>
              You can view information regarding each stop of a route including accessibility, stop times, other routes servicing the stop, and more.
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100"
            src={subRoutes}
            alt="Image shows routes 900,901,902,905,915,916, and 917. The focus is on 901's branch routes (B - Oshawa Centre Terminal)."
          />
            <Carousel.Caption>
              You can see all the branches/sub-routes of Route 901 in this picture, the origin stop is also displayed without having to open each one.
            </Carousel.Caption>
          </Carousel.Item>



        </Carousel>

        <br></br>
        <h2>Legend</h2>
        <ListGroup variant="flush">
            <ListGroup.Item><h5><Badge bg="danger">Temporary Suspension</Badge></h5> Route is temporarily suspended</ListGroup.Item>
            <ListGroup.Item><h5><Badge bg="success">Accessible</Badge></h5> Wheelchair accessible bus stop</ListGroup.Item>
            <ListGroup.Item><h5><Badge bg="primary">Blue Night</Badge></h5> Service operates overnight</ListGroup.Item>
            <ListGroup.Item><h5><Badge bg="secondary">Weekends</Badge></h5> Service operates on weekends</ListGroup.Item>
            <ListGroup.Item><h5><Badge bg="warning" text="dark">PULSE</Badge></h5> Bus Rapid Transit</ListGroup.Item>
            <ListGroup.Item><h5><Badge bg="light" text="dark">600</Badge></h5> Stop also serves route #</ListGroup.Item>
        </ListGroup>
        <br></br>


        <h2>Updates</h2>
        
        <Accordion>

            <Accordion.Item eventKey="0">
            <Accordion.Header>April 4, 2022 (V1.3)</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Small update to support new day values in data</li>
                <li>Routes are now sorted by route number</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>March 16, 2022 (V 1.2)</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Now shows the days and times each sub-route runs</li>
                <li>Stops now show all other routes served by that stop</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>March 14, 2022 (V 1.1)</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>See the March 13, 2022 (V 1.0) update log for extra details, the following describes updates since that version</li>
                <li>Fixed a bug that duplicated some sub-routes</li>
                <li>Made it so that sub-routes with the same name but different stops show up</li>
                <li>To help easily differentiate sub-routes with the same name, they now also show the first stop underneath</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
            <Accordion.Header>March 13, 2022 (V 1.0)</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Currently all code is client sided using JavaScript.</li>
                <li>The routes section (and all the data contained with each route) will automatically update upon new files being uploaded.</li>
                <li>Current information available: Routes, Route Description (Suspended, Blue Night, PULSE, Weekends), Sub-routes (a,b,c), all the stops contained in a sub-route and if they are wheel chair accessible and the duration between the first stop and that stop.</li>
                <li>As of now all routes operate on weekdays (excluding suspended ones), in the event a new route is added that does not run on weekdays, a message will appear informing the user.</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>
        <br></br>
        <h2>Credits and Data Info</h2>
        <p>Contains public sector information made available under The Regional Municipality of Durham's Open Data Licence</p>
        <p>Data was downloaded from the "GTFS Static Schedule" dataset</p>
      


    </div>
    )
}

export default Busproject;