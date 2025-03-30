import './aboutUs.css'
import React from "react";
import Content_reservation from "../components/content_reservation/content_reservation.tsx";
import Footer_home from "../components/footer_home/footer_home.tsx";
import AboutUsImg from "../assets/we.png"
import Header_home from "../components/header_home/header_home.tsx";
import Cerificates from "../assets/Cardgrid_certificates.png"


const AboutUs: React.FC = () => {
    return (
        <>
            <section><Header_home/></section>
            <hr/>
            <h1>Mais sobre nós!</h1>
            <div className="about_us">
                <img src={AboutUsImg} className="content_us_img"/>
                <p className="textAboutus">Nossos certificados não são apenas papéis, mas a prova do nosso compromisso com a excelência. Cada curso realizado representa horas de estudo, prática e aperfeiçoamento em técnicas modernas para oferecer maquiagens impecáveis, duradouras e adaptadas a cada cliente. Além das certificações nacionais, buscamos aprimoramento internacional, trazendo tendências e métodos inovadores para garantir um serviço de alta qualidade. Investir em conhecimento é o que nos permite transformar beleza em arte, com segurança, técnica e dedicação.</p>
            </div>
            <hr/>
            <h1>Certificados</h1>
            <div className="Cerificates">
                <img src={Cerificates}/>
            </div>
            <hr/>
            <section><Content_reservation/></section>
            <section><Footer_home/></section>
        </>
    )
}

export default AboutUs;