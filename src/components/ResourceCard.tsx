import React, { useState, useEffect } from 'react';
import { ResourceCardName } from "../entities";

function ResearchCard(props: ResourceCardName) {
  const baseUrlImage = "../assets/images/resources/";
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`${baseUrlImage}${ props.imageInfo.imageUrl }`);
      setImagePath(image.default);
    };

    loadImage();
  }, [props.imageInfo.imageUrl]);

  return(
    <div className="resource-card">
      <div>
        <img src={ imagePath } alt={ props.imageInfo.alt } width={ 420 } height={ 320 }/>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <p>
          { props.description }
        </p>
      </div>
    </div>
  )
}

export default ResearchCard;