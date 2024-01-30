import React ,{useState} from 'react'

function Render(props) {
    const [Counter, setCounter] = useState(0);

    const handleCount = ()=>{
      setCounter(Counter+1);
    }
    return (
      <span>{props.render(Counter,handleCount)}</span>
    )
}
export default Render
