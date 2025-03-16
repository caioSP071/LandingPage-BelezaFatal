import './footer_home.css'
//import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer_home() {
    return (
        <footer className="footer">
            <div className="footer-coluna">
                <h1>Beleza Fatal</h1>
                <div className="redes-sociais">
                    <a href="#" className="icone-rede-social">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="icone-rede-social">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="icone-rede-social">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="icone-rede-social">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="icone-rede-social">
                        <i className="fab fa-youtube"></i> {/* Ícone do YouTube */}
                    </a>
                </div>
            </div>
            <div className="footer-coluna">
                <a href="#">Início</a>
                <a href="#">Portfólio</a>
                <a href="#">Quem somos</a>
                <a href="#">Agendar</a>
            </div>
        </footer>
    );
}

export default Footer_home;