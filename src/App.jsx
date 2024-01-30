import './App.css';
import LikeImage from './components/HigherOrderComponents/LikeImage';
import LikePost from './components/HigherOrderComponents/LikePost';
import Render from './components/RenderProps/Render';

function App() {
  return (
    <div>
      <h3>Some Blog by Higher Order Components</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <div>
      <h3>Some Blog by Render Props</h3>
      <div className='buttons'>
      <Render render={(Counter,handleCount)=>{
          return <LikeImage Counter={Counter} handleCounter={handleCount}/>
        }}/>
        <Render render={(Counter,handleCount)=>{
          return <LikePost Counter={Counter} handleCounter={handleCount}/>
        }}/>
      </div>
        
      </div>
      
    </div>
  );
}

export default App;
