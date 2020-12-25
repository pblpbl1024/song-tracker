import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/";

//note: setArtist and setTracks were passed in from App so that Search can call those functions
function Search({setArtist, setTracks}) {
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);

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
        let actualQuery = query.replace(/[^\w\s-.~]/g, "").trim();
        console.log("Query:", actualQuery);
        if (!actualQuery) return;

        setSearching(true);
        fetch(`${API_ADDRESS}/artist/${actualQuery}`)
            .then(response => response.json())
            .then(json => {
                setSearching(false);
                if (json.artists.total > 0) {
                    //get the top artist from the artists object returned from the fetch
                    //artist is an object with many properties
                    const artist = json.artists.items[0];
                    console.log(artist);
                    setArtist(artist);
                    //get their top tracks (it wasn't in the artist object already)
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => {
                            const tracks = json.tracks;
                            console.log(tracks);
                            setTracks(tracks);
                        })
                        .catch(error => alert(error.message));
                }
            }).catch(error => alert(error.message));
    }

    return (
        <div>
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
        </div>
    )
}

export default Search;