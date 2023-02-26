import "./ErrorComp.css"
import { Link } from "react-router-dom"

function ErrorComp () {
    return (
        <div>
            <p className="ErrorNumber">404</p>
            <p className="ErrorText ">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='RetourAccueil'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorComp