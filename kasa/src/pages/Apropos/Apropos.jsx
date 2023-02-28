import React from "react";
import Banniere from "../../Components/Banniere/Banniere.jsx";
import picture from "../../Assets/Images/AboutBanner.png";

import Apropos from "../../Datas/APropos.json";
import Collapse from "../../Components/Collapse/Collapse.jsx";
//import Card from "../../Components/Card/Card.jsx"



function APropos() {
    return (
        <div>
            <Banniere picture={picture} alt="Montagne"/>
            {Apropos.map((propos) => (
                <Collapse key={propos.id} titre={propos.titre} description={propos.texte}/>
            ))}
            
        </div>
        
    )}

export default APropos
