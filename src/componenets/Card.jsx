import React from "react";
import { MdLocationOn } from "react-icons/md";
import "../componentCss/card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        {/* <div className="imgCont">
        </div> */}
        <img src={`/images/${props.img}`} alt="img" className="placeimg" />
        {/* <img src="/images/kakheti.jpg" alt="img" className="placeimg" /> */}
        <div className="contetntCont">
          <div className="upperContent">
            <div className="upperUp">
              <div className="locationIcon">
                <MdLocationOn />
              </div>
              <h1 className="region">{props.region}</h1>
              <a href={props.map} target="_blank">
                <p className="map">View on Google Maps</p>
              </a>
            </div>
            <div className="city">{props.city}</div>
          </div>

          <div className="bottomContent">
            <h2 className="date">{props.checkin.day} {props.checkin.mon}, {props.checkin.year} - {props.checkout.day} {props.checkout.mon}, {props.checkout.year}</h2>
            <p className="aboutIt">
              {props.aboutIt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
