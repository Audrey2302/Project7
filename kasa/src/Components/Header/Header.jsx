import { Link } from 'react-router-dom'  //link c'est comme une balise anchor
import './Header.css'

import logo from "../../Assets/Images/LOGO.svg"



function Header() {
    return (
        <div className='kasa_header'>
            <img className="kasa_image" src={logo} alt="Logo Kasa" />
            <nav className='kasa-nav'>
                <Link to="/" className='nav'>Accueil</Link>
                <Link to="/Apropos" className='nav'>A Propos</Link>
                
            </nav>
        </div>
    )
}

export default Header