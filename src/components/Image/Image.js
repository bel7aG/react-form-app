import React from 'react'
let i = 1
const Image = ({ src, alt }) => {
  return (
    <li className={`"item item-${i++}`}>
      <img src={src} alt={alt} />
    </li>
  )
}

export default Image