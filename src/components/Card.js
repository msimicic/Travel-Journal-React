import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={`../images/${props.img}`} />

      <div className="card-text">
        <div className="card-header">
          <img src="../images/LocationMark.png" />
          <p>{props.country}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>

        <div className="card-title">
          <h2>{props.title}</h2>
        </div>

        <div>
          {props.startDate} - {props.endDate}
        </div>

        <div className="card-description">{props.description}</div>
      </div>
    </div>
  );
}
