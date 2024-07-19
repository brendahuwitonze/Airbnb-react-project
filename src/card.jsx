import React from "react";

export default function Card(){
return(
    <>
    <div className="cards">
    <div className="cards1">
     <div className="img1">
     <p>SOLD OUT</p>
     <img className="cardImages"  src="src/assets/image.png" alt="" />
     </div>
     <div className="words">
        <div className="subwords">
        <img src="src/assets/Star 1.png" alt="" />
        <p>5.0(6).USA</p>
        </div>
        <div className="wordsAfter">
        <p>Life lessons with Katie Zaferes</p>
        <p><span>From $136</span>/ person</p>
    </div>
     </div>
    </div>

    <div className="cards2">
     <div className="card2--img1">
     <p>SOLD OUT</p>
     <img className="cardImages"  src="src/assets/wedding-photography 1.png" alt="" />
     </div>
     <div className="card2--words">
        <div className="card2--subwords">
        <img src="src/assets/Star 1.png" alt="" />
        <p>5.0(6).USA</p>
        </div>
        <div className="card2--wordsAfter">
        <p>Learn wedding photography</p>
        <p><span>From $136</span>/ person</p>
    </div>
     </div>
    </div>


    <div className="cards3">
     <div className="card3--img1">
     <p>SOLD OUT</p>
     <img className="cardImages" src="src/assets/mountain-bike 1.png" alt="" />
     </div>
     <div className="card3--words">
        <div className="card3--subwords">
        <img src="src/assets/Star 1.png" alt="" />
        <p>5.0(6).USA</p>
        </div>
        <div className="card3--wordsAfter">
        <p>Group Mountain Biking</p>
        <p><span>From $136</span>/ person</p>
    </div>
     </div>
    </div>


    </div>
    </>
)
}