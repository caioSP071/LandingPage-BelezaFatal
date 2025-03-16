import './content_about_us.css'
import imgUs from "../../assets/us_Img.png";


function Content_about_us() {
    return (
        <>
            <div className="about_us">
                <div className="content_us">
                    <h1>Quem somos?</h1>
                    <p>Somos um time de 3 mulheres apaixonadas por maquiagem e por transformar cada pessoa que passa por
                        nossas
                        mãos.
                        Com mais de 5 anos de experiência no mercado, como maquiadoras profissionais de Salvador -
                        Bahia. Nossa missão
                        é
                        proporcionar uma make de alta qualidade e duração, que realce a beleza que cada uma de vocês já
                        possuí. Com
                        dedicação, carinho e técnica, buscamos sempre superar as expectativas e fazer com que você se
                        sinta ainda mais
                        incrível do que já é. Porque sua beleza vem primeiro!</p>
                    <a className="bf_btn btn_us">Saiba +</a>
                </div>
                <img className="content_us_img" src={imgUs} alt="Quem somos?"/>
            </div>
        </>
    )
}

export default Content_about_us;