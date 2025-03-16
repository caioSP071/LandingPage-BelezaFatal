import bfLogo from '../assets/logo.svg'
import './Home.css'
import Content_main from '../components/content_main/content_main.tsx'
import Content_works from "../components/content_works/content_works.tsx";
import Content_about_us from "../components/content_about_us/content_about_us.tsx";
import Content_faq from "../components/content_faq/content_faq.tsx";
import Content_feedback from "../components/content_feedback/content_feedback.tsx";
import Content_reservation from "../components/content_reservation/content_reservation.tsx";
import Footer_home from "../components/footer_home/footer_home.tsx";

function Home() {

    return (
        <>
            <header className="header_home">
                <img className="brand-logo" src={bfLogo} alt="logo" aria-hidden="true"/>
                <nav>
                    <a>Início</a>
                    <a>Portfólio</a>
                    <a>Quem somos</a>
                    <a className="btn_agendar">Agendar</a>
                </nav>
            </header>
            <hr/>
            <section><Content_main/></section>
            <hr/>
            <section><Content_works/></section>
            <hr/>
            <section><Content_about_us/></section>
            <hr/>
            <section><Content_faq/></section>
            <hr/>
            <section><Content_feedback/></section>
            <hr/>
            <section><Content_reservation/></section>
            <hr/>
            <section><Footer_home/></section>
        </>
    )
}

export default Home
