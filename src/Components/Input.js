import React, { useState } from "react";
import axios from "axios";
import "./Input.css";
//import Logo from "./sun image.png";
//import Logo2 from "./rain image.png";

export default function Input() {
  const [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4a409c8d55946f5c477b737f63efe33`
    );
    //console.log(response.data);
    //console.log(response.data.weather[0].icon);
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    let iconcode = response.data.weather[0].icon;
    console.log(iconcode);
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    setImage(iconurl);
  };
  /*let handleImage = async (e) => {
    e.preventDefault();
    let Imageresponse = await axios.get(
      `https://pixabay.com/api/?key=17160673-fd37d255ded620179ba954ce0&q=${image}&image_type=photo`
    );
    console.log(Imageresponse.data.weather[0].icon);
  };*/
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <button type="submit">Get Weather</button>
      </form>
      <div className="show">
        <div className="hh">
          <img src={image} />
          <h3>{temp}</h3>
          <h4>{desc}</h4>
        </div>
      </div>
    </div>
  );
}
