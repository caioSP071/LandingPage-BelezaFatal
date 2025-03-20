import './content_works.css'
import imgFormanda from "../../assets/formanda_img.png";
import imgNoiva from "../../assets/noiva_img.png";
import imgCarnaval from "../../assets/carnaval_img.png";
import {useNavigate} from "react-router-dom";

function Content_works() {
    const navigate = useNavigate();
    const goToWorks = () => {
        navigate("/Works");
    }
    return (
        <>
            <h1>Beleza em Ação</h1>
            <div className="container">
                <div className="image-item">
                    <img src={imgFormanda} alt="Imagem 1"/>
                    <h3>Formanda</h3>
                    <p>Uma make de peso para acompanhar a importância desse momento!</p>
                </div>
                <div className="image-item">
                    <img src={imgNoiva} alt="Imagem 2"/>
                    <h3>Noiva</h3>
                    <p>Leve, elegante e iluminada, para que você seja a maior estrela do dia!</p>
                </div>
                <div className="image-item">
                    <img src={imgCarnaval} alt="Imagem 3"/>
                    <h3>Carnaval</h3>
                    <p>Se é para carnavalizar que seja com muito brilho, cor e ousadia!</p>
                </div>
            </div>
            <a className="bf_btn" onClick={goToWorks}>Explore mais de nossas tranformações</a>
        </>
    )
}

export default Content_works;