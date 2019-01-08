import React from 'react'
import { Image } from '../'

let i = 1
const ImageList = ({ images }) => (
  <div className="image-list">
    <ul className="image-list-items">
      {images.map(image =>
        <Image
          className={`image-box image-box-${i++}`}
          key={image.id}
          image={image}
        />
      )}
    </ul>
  </div>
)

export default ImageList