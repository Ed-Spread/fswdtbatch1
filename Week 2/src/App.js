import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      
      <div className="App">
      <div className="t1">
        <img src={props.image} height={"400px"} width={"400px"}></img>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
    </div>
    
  );
}

export default App;
