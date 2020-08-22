import React from 'react'
import './Preview.css'


function Preview(props) {
  return (
    <div className="fileInfo">
      <figure className="fileInfo-preview">
        <img
          className="fileInfo-preview-image"
          src={props.f.preview}
          alt={props.f.name}
          id="image"
        />
      </figure>
    </div>
  )
}

export default Preview
