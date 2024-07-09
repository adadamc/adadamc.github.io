import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './about.css';

function PopUpWeb() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Web Application Development (CSCI 3230U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Front-end development:</p>
          <ul>
            <li>HTML</li>
            <li>CSS (and CSS frameworks)</li>
            <li>JavaScript (and JS libraries)</li>
            <li>Client-side frameworks (Vue.js)</li>
            <li>Asynchronous requests and web services</li>
          </ul>
          <p>Back-end development:</p>
          <ul>
            <li>Server-side frameworks (Node.js)</li>
            <li>Database access (MongoDB/Mongoose, SQLite/sqlite3)</li>
            <li>Socket.io</li>
          </ul>
          <p>Web application security</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function PopUpSystems() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Systems Programming (CSCI 3310U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Operating Systems:</p>
          <ul>
            <li>Processes and threads</li>
            <li>Memory managment</li>
            <li>File systems</li>
            <li>Input/Output</li>
            <li>Virtualization</li>
            <li>Security</li>
          </ul>
          <p>Networking:</p>
          <ul>
            <li>Network reference models</li>
            <li>Physical layer</li>
            <li>Data link layer</li>
            <li>Medium access control</li>
            <li>Network layer</li>
            <li>Transport layer</li>
            <li>Application layer</li>
            <li>Network Security</li>
          </ul>
          <p>Systems Programming:</p>
          <ul>
            <li>System calls</li>
            <li>Models of parallel programming</li>
            <li>Pthreads</li>
            <li>Sockets</li>
            <li>Robust Programming</li>
            <li>Security</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function PopUpShowOtherCourses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="allOtherButton" onClick={handleShow}>
        View All Other Courses
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>List of non-programming courses taken</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>All other courses: </b></p>
          <ul>
            <li>Calculus I (MATH 1010U)</li>
            <li>Physics I (PHY 1010U)</li>
            <li>Technical Communications (COMM 1050U)</li>
            <li>Calculus II (MATH 1020U)</li>
            <li>Physics II (PHY 1020U)</li>
            <li>Management of the Enterprise (BUSI 1600U)</li>
            <li>Discrete Mathematics for Computer Scientists (CSCI 2110U)</li>
            <li>Statistics and Probability for Physical Science (STAT 2010U)</li>
            <li>Astronomy I (PHY 2900U)</li>
            <li>Software Design and Analysis (CSCI 2040U)</li>
            <li>Linear Algebra I (MATH 2050U)</li>
            <li>Astronomy II (PHY 3900U)</li>
            <li>Environmental Science (ENVS 1000U)</li>
            <li>Ethics, Law and Social Impact of Computing (CSCI 4040U)</li>
            <li>Introductory Sociology (SOCI 1000U)</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpAlgo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Analysis and Design of Algorithms (CSCI 3070U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <ul>
            <li>Complexity classes</li>
            <li>Complexity and run-time analysis (worst-case, expected case)</li>
            <li>Searching / sorting algorithms: comparison based and linear sorting</li>
            <li>Performance bounds</li>
            <li>Divide and conquer</li>
            <li>Recurrences</li>
            <li>Dynamic programming</li>
            <li>Greedy algorithms</li>
            <li>Optimization via Huffman code</li>
            <li>Branch and bound algorithms</li>
            <li>Spanning tree algorithms (Kruskal’s algorithm, Prim’s algorithm)</li>
            <li>Shortest path algorithms (Bellman-Ford algorithm, Dijkstra’s algorithm)</li>
            <li>Max flow algorithms (Ford-Fulkerson algorithm, Edmunds-Karp algorithm)</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function PopUpGraphics() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Computer Graphics and Visualization (CSCI 3090U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Graphics Pipeline</p>
          <p>Graphics programming with OpenGL</p>
          <p>Modeling</p>
          <p>Rendering</p>
          <p>Ray Tracing</p>
          <p>Graphics Hardware</p>
          <p>Colour</p>
          <p>Advanced OpenGL programming</p>
          <p>Graphics Application Development</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpSciData() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Scientific Data Analysis (CSCI 2000U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Unix</p>
          <p>Git</p>
          <p>Python</p>
          <p>Numpy</p>
          <p>Pandas</p>
          <p>Plots</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpDatabases() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Database System and Concepts (CSCI 3030U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Relational Data modeling</p>
          <p>ER diagrams</p>
          <p>Constraints and data normalization</p>
          <p>SQL Database programming in Java and Python</p>
          <p>Data driven Web programming Indexes and performance tuning</p>
          <p>Security and access control</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpMachineLearning() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Machine Learning, Theory and Application (CSCI 4050U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Elements of linear algebra and calculus</p>
          <p>Models for random variables and parameter estimation</p>
          <p>Perceptron and multi-layer perceptron</p>
          <p>Training, evaluation and deployment of machine learning</p>
          <p>Architectures of neural networks</p>
          <p>Applications: computer vision</p>
          <p>Applications: natural language processing</p>
          <br></br>
          <p><b>Some frameworks / libraries used</b></p>
          <p>NumPy</p>
          <p>PyTorch</p>
          <p>Matplotlib (plots, visualizations)</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpProgLang() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Programming Languages (CSCI 3055U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Foundations of computation</p>
          <p>Functional programming vs object oriented programming</p>
          <p>Concurrency</p>
          <p>Type Systems</p>
          <p>Other programming paradigms</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpAI() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Artificial Intelligence (CSCI 4610U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Introduction to AI</p>
          <p>Uninformed Search</p>
          <p>Informed Search</p>
          <p>Constraint Satisfaction Problems</p>
          <p>Adversarial Search</p>
          <p>Markov Decision Processes</p>
          <p>Reinforcement Learning</p>
          <p>Bayesian Networks</p>
          <p>Applications</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function PopUpInfoVis() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Information Visualization (CSCI 4210U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Theory of data visualization</p>
          <p>Grammar of graphics</p>
          <p>Timeseries theory</p>
          <p>Representation of proportional data</p>
          <p>Aesthetics</p>
          <p>Statistical relationships</p>
          <p>Geographic maps</p>
          <p>Interactive visualisations with Shiny</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpSoftwareSecurity() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Software Security (CSCI 3540U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Linux and tools background</p>
          <p>Enumerating and fingerprinting services</p>
          <p>Fingerprinting operating systems</p>
          <p>Web protocols</p>
          <p>Finding hidden files and directories hosted on a web server</p>
          <p>Intercepting and manipulating web traffic</p>
          <p>Exploiting and patching file attacks</p>
          <p>Exploiting and patching authorization attacks</p>
          <p>Exploiting and patching access control attacks</p>
          <p>Exploiting and patching injection attacks</p>
          <p>Exploiting and patching request forwarding attacks</p>
          <p>Reverse engineering a binary application</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function PopUpBigData() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Big Data Analytics (CSCI 4030U)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><b>Course Topics: </b></p>
          <p>Introduction to Data Mining</p>
          <p>Frequent Pattern Mining</p>
          <p>Finding Similar Items</p>
          <p>Large-Scale Machine Learning</p>
          <p>Dimensionality Reduction</p>
          <p>Link Analysis</p>
          <p>Mining Data Streams</p>
          <p>Recommendation Systems</p>
          <p>Distributed Computing</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopQATestingTH() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Quality Assurance Testing (Web)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Applications Used</h5>
          <ul>
            <li>PL/SQL</li>
            <li>ALM / Quality Center</li>
            <li>Jira</li>
            <li>Browserstack</li>
            <li>Screen Reader</li>
          </ul>

          <h5>Testing Experience</h5>
          <ul>
            <li>Ensured high product quality on various projects, across multiple devices (desktop web, mobile web, mobile app)</li>
            <li>Documented various bugs with detailed information on Jira and ALM, and assisted with testing fixes</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopOffboardingTH() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offboarding Automation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h5>Experience With</h5>
          <ul>
            <li>Excel VBA</li>
            <li>Windows Powershell</li>
            <li>Active Directory (AD)</li>
          </ul>

          <h5>Achievements</h5>
          <ul>
            <li>Designed an Excel macro utilizing VBA and Windows Powershell via Active Directory to reduce the time needed to offboard users from our applications by over 5x</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function PopUpTicketsTH() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="moreInfo1" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ticket and Queue Management</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h5>Applications Used</h5>
          <ul>
            <li>BMC Remedy Ticketing System / ITSM</li>
          </ul>

          <h5>Experience</h5>
          <ul>
            <li>Assisted internal customers with issues they have raised</li>
            <li>Collaborated with team to ensure tickets are completed within Service Level Targets (SLTs)</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function About(){
    return (
      <div id="aboutDiv">
        <h1>Adam Adamczyk</h1>
        <p>I'm a fourth year computer science student with an interest in programming covering a wide range of languages and disciplines.</p>
        <h4>Experience with:</h4>
        <ul>
          <li><b>Java</b></li>
          <li><b>Python</b></li>
          <li><b>C</b></li>
          <li><b>C++</b></li>
          <li><b>Lua</b></li>
          <li><b>Web Development</b>: HTML, CSS, JavaScript, Node.js, React, Vue, Bootstrap</li>
          <li><b>VBA and Excel Macros</b></li>
          <li><b>Unix and Powershell</b></li>
          <li><b>SQL and PL/SQL</b></li>
        </ul>
        <h4>More about me:</h4>
        <p>Ever since I was 10 years old, I have been experimenting with programming. I started by taking open source programs and editing them to work for my use cases.</p>
        <p>In my high school computer science class, I started learning Java and creating projects containing UI, File I/O, and randomized elements. In addition I taught myself threads to improve my projects. At the same time I also learned JavaScript and developed some small projects to communicate with websites using their APIs.</p>
        <p>In university, I learned Python and developed programs to find the time complexity of codes, use regular expressions to descern if text follows a pattern or not, and develop simple games the user can interact with by inputting text into a terminal.</p>
        <p>Simultaneously, I also learned C++ in University including using pointers, threads, and comparing the complexity of different data structures.</p>
        <p>Later on in university, I also learned web development through the use of HTML/CSS and frameworks such as Bootstrap. Using this experience I have been able to program websites, and web-based games and tools. One of the projects I made using web development knowledge that I learned, both by myself and in-class, is this website, which has since been improved and re-created using React, compared to the <a id="oldLink" target="_blank" href="https://www.old.adadamc.ca">original</a> which only used HTML, CSS, and JavaScript.</p>

        <h4>Work experience:</h4>

        <ul>
          <li><b>Durham Region Transit - Summer Student </b>(April 2024 - August 2024) <Badge bg="danger" text="light">Summer Student</Badge></li>
          <ul>
            <li>Report / Dashboard Creation <Badge bg="success">Power BI</Badge></li>
            <li>Data Preparation and Cleaning <Badge bg="success">Power Query</Badge> </li>
            <li>Form and Tracking Automation <Badge bg="success">Excel</Badge></li>
          </ul>
        </ul>

        <ul>
          <li><b>Toronto Hydro - Senior Technical Student </b>(12 Month Co-op: September 2022 - August 2023) <Badge bg="danger" text="light">Co-op</Badge></li>
          <ul>
            <li>Quality Assurance Testing (Web) <Badge bg="success">SQL</Badge> <PopQATestingTH /></li>
            <li>Employee Offboarding Automation <Badge bg="success">VBA</Badge> <PopOffboardingTH /></li>
            <li>Ticket (Incident, Service Request, Work order) and Queue Management <PopUpTicketsTH /></li>
          </ul>
        </ul>

        <h4>Designations / Awards:</h4>
        <ul>
          <li><b>President's List Designation </b>(Winter 2024)</li>
          <ul>
            <li>Achieved a semester GPA of 4.15/4.3</li>
          </ul>

          <li><b>Co-op Designation </b>(September 2022 - August 2023)</li>
          <ul>
            <li>Completed the required 12 months of co-op work terms for the co-op designation</li>
          </ul>
        </ul>

        <h4>Courses taken:</h4>

        <Tabs
          defaultActiveKey="general"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="general" title="General Coding">
            <p>Computer Science courses that involve coding but do not fall into another category</p>
            <ul>
              <li><b>Intro to Computer Science</b> (CSCI 1030U) <Badge bg="success">Python</Badge> </li>
              <li><b>Programming Workshops I</b> (CSCI 1060U) <Badge bg="success">C++</Badge></li>
              <li><b>Programming Workshop II</b> (CSCI 1061U) <Badge bg="success">C++</Badge></li>
              <li><b>Software Systems Development and Integration</b> (CSCI 2020U) <Badge bg="success">Java</Badge></li>
              <li><b>Analysis and Design of Algorithms</b> (CSCI 3070U) <Badge bg="success">Python</Badge> <PopUpAlgo /></li>
              <li><b>Computer Graphics and Visualization</b> (CSCI 3090U) <Badge bg="success">C++</Badge> <PopUpGraphics /></li>
              <li><b>Web Application Development</b> (CSCI 3230U) <PopUpWeb /></li>
              <li><b>Systems Programming</b> (CSCI 3310U) <Badge bg="success">C / C++</Badge> <PopUpSystems /></li>
              <li><b>Programming Languages</b> (CSCI 3055U) <Badge bg="success">Clojure</Badge> <Badge bg="success">Kotlin</Badge> <PopUpProgLang /></li>
            </ul>
          </Tab>
          <Tab eventKey="data" title="Data">
            <p>Computer Science courses with a focus on data (data analytics, databases, visualization, etc.)</p>
            <ul>
              <li><b>Scientific Data Analysis</b> (CSCI 2000U) <Badge bg="success">Python</Badge> <PopUpSciData /></li>
              <li><b>Data Structures</b> (CSCI 2010U) <Badge bg="success">Java</Badge> </li>
              <li><b>Database System and Concepts</b> (CSCI 3030U) <Badge bg="success">SQL</Badge> <PopUpDatabases /></li>
              <li><b>Information Visualization</b> (CSCI 4210U) <Badge bg="success">R</Badge> <PopUpInfoVis /> </li>
              <li><b>Big Data Analytics</b> (CSCI 4030U) <Badge bg="success">Python</Badge> <PopUpBigData /> </li>
            </ul>
          </Tab>
          <Tab eventKey="ai" title="AI/ML">
            <p>Computer Science courses with a focus on machine learning and artificial intelligence</p>
            <ul>
              <li><b>Machine Learning, Theory and Application</b> (CSCI 4050U) <Badge bg="success">Python</Badge> <PopUpMachineLearning /></li>
              <li><b>Artificial Intelligence</b> (CSCI 4610U) <Badge bg="success">Python</Badge> <PopUpAI /></li>
            </ul>
          </Tab>
          <Tab eventKey="compsci" title="Misc. Comp Sci">
            <p>Computer Science courses that do not fit one of the other catagories</p>
            <ul>
              <li><b>Computer Architecture I</b> (CSCI 2050U) <Badge bg="success">Assembly</Badge></li>
              <li><b>Software Security</b> (CSCI 3540U) <PopUpSoftwareSecurity /></li>
              <li><b>Software Design and Analysis</b> (CSCI 2040U)</li>
              <li><b>Ethics, Law and Social Impact of Computing</b> (CSCI 4040U)</li>
            </ul>
          </Tab>
          <Tab eventKey="mathsci" title="Math / Science">
            <p>Courses focused on math or science that do not fit a specific category</p>
            <ul>
              <li><b>Computational Science I</b> (CSCI 2072U) <Badge bg="success">Python</Badge></li>
              <li><b>Calculus I</b> (MATH 1010U)</li>
              <li><b>Physics I</b> (PHY 1010U)</li>
              <li><b>Calculus II</b> (MATH 1020U)</li>
              <li><b>Physics II</b> (PHY 1020U)</li>
              <li><b>Discrete Mathematics for Computer Scientists</b> (CSCI 2110U)</li>
              <li><b>Statistics and Probability for Physical Science</b> (STAT 2010U)</li>
              <li><b>Linear Algebra I</b> (MATH 2050U)</li>
              <li><b>Astronomy I</b> (PHY 2900U)</li>
              <li><b>Astronomy II</b> (PHY 3900U)</li>
              <li><b>Environmental Science</b> (ENVS 1000U)</li>             
            </ul>
          </Tab>
          <Tab eventKey="others" title="Others">
            <p>All other courses that do not fit a category</p>
            <ul>
              <li><b>Technical Communications</b> (COMM 1050U)</li>
              <li><b>Management of the Enterprise</b> (BUSI 1600U)</li>
              <li><b>Introductory Sociology</b> (SOCI 1000U)</li>
            </ul>
          </Tab>
        </Tabs>


    </div>
    )
}

export default About;