import React, {useState} from "react";
import Artist from "./Artist.js";
import {Form, Button} from "react-bootstrap";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/";

function App() {
    let [query, setQuery] = useState("");
    let [artist, setArtist] = useState(null);
    let [tracks, setTracks] = useState([]);
    let [searching, setSearching] = useState(false);

    function keyDown(e) {
        if(e.key === "Enter")
        {
            e.preventDefault();
            search();
        }
    }

    function search() {
        //note: setQuery is asynchronous and doesn't immediately update query
        //whereas assignment statements are instant
        query = query.replace(/[^\w\s-.~]/g, "").trim();
        console.log("Query:", query);
        if(!query) return;

        setSearching(true);
        fetch(`${API_ADDRESS}/artist/${query}`)
            .then(response => response.json())
            .then(json => {
                setSearching(false);
                if(json.artists.total > 0)
                {
                    //get the top artist from the artists object returned from the fetch
                    //artist is an object with many properties
                    const artist = json.artists.items[0];
                    setArtist(artist);
                    console.log(artist);
                    //get their top tracks (it wasn't in the artist object already)
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => {
                            console.log(json.tracks);
                            setTracks(json.tracks);
                        })
                        .catch(error => alert(error.message));
                }
                else
                {
                    setArtist(null); setTracks([]);
                }
            }).catch(error => alert(error.message));
    }

    return (
        <div>
            <h1 style={{marginBottom: 10}}>Song Tracker</h1>
                <Form inline>
                    <Form.Control
                        placeholder="Search for an artist..."
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={e => keyDown(e)} />
                    <Button
                        variant="success"
                        onClick={search}
                        disabled={searching}>
                        {searching ? "Searching..." : "Search"} </Button>
                </Form>
            <hr/>
            <Artist artist={artist} tracks={tracks}/>
        </div>
    );
}

export default App;
