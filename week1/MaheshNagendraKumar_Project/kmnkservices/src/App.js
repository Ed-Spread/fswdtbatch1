import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';


function App() {
  return (
  <Router>
    <div className="App">
      
      <Routes>
      <Route path="/" element={<><Header /> <Home/><About/><Contact/></>}></Route>
      <Route path="/Home" element={<><Header /> <Home/></>}></Route>
      <Route path="/About" element={<><Header /> <About/></>}></Route>
      <Route path="/Contact" element={<><Header /><Contact/></>}></Route>     
      </Routes>
      
      {/* <Header/>
      <Home/>
      <About/>
      <Contact/> */}
    </div>
  </Router>
  );
}

export default App;
