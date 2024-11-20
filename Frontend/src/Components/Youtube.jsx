import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = 'AIzaSyBbMXdhrt32BtfyS0QJaKSqUQv6elXhe7w';
      const CHANNEL_ID = 'UCGSoD5uYXrDfZG7FdZ8_lDg';
      const maxResults = 6;

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        console.log('API Response:', response.data); 

        if (response.data.items.length === 0) {
          setError('No videos found for this channel.');
        } else {
          setVideos(response.data.items);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to fetch youtube video');
      }
    };

    fetchVideos();
  }, []); 

  return (
    <div className='container mt-4 mb-3'>
      {error && <p>{error}</p>}
      <div className='row gap gap-y-3 Youtube'>
        {videos.map((video) => (
          <div className="col-md-4" key={video.id.videoId || video.id}>
            {/* <h3>{video.snippet.title}</h3> */}
            <div className='' >
              <div className="card-body">
              <iframe
              width="400"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId || video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;