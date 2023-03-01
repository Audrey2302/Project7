import './Footer.css';
import logo from "../../Assets/Images/Logo.footer.svg";

function Footer() {
    return (
        <footer className='kasa'>
            <img src={logo} alt="Logo Kasa" />
            <p className='kasa-footer'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )}

export default Footer