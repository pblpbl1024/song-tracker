import React, {useState} from "react";

function Artist({artist, tracks}) {
    //audio object for playing previews
    const [audio, setAudio] = useState(null);
    if(!artist) return null;
    //destructure the artist object
    const {images, name, followers, genres} = artist;

    function playAudio(previewUrl) {
        if(audio && audio.src === previewUrl)
        {
            if(audio.paused) audio.play(); else audio.pause();
        }
        else
        {
            if(audio && !audio.paused) audio.pause();
            //note: this code avoids the issue of setState doing asynchronous updates to audio
            const newAudio = new Audio(previewUrl);
            setAudio(newAudio); newAudio.play();
        }
    }
    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.length > 0 ? "Genres: " + genres.join(", ") : null}</p>
            {
                //check if images[0] isn't null before accessing it
                images[0] ? (
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
                        <div key={id} onClick={() => playAudio(preview_url)} className="track">
                            <img src={album.images[0].url} className="trackImage" alt=""/>
                            <p style={{marginBottom: 10}}>{name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Artist;