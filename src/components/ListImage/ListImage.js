import React from 'react'
import { Image } from '../'

const ListImage = ({ images }) => {
  console.log(images)
  return (
    <div className="images">
      <ul className="images-list">
        {images.map(({ urls, id, description }) =>
          <Image src={urls.regular} key={id} alt={description} />
        )}
      </ul>
    </div>
  )
}

export default ListImage