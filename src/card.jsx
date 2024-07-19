import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="cards1">
          <div className="img1">
            <p>{props.status}</p>
            <img className="cardImages" src={props.img} alt="" />
          </div>
          <div className="words">
            <div className="subwords">
              <img src={props.imges} alt="" />
              <p>{props.views}</p>
            </div>
            <div className="wordsAfter">
              <h2>{props.name}</h2>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
