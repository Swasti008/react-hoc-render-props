import React from 'react'

function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCount}>Like Image {props.Counter}</button>
    </div>
  )
}
export default LikeImage;
