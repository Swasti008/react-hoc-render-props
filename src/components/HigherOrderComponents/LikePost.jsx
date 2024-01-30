import React from 'react'
import WithCounter from './WithCounter'

function LikePost(props) {
return (
    <div>
      <button onClick={props.handleCount}>Like Post {props.Counter}</button>
    </div>
  )
}
export default WithCounter(LikePost)
