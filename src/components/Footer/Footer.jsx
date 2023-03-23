import React from 'react';
import logoFooter from "../../assets/img/logoFooter.png";
import "../Footer/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            {/* Contenu du pied de page */}
            <div className="footer-content">
                {/* Logo du pied de page */}
                <img className="logoFooter" src={logoFooter} alt="Logo" />
                {/* Texte de copyright */}
                <p className='title-footer'>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;