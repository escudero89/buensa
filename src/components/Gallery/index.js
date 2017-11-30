import React from 'react';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends React.Component {

  render() {

    const images = [
      {
        original: 'https://placeimg.com/900/300/animals/sepia',
        description: 'Buen Samaritano'
      },
      {
        original: 'https://placeimg.com/900/300/nature/sepia',
        description: 'En el hospital'
      },
      {
        original: 'https://placeimg.com/900/300/people/sepia',
        description: 'En la naturaleza'
      }
    ]

    return (
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        />
    );
  }

}

export default Gallery;