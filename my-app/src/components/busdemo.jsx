import './busproject.css';

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import mainTimes from './Images/RoutesMapOneTransit.png'
import subRoutes from './Images/SubRoutesTransit.png'


import uproutes from './Files/UP/routes.txt';
import uptrips from './Files/UP/trips.txt';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function UPDirections() {
  
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
  var buttonitem = "";
  fetch(uptrips)
    .then((response) => response.text())
    .then((textContent) => {
      var char = '\n';
      var theText = ""
      var j = 0;
      var i = j = 0;

      const uptrips = [];
      const headsigns = [];
      



      while ((j = textContent.indexOf(char, i)) !== -1) {
        if(i != 0){
          theText = textContent.substring(i)
          const [route_id,service_id,trip_id,trip_headsign,direction_id,block_id,shape_id,wheelchair_accessible,bikes_allowed] = theText.split(',')
          buttonitem = <Button variant="secondary">{trip_headsign}</Button>;

          if(!headsigns.includes(trip_headsign)){
            headsigns.push(trip_headsign);
            uptrips.push(buttonitem)

          }

        }
        i = j + 1;
      }

      var accordion = React.createElement(ButtonGroup, {}, uptrips);

      setText(accordion);
    });
  }, []);
  return text || "Loading...";


  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}






    


function Busproject(){

  

    return (
        <div id="busprojectdiv">
        <div class="leftrightdiv">
            <h1>Transit Info</h1>
            <a href="/busproject" class="returntorpojects">Return to Project Information</a>
        </div>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Description:</b> This tool shows arrival times for various transit systems in the Greater Toronto Area.</ListGroup.Item>
            <ListGroup.Item><b>Last Updated:</b> Schedule Data was last updated on Jan 7th, 2023. Real-time location and alerts are updated regularly.</ListGroup.Item>
        </ListGroup>

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

        <h2>Transit Systems</h2>
        <p>Select a transit system.</p>

        <Accordion>

            <Accordion.Item eventKey="0">
            <Accordion.Header>GO Transit</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li>Last Updated: N/A</li>
                <li>Data used in this product or service is provided with the permission of Metrolinx. Metrolinx makes no representations or warranties of any kind, express or implied, with respect to the Data and assumes no responsibility for the accuracy or currency of the data used in this product or service.</li>
                
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>UP Express</Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Last Updated: N/A</li>
              <li>Data used in this product or service is provided with the permission of Metrolinx. Metrolinx makes no representations or warranties of any kind, express or implied, with respect to the Data and assumes no responsibility for the accuracy or currency of the data used in this product or service.</li>


              <UPDirections></UPDirections>
              


              
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>Durham Region Transit</Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Last Updated: N/A</li>
              <li>Contains public sector information made available under The Regional Municipality of Durham's Open Data Licence</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
            <Accordion.Header>TTC</Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Last Updated: N/A</li>
            </ul> 
            </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

      


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
        <p>Data used in this product or service is provided with the permission of Metrolinx. Metrolinx makes no representations or warranties of any kind, express or implied, with respect to the Data and assumes no responsibility for the accuracy or currency of the data used in this product or service.</p>
      


    </div>
    )
}

export default Busproject;