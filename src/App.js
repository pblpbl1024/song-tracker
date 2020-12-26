import React, {useState} from "react";
import Artist from "./Artist";
import Search from "./Search";
import Info from "./Info";
import {Container, Row, Col} from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

function App() {
    //put all global variables here since parent <-> child is possible
    //but child <-> child isn't (directly) possible
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [audioUrl, setAudioUrl] = useState("");
    const [song, setSong] = useState("");
    const [paused, setPaused] = useState(true);
    const [volume, setVolume] = useState(50);
    const [notFound, setNotFound] = useState(false);

    function getArtistName() {
        return artist === null ? "" : artist.name;
    }

    function updateVolume(vol) {
        setVolume(vol);
        let audio = document.getElementById(audioUrl);
        if(audio !== null) audio.volume = vol/100;
    }

    function updateAudio(previewUrl, song) {
        let audio = document.getElementById(audioUrl);
        if (audioUrl === previewUrl) {
            if (audio !== null) {
                if (audio.paused) audio.play(); else audio.pause();
                setPaused(audio.paused);
                console.log(audio.volume);
            }
        } else {
            if (audio !== null && !audio.paused) {
                audio.pause();
                setPaused(true);
            }
            let newAudio = document.getElementById(previewUrl);
            if (newAudio !== null) {
                newAudio.currentTime = 0; newAudio.volume = volume/100;
                newAudio.play();
                setPaused(false);
            }
        }
        setAudioUrl(previewUrl);
        setSong(song);
    }

    return (
        <div>
            <Info/>
            <h1>Song Tracker</h1>
            <Search setArtist={setArtist} setTracks={setTracks}
                    updateAudio={updateAudio} getArtistName={getArtistName} setNotFound={setNotFound}/>
            <p>Volume</p>
            <Container>
                <Row>
                    <Col xs={{span: 4, offset: 4}}>
                        <RangeSlider variant={"dark"} value={volume} onChange={e => updateVolume(e.target.value)}/>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Artist artist={artist} tracks={tracks} notFound={notFound}
                    updateAudio={updateAudio} setAudioUrl={setAudioUrl}/>
            <div className={(audioUrl !== "") ? "footer-active" : "footer"}>
                <p>{audioUrl !== "" ? (paused ? getArtistName() + " - " + song + " (Paused)" :
                    getArtistName() + " - " + song + " (Playing)") : "Not playing"}</p>
            </div>
        </div>
    );
}

export default App;
