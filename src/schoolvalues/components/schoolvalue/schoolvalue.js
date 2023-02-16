import React from "react";

import "./schoolvalue.css";

function SchoolValue(props) {
//     let cards = document.querySelectorAll(".card");
//     cards.forEach((card,i) => {
//       card.addEventListener("mouseover",() => {
//         console.log("hovered");
//         for(let j=0;j<cards.length;j++) {
//           if(j===i) {
//             cards[j].style.zIndex = "100px";
//           cards[j].style.filter = "blur(0)";
//             continue;
            
//           }
//           cards[j].style.zIndex = "10px";
//           cards[j].style.filter = "blur(5px)";
//         }
        
//     })
  
//     card.addEventListener("mouseout",() => {
//           for(let j=0;j<cards.length;j++) {
          
//             cards[j].style.zIndex = "100px";
//           cards[j].style.filter = "blur(0)";
//         }
//         })
//   });
    return (
        
    
    <div id={props.idVal} className="card" onClick={e => {
        document.getElementById(props.idVal).classList.toggle('expanded');
        console.log(e.target);
    }}>
      <h1 className="label">{props.title}</h1>
      <div className="text1">
        <div className="text-content">
          {/* <h1 className="title">{props.title}</h1> */}
          <div className="body-text">
            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" strokeWidth="5"/></svg>
    </div>
    )
}

export default SchoolValue;