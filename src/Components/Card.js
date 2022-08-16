import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div class="box1">
      <img src={props.im} />
      <div class="par">
        <p>{props.para}</p>
      </div>
    </div>
  );
}
