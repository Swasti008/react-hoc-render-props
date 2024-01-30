import React from 'react'
import WithCounter from './WithCounter'

function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCount}>Like Image {props.Counter}</button>
    </div>
  )
}
export default WithCounter(LikeImage)
