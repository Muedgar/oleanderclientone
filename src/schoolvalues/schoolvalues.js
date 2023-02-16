import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import SchoolValue from "./components/schoolvalue/schoolvalue";

import "./schoolvalues.css";

import data from "./components/schoolvalue/data";

function SchoolValues() {
    return (
        <>
            <NavBar />
            <div className="schoolvaluesCardsTitle">
                <h1>School Values</h1>
            </div>
            <div className="schoolvaluesCards">
            
            {data.map((d,i) => (
                <SchoolValue idVal={`idValue${i}`} key={i} title={d.title} description={d.description} />
            ))}
            </div>
            <Footer />
        </>
    )
}

export default SchoolValues;