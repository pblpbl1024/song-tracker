import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function Info(props) {
    const [show, setShow] = useState(true);
    return (
        <Modal show={show} onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Song Tracker</h4>
                <hr/>
                <p>This app uses Spotify's web API to get the top tracks of artists by searching for them.</p>
                <p>After searching for an artist, click on the track to the listen to a 30-second preview.</p>
            </Modal.Body>
                <Button onClick={() => setShow(false)}>Close</Button>
        </Modal>
    );
}

export default Info;