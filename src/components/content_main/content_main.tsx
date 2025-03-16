import imgMain from '../../assets/image_main.png'
import './content_main.css'


function Content_main() {
    return (
        <>
            <h1>Sua beleza em primeiro lugar!</h1>
            <p>A beleza reflete sua essência e fortalece sua autoestima, elevando sua confiança em cada momento. Agende
                sua
                maquiagem conosco e sinta-se íncrivel, você merece brilhar!</p>

            <img className="img_main" alt="Imagem Principal Beleza Fatal" src={imgMain}/>
        </>
    )
}

export default Content_main;