import React from "react";
import search from "./assets/search.png";

function Artist({artist, tracks, notFound, updateAudio, setAudioUrl}) {
    if(artist === null || tracks.length === 0)
    {
        return (
            <div>
            <img style={{margin: 10}} src={search} alt="search-icon"/>
            <p>
            {
                notFound ? "No results found." : "Artist data and top tracks will appear here."
            }
            </p>
            </div>
        );
    }
    //destructure the artist object
    const {images, name, followers} = artist;
    return (
        <div>
            <h3>{name}</h3>
            <p>{format(followers.total)} followers</p>
            {
                //check if images[0] isn't undefined before accessing it
                images[0] !== undefined ? (
                    <img src={images[0].url} className="profile" alt=""/>
                ) : (
                    <p>This artist doesn't have a profile picture.</p>
                )
            }
            <h4>Top Tracks</h4>
            <div>
            {
                //map each track to a div containing the image
                tracks.map(track => {
                    const {id, name, album, preview_url} = track;
                    return (
                        <div key={id} onClick={() => updateAudio(preview_url, name)} className="track">
                            <img src={album.images[0].url} className="trackImage" alt=""/>
                            <audio id={preview_url} onEnded={() => setAudioUrl("")}src={preview_url}/>
                            <p style={{marginTop: 0, marginBottom: 10}}>{name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function format(x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Artist;