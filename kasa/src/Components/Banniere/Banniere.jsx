
import "./Banniere.css"

function Banniere ({picture, alt, title}) {
    return (
        <div className="banniere">
            <img className="banniere-img" src={picture} alt={alt} />
            <div className="banniere-sombre"></div>
            <span className="banniere-txt">{title}</span>
        </div>
        
    )
}

export default Banniere