import { Link } from 'react-router-dom'  
import './Header.css'
import logo from "../../Assets/Images/LOGO.svg"

function Header() {
    return (
        <div className='kasa_header'>
            <Link to="/" className="kasa_image">
                <img  src={logo} alt="Logo Kasa" /> 
            </Link>
            <nav className='kasa-nav'>
                <Link to="/" className='nav'>Accueil</Link>
                <Link to="/Apropos" className='nav'>A Propos</Link>
                
            </nav>
        </div>
    )}
export default Header