import './cancompute.css';

import ListGroup from 'react-bootstrap/ListGroup';

/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
*/

function Cancompute(){
    return (
        <div id="cancomputediv">
        <div class="leftrightdiv">
            <h1>CANCompute</h1>
            <a href="/projects" class="returntorpojects">Return to Projects</a>
        </div>

        <ListGroup variant="flush">
            <ListGroup.Item><b>Category:</b> Data</ListGroup.Item>
            <ListGroup.Item><b>Language:</b> Python</ListGroup.Item>
            <ListGroup.Item><b>Link:</b> <a href="https://github.com/adadamc/CANCompute" target="_blank">GitHub (Improved Version)</a></ListGroup.Item>
            <ListGroup.Item><b>Notes:</b> Originally made for a hackathon (CANDEV), more details below</ListGroup.Item>
        </ListGroup>

        <h2>About</h2>
        <p>CANCompute is a program developed as part of Statistics Canada's <a href="https://candev.statcan.gc.ca/" target="_blank">CANDEV</a> Data Challenge. The user can upload
        financial documents in the form of PDFs and the program will do the following:</p>

        <ol>
            <li>Using <a href="https://ocrmypdf.readthedocs.io/en/latest/#" target="_blank">OCRmyPDF</a> the PDF files selected by the user are updated to include optical character recognition (OCR) which makes the text on the file machine-readable and also enables tools such as copy and paste.</li>
            <li>Using <a href="https://pymupdf.readthedocs.io/en/latest/index.html#" target="_blank">PyMuPDF</a>, CANCompute goes through the text contained within the document to determine which pages are likely
            to contain financial tables and creates a shortened PDF with only those relevant pages.</li>
            <li>Going through the financial tables, CANCompute tries to make a useful JSON file which can be utilized by other programs to display meaningful information.</li>
        </ol> 

        <h2>The Challenge</h2> 
        <p>CANDEV was a 48 hour challenge where University students are given a data-related task and must come up with their solution (from idea to working program) within the time frame.
            In my case, this was my first time doing a major data project, and it was also the first time my group members have ever had to extract data from a difficult to work with format (PDF) and turn it
            into useable data (json). Everyone's experience prior had been to work with easily accessible data in a json or csv format. During the event we managed to make a program (with UI) that allowed
            a user to upload PDF file(s) and make them machine readable (with OCR) and shorten them to only include pages with the financial documents we wanted. You can view the project in this state at this <a href="https://github.com/adadamc/Data-With-Destiny-CANDEV-project" target="_blank">GitHub</a> link.
        </p>

        <h2>Updates Since the Challenge</h2> 
        <p>I have updated CANCompute to now create a json file with useful information from the financial tables found in the shortened PDFs so that other developers can create programs
           based on financial statements without having to manually move data over to another format. This part of the program will continue to be improved. You can view developments at this  <a href="https://github.com/adadamc/Data-With-Destiny-CANDEV-project" target="_blank">GitHub</a> link.
        </p>

        <h2>How to Run</h2> 
        <ol>
            <li>Run the main.py file found in CANCompute/main/main.py , for example running the command <code>python3 main.py</code></li>
            <li>From the simple file selection screen, select <code>Select Files</code> to select individual files or <code>Select Folder</code> to select all files within a specific folder.</li>
            <li>The files will now go through the previously mentioned process, check the folder the file is contained within after for the shorter PDF and json files.</li>
        </ol> 

        <h2>Future Updates</h2> 
        <ul>
            <li>Add additional settings to let the user better specify how they want the data outputted.</li>
            <li>Make it so the short PDFs and json files are placed in an output folder instead.</li>
            <li>Improve the .json to be more reliable.</li>
        </ul> 

        <h2>Group Members</h2> 
        <ul>
            <li>Jecy Yu</li>
            <li>Adam Adamczyk</li>
            <li>Maryam Alipasandi</li>
            <li>Andrew Chun</li>
        </ul> 
    </div>
    )
}

export default Cancompute;