import React ,{useState} from 'react'

const WithCounter =(OriginalComponent)=>{
function HOC() {
    const [Counter, setCounter] = useState(0);

    const handleCount = ()=>{
      setCounter(Counter+1);
    }
    return (
      <OriginalComponent handleCount={handleCount} Counter={Counter} />
    )
}
return HOC;
}
export default WithCounter;
