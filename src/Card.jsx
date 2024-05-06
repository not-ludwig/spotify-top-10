import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <>
        <div className="song-card">
            <img src={props.albumCover} alt="" className="album-cover"/>
            <div className="card-text">
                <h3 className="song-name">{props.songName}</h3>
                <h4 className="song-artist">{props.songArtist}</h4>
            </div>
        </div>
        </>
    );
}

export default Card;