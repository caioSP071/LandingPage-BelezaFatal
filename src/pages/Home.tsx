import bfLogo from '../assets/logo.svg'
import './Home.css'
import Content_main from '../components/content_main/content_main.tsx'
import Content_works from "../components/content_works/content_works.tsx";
import Content_about_us from "../components/content_about_us/content_about_us.tsx";
import Content_faq from "../components/content_faq/content_faq.tsx";
import Content_feedback from "../components/content_feedback/content_feedback.tsx";
import Content_reservation from "../components/content_reservation/content_reservation.tsx";
import Footer_home from "../components/footer_home/footer_home.tsx";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); // Redireciona para a página home
    };

    return (
        <>

            <header className="header_home">
                <img className="brand-logo" onClick={goToHome} src={bfLogo} alt="logo" aria-hidden="true"/>
                <nav>
                    <a href="#main">Início</a>
                    <a href="#works">Portfólio</a>
                    <a href="#about_us">Quem somos</a>
                    <a className="btn_agendar">Agendar</a>
                </nav>
            </header>
            <hr/>
            <section id="main"><Content_main/></section>
            <hr/>
            <section id="works"><Content_works/></section>
            <hr/>
            <section id="about_us"><Content_about_us/></section>
            <hr/>
            <section id="faq"><Content_faq/></section>
            <hr/>
            <section id="feedback"><Content_feedback/></section>
            <hr/>
            <section id="reservation"><Content_reservation/></section>
            <hr/>
            <section id="Footer"><Footer_home/></section>
        </>
    )
}

export default Home
