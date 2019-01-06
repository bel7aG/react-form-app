import React from 'react'

const Images = ({ images }) => 
  <div className="images">
    <ul className="images-list">
      {images.map((image, index) => 
        <li  className={`image image-${index + 1}`} key={index}>
          <img src={image.urls.regular} alt={image.categories.description}/>
        </li>)}
    </ul>
  </div>

export default Images