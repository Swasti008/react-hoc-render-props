import React from 'react'


function LikePost(props) {
return (
    <div>
      <button onClick={props.handleCount}>Like Post {props.Counter}</button>
    </div>
  )
}
export default LikePost;
