import './header_home.css'
import bfLogo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom";

function Header_home (){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToWorks = () => {
        window.scrollTo(0, 0);
        navigate("/works");
    }
    const goToAbout = () => {
        window.scrollTo(0, 0);
        navigate("/aboutus");
    }
    return (
        <header className="header_home">
            <img className="brand-logo" onClick={goToHome} src={bfLogo} alt="logo" aria-hidden="true"/>
            <nav>
                <a onClick={goToHome} >Início</a>
                <a onClick={goToWorks}>Portfólio</a>
                <a onClick={goToAbout}>Quem somos</a>
                <a className="btn_agendar" target="_blank" href="https://wa.me/5571993742126?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" >Agendar</a>
            </nav>
        </header>
    )
}

export default Header_home