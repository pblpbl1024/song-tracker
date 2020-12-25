import React from "react";

function Artist({artist, tracks, updateAudio, setAudioUrl}) {
    if(artist === null || tracks.length === 0) return null;
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