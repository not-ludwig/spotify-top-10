import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Top10.css'

const Top10 = () => {
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${import.meta.env.VITE_PLAYLIST_ID}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            params: {
              limit: 10, 
            },
          }
        );

        const tracks = response.data.items.slice(0, 10);
        setTopTracks(tracks);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  });

  return (
    <div>
      
      <div className='cards'>
        {topTracks.map((track, index) => (
          <Card key={index} albumCover={track.track.album.images[0].url} songName={track.track.name} songArtist={track.track.artists.map((artist) => artist.name).join(', ')}></Card>
        ))}
      </div>
      
    </div>
  );
};

export default Top10;
