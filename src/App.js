import React, {useState} from "react";
import Artist from "./Artist";
import Search from "./Search";
import Info from "./Info";

function App() {
    //put all global variables here since parent <-> child is possible
    //but child <-> child isn't possible
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [audioUrl, setAudioUrl] = useState("");
    const [song, setSong] = useState("");
    const [paused, setPaused] = useState(true);

    function getArtistName() {
        return artist === null ? "" : artist.name;
    }

    function updateAudio(previewUrl, song) {
        let audio = document.getElementById(audioUrl);
        if (audioUrl === previewUrl) {
            if (audio !== null) {
                if (audio.paused) audio.play(); else audio.pause();
                setPaused(audio.paused);
            }
        } else {
            if (audio !== null && !audio.paused) {
                audio.pause();
                setPaused(true);
            }
            let newAudio = document.getElementById(previewUrl);
            if (newAudio !== null) {
                newAudio.currentTime = 0;
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
            <Search artist={artist} setArtist={setArtist} setTracks={setTracks}
                    updateAudio={updateAudio} getArtistName={getArtistName}/>
            <hr/>
            <Artist artist={artist} tracks={tracks} updateAudio={updateAudio} setAudioUrl={setAudioUrl}/>
            <div className={(audioUrl !== "") ? "footer-active" : "footer"}>
                <p>{audioUrl !== "" ? (paused ? getArtistName() + " - " + song + " (Paused)" :
                    getArtistName() + " - " + song + " (Playing)") : "Not playing"}</p>
            </div>
        </div>
    );
}

export default App;
