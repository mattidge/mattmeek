import React from 'react';
import './ClickableImage.css';

function ClickableImage(props) {
  return (
    <a href={props.url} target="_blank">
      <img src={props.image} className="image" alt="Clickable Image" />
    </a>
  );
}

export default ClickableImage;
