import React from "react";
import './App.css';

function Card(props) {
    return (
            <div className="card">
            <div className="card__body">
                <img src={props.img ? props.img : "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?s=612x612&w=is&k=20&c=plkMWSGpJXf3iAMcethKFSALe3nGKpdHRNuOwjN-40o="} class="card__image" alt='My Picture'/>
                <h2 className="card__title">{props.loadValue ? props.loadValue.firstName||props.title : ""}</h2>
                <h2 className="card__description">{props.loadValue ? props.loadValue.lastName||props.description : ""}</h2>
            </div>
        </div>


    );



}

export default Card;