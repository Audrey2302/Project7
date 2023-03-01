import Banniere from "../../Components/Banniere/Banniere.jsx";
import Card from "../../Components/Card/Card.jsx";
import { Link } from "react-router-dom";
import Appartement from "../../Datas/logement.json";
import picture from "../../Assets/Images/Banner.png";
import "./Home.css"

function Home() {
 
    return (
      <div> 
  
        <Banniere picture={picture} alt="chez vous, partout et ailleurs" title="Chez vous, partout et ailleurs"/>
        <div className="cards-container" >
          
          {Appartement.map((appart) => (
            <div className="card_logement" key={appart.id}>
              <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                <Card  cover={appart.cover} title={appart.title} /> 
              </Link>
				    </div>
				  ))}
			</div>

    </div>
      )
  }
  
  export default Home

