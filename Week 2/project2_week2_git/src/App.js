import React,{ useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=581644139bafea76c65011bbe6cb67d9`
  const searchLocation=(event) => {
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }
  return (
    <div className="app">
      <div className='search'>
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter location"
        
        type={"text"}/>
      </div>
      <div className='name'>
        <div className='heading'>
          <h1>{data.name}</h1>
        </div>
        <div className='degree heading'>
          {data.main ? <h1>{data.main.temp.toFixed()} &#8451;</h1> : null}
          
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
    {data.name != undefined && 
    <div className='bottom'>
    <div className='feels'>
      {data.main ? <p>{data.main.feels_like.toFixed()} &#8451;</p> : null}
      <p>Feels like</p>
    </div>
    <div className='humidity'>
    {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}
      
      <p>Humidity</p>
    </div>
    <div className='wind'>
    {data.wind ? <p>{data.wind.speed.toFixed()} m/s</p> : null}
      <p>wind</p>
    </div>
  </div>
  
    }
    </div>
  );
}

export default App;
