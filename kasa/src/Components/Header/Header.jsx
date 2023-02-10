import { Link } from 'react-router-dom'  //link c'est comme une balise anchor
import './Header.css'


function Header() {
    return (
        <nav className='kasa-nav'>
            <Link to="/" className='kasa-nav-accueil'>Accueil</Link>
            <Link to="/survey" className='kasa-nav-apropos'>A Propos</Link>
        </nav>
    )
}

export default Header