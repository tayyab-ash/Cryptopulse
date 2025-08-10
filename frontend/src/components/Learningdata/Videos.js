import React from 'react';
import'./Videos.css'

export default function Videos(props) {
  const urls = [
    'https://www.youtube.com/embed/YJyXfjbBmc8',
    'https://www.youtube.com/embed/JZk6T1TmIrs?si=RiyRr9RvpjvelxWW',
    'https://www.youtube.com/embed/cUBM8PpIbPk',
    'https://www.youtube.com/embed/pa1vgM6eUxU',
    'https://www.youtube.com/embed/DGkEqvkxMBU',
    'https://www.youtube.com/embed/DI9qqhcVEeo',
    'https://www.youtube.com/embed/SVLWWNgYNM0',
  ];

  return (
    <div className='video-div'>
      {urls.map((url, index) => (
        <div key={index} className="video-responsive">
          <iframe
            width="600"
            height="315"
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Embedded YouTube Video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
}
