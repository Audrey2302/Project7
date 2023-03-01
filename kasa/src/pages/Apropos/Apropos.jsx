import React from "react";
import Banniere from "../../Components/Banniere/Banniere.jsx";
import picture from "../../Assets/Images/AboutBanner.png";

import Apropos from "../../Datas/APropos.json";
import Collapse from "../../Components/Collapse/Collapse.jsx";
//import Card from "../../Components/Card/Card.jsx"
import "./Apropos.css"


function APropos() {
    return (
        <div>
            <Banniere picture={picture} alt="Montagne"/>
            <div className="collapses">
                {Apropos.map((propos,index) => (
                    <Collapse key={index} titre={propos.titre} description={propos.texte}/>
                ))}
            </div>
        </div>
        
    )}

export default APropos
