import React, {useState} from "react";
import Artist from "./Artist";
import Search from "./Search";

function App() {
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);

    return (
        <div>
            <h1>Song Tracker</h1>
            <Search setArtist={setArtist} setTracks={setTracks}/>
            <hr/>
            <Artist artist={artist} tracks={tracks}/>
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    );
}

export default App;
