import './header_home.css'
import bfLogo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom";

function Header_home (){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToWorks = () => {
        navigate("/works");
    }
    const goToAbout = () => {
        navigate("/aboutus");
    }
    return (
        <header className="header_home">
            <img className="brand-logo" onClick={goToHome} src={bfLogo} alt="logo" aria-hidden="true"/>
            <nav>
                <a onClick={goToHome} >Início</a>
                <a onClick={goToWorks}>Portfólio</a>
                <a onClick={goToAbout}>Quem somos</a>
                <a className="btn_agendar" >Agendar</a>
            </nav>
        </header>
    )
}

export default Header_home