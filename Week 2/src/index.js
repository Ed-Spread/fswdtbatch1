import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <h1 id='hero'>Some Famous Monuments</h1><form className='form1'>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
  <input type="submit" value="Submit" />
</form>
    <App 
    image="https://thumbs.dreamstime.com/b/taj-mahal-agra-india-morning-light-reflection-water-uttar-pradesh-108954918.jpg"
    name="Taj mahal"
    description="An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."/>
    <App
    image="https://www.planetware.com/photos-large/F/eiffel-tower.jpg"
    name="Eiffel tower"
    description="From the Louvre to the Eiffel Tower, from the Place de la Concorde to the Grand and Petit Palais, the evolution of Paris and its history can be seen from the River Seine. The Cathedral of Notre-Dame and the Sainte Chapelle are architectural masterpieces while Haussmann's wide squares and boulevards influenced late 19th- and 20th-century town planning the world over."/>
    <App
    image="https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop"
    name="The Great Wall of China"
    description="In c. 220 B.C., under Qin Shi Huang, sections of earlier fortifications were joined together to form a united defence system against invasions from the north. Construction continued up to the Ming dynasty (1368–1644), when the Great Wall became the world's largest military structure. Its historic and strategic importance is matched only by its architectural significance."/>
    <App
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg"
    name="Colosseum"
    description="Founded, according to legend, by Romulus and Remus in 753 BC, Rome was first the centre of the Roman Republic, then of the Roman Empire, and it became the capital of the Christian world in the 4th century. The World Heritage site, extended in 1990 to the walls of Urban VIII, includes some of the major monuments of antiquity such as the Forums, the Mausoleum of Augustus, the Mausoleum of Hadrian, the Pantheon, Trajan’s Column and the Column of Marcus Aurelius, as well as the religious and public buildings of papal Rome."/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
