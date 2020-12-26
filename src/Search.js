import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/";

//parent functions can be called in the child
function Search({setArtist, setTracks, updateAudio, getArtistName, setNotFound}) {
    const [searching, setSearching] = useState(false);

    function keyDown(e) {
        if(e.key === "Enter")
        {
            e.preventDefault();
            search();
        }
    }

    function search() {
        let actualQuery = document.querySelector("input").value.replace(/[^\w\s-.~]/g, "").trim();
        console.log("Query:", actualQuery);
        if (!actualQuery) return;

        setSearching(true);
        //fetch is asynchronous (code after fetch happens immediately)
        fetch(`${API_ADDRESS}/artist/${actualQuery}`)
            .then(response => response.json())
            .then(json => {
                if (json.artists.total > 0) {
                    //get the top artist from the artists object returned from the fetch
                    //artist is an object with many properties
                    const queryArtist = json.artists.items[0];
                    console.log(queryArtist);

                    //only fetch and stop sounds again if the artist is different
                    if(queryArtist.name !== getArtistName()) {
                        setArtist(queryArtist);
                        //get their top tracks (it wasn't in the artist object already)
                        fetch(`${API_ADDRESS}/artist/${queryArtist.id}/top-tracks`)
                            .then(response => response.json())
                            .then(json => {
                                setSearching(false);
                                updateAudio("", "");
                                const tracks = json.tracks;
                                console.log(tracks);
                                setTracks(tracks);
                            })
                            .catch(error => alert(error.message));
                    }
                    else setSearching(false);
                }
                else
                {
                    updateAudio("", "");
                    setSearching(false);
                    setNotFound(true);
                    setArtist(null);
                    setTracks([]);
                }
            }).catch(error => alert(error.message));
    }

    return (
        <div>
            <Form inline>
                <Form.Control id="search-bar"
                    placeholder="Search for an artist..."
                    maxLength={32}
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