import React, {useEffect, useState} from "react";


import './programcard.css';


import data from "./career";

function ProgramCard() {
    const [careers, setCareers] = useState([]);
    
    useEffect(() => {
        setCareers(data);
        console.log("called use effect");
    },[])

    return(
        <div className="programs">
            <h1>Our Programs</h1>
            {careers.map((career, index) => {
                return (
                    <div key={index} className="careerCard">
                <h2>
                    <span>Program Title:</span>
                    <span>{career.title}</span>
                </h2>
                <h2>Summary:</h2>
                <p>{career.summary}</p>
                <h2>History:</h2>
                <ul>
                    {career.duties.map((duty,index)=> (
                        <li key={index}>{duty}</li>
                    ))}
                </ul>

                <h2>Getting involved:</h2>
                <ul>
                    {career.requirements.map((requirement,index)=> (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                <div><button onClick={e => {
                    window.location = "/donation";
                }}>Get Involved.</button></div>
            </div>
                )
            })}
        </div>
    )
}

export default ProgramCard;