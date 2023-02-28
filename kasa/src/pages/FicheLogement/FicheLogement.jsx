
import React from "react"
import ListeLogements from "../../Datas/logement.json"
import Carrousel from "../../Components/Carrousel/Carrousel"
import { useParams, Navigate } from "react-router-dom"
import "./FicheLogement.css"
import Tag  from "../../Components/Tag/Tag.js"
import Collapse from "../../Components/Collapse/Collapse"
import etoilepleine from "../../Assets/Images/EtoilePleine.png"
import etoilevide from "../../Assets/Images/EtoileVide.png"

function FicheLogement () {
    // Récupère la bonne fiche 
    const id = useParams();
   
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);


    // Pour les notes
    const nbrEtoile = [1, 2, 3, 4, 5];
    
    

    return (
        ficheLogement ? (
            <div>
                <Carrousel images={ficheLogement.pictures}/>
                <div className="description">
                    <div className="descriptiondulogement">
                        <span className="titredulogement">{ficheLogement.title}</span>
                        <span className="endroitdulogement">{ficheLogement.location}</span>
                    </div>
                    <div className="hote">
                        <span className="nomhote">{ficheLogement.host.name}</span>
                        <img className="imagehote" src={ficheLogement.host.picture} alt="L'hote" />
                    </div>
                </div>
                <div className="tags_etoile">

                    <div className="tags">
                        {ficheLogement.tags.map((tags, index) => (
                            <Tag key={index} nom={tags} />
                        ))}
                    </div>

                    <div className="etoile">
                        {nbrEtoile.map((etoile, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img key={etoile} src={ratingValue <= ficheLogement.rating ? etoilepleine : etoilevide} alt="star" />
                                )
                            })}
                    </div>
                </div>
                <div className="description_equipements">
                    <Collapse titre="Description" description={ficheLogement.description} />
                    <Collapse className="equipements" titre="Equipements" description={ficheLogement.equipments}/>

                </div>
            
            
            </div>
        ) : <Navigate to="/404"  /> 

    )  
    
}
export default FicheLogement

/*Suivant l'id on prend certaine photo pour le carrousel ! ON NE PREND PAS TOUT*/