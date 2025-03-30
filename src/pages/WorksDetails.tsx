import './WorksDetails.css'
import React from "react";
import Header_home from "../components/header_home/header_home.tsx";
import ImageCarousel from "../utils/imageCarousel.tsx"
import noiva1 from "../assets/noiva1.png"
import noiva2 from "../assets/noiva2.png"
import noiva3 from "../assets/noiva3.png"
import noiva4 from "../assets/noiva4.png"
import noiva5 from "../assets/noiva5.png"
import noiva6 from "../assets/noiva6.png"
import formanda1 from "../assets/formanda1.png"
import formanda2 from "../assets/formanda2.png"
import formanda3 from "../assets/formanda3.png"
import formanda4 from "../assets/formanda4.png"
import formanda5 from "../assets/formanda5.png"
import formanda6 from "../assets/formanda6.png"
import carnaval1 from "../assets/Carnaval (1).png"
import carnaval2 from "../assets/Carnaval (2).png"
import carnaval3 from "../assets/Carnaval (3).png"
import carnaval4 from "../assets/Carnaval (4).png"
import carnaval5 from "../assets/Carnaval (5).png"
import carnaval6 from "../assets/Carnaval (6).png"
import Content_reservation from "../components/content_reservation/content_reservation.tsx";
import Footer_home from "../components/footer_home/footer_home.tsx";


const imagesSet1 = [
    noiva1,
    noiva2,
    noiva3,
    noiva4,
    noiva5,
    noiva6,
];

const imagesSet2 = [
    formanda1,
    formanda2,
    formanda3,
    formanda4,
    formanda5,
    formanda6,
];

const imagesSet3 = [
    carnaval1,
    carnaval2,
    carnaval3,
    carnaval4,
    carnaval5,
    carnaval6,
];

const WorksDetails: React.FC = () => {
    return (
        <>
            <section><Header_home/></section>
            <hr/>
            <h1 className="titulo_works">Explore mais de nossas trsnformações</h1>
            <p className="texto_works">Aqui você encontrará uma seleção de makes que já fizemos, mostrando toda a versatilidade e qualidade do nosso trabalho. Desde produções mais suaves até visuais marcantes, apresentamos os diferentes tipos de maquiagem que oferecemos. Para mais informações, confira também nossa seção de dúvidas frequentes!</p>
            <div style={{ textAlign: "center" }}>
                <h1>Noivas</h1>
                <ImageCarousel images={imagesSet1} />
                <hr/>
                <h1>Formandas</h1>
                <ImageCarousel images={imagesSet2} />
                <hr/>
                <h1>Carnaval</h1>
                <ImageCarousel images={imagesSet3} />
                <hr/>
                <hr/>
                <section><Content_reservation/></section>
                <section><Footer_home/></section>
            </div>
        </>
    )
}


export default WorksDetails;