import React, { useState } from "react";
import "./Collapse.css";
import fleche from "../../Assets/Images/fleche.png"

function Collapse({titre, description}) {
    /* Crée un Hook d'état */ 
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="Collapse" id={`Collapse-${titre}`}>
            <div className="header-Collapse">
                <div className="titre-Collapse">{titre}</div>
                <p className={`fleche-Collapse ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir la liste"/>
                </p>
            </div>
            {
                /* Si le bandeau est à TRUE alors il affichera la description  */
                // && => condition
                ouvert && <div className="description-Collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;