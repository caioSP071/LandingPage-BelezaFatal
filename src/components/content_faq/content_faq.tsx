import Expansivel from '../../utils/expansive.tsx';
import './content_faq.css'

function Content_faq() {

    return (
        <>
            <h1>Dúvidas Frequentes</h1>
            <div className="faq-item">
                <Expansivel titulo = "A maquiagem é feita no salão ou posso escolher o local?">
                    <span className="faq-answer">O atendimento pode ser realizado tanto no salão quanto por exemplo na sua casa, tudo para que você se sinta mais confortável nesse momento tão especial. Basta agendar com atecedência para evitar imprevistos na nossa agenda.</span>
                </Expansivel>
                <br/>
                <Expansivel titulo="Posso fazer uma prova de maquiagem antes do meu evento?">
                    <span className="faq-answer">Sim! Para noivas, a prova de maquiagem já está incluída no pacote, garantindo que tudo saia perfeito no grande dia. Para outros eventos, a prova pode ser agendada mediante disponibilidade e terá um custo adicional. Caso tenha interesse, entre em contato para mais informa.</span>
                </Expansivel>
                <br/>
                <Expansivel titulo="Quais tipos de maquiagem vocês fazem?">
                    <div className="faq-answer">
                        <span>Oferecemos uma ampla variedade de maquiagens para diferentes ocasiões e estilos:</span>
                        <ul>
                            <li>1. Noiva – Make sofisticada, elegante e duradoura, perfeita para o seu grande dia.</li>
                            <li>2. Formanda – Beleza impecável para brilhar na cerimônia e na festa.</li>
                            <li>3. Carnaval – Cores vibrantes, muito brilho e criatividade para você se destacar.</li>
                            <li>4. Festa – Maquiagem versátil para qualquer evento especial, desde aniversários a eventos sociais.</li>
                            <li>5. Pele Negra – Técnicas especializadas para realçar a beleza natural, respeitando os tons e texturas da pele.</li>
                            <li>6. Dramática – Olhos marcantes, esfumados intensos e acabamentos ousados para um look poderoso.</li>
                        </ul>
                    </div>
                </Expansivel>
                <br/>
                <Expansivel titulo="Posso escolher com por qual mauquiadora vou ser atendida?">
                    <span className="faq-answer">Aceitamos Pix, cartões de crédito e débito. A opção de parcelamento está disponível para determinados valores, entre em contato para mais detalhes sobre as condições.</span>
                </Expansivel>
                <br/>
                <Expansivel titulo="Quanto custa o dia da noiva?">
                <div className="faq-answer">
                    <span>Oferecemos três pacotes especiais para o Dia da Noiva, adaptados às suas necessidades e desejos:</span>
                    <ul>
                        <li>1. Pacote "Encanto": Inclui maquiagem e penteado tradicionais, garantindo um visual elegante e clássico para o seu grande dia.</li>
                        <li>2. Pacote "Brilho Eterno": Além dos serviços do pacote "Encanto", este inclui uma prova de maquiagem e penteado, permitindo ajustes prévios para assegurar que tudo esteja perfeito.</li>
                        <li>3. C  Pacote "Diamante": Nosso pacote mais completo, que abrange todos os serviços dos pacotes anteriores, além de tratamentos de spa, como massagem relaxante e cuidados com a pele, proporcionando uma experiência completa de bem-estar antes do casamento.</li>
                    </ul>
                    <p>Os valores variam conforme o pacote escolhido, com preços entre R$ 900 e R$ 2.000. O pacote "Encanto" é a opção mais econômica, enquanto o "Diamante" oferece uma experiência mais completa. Para obter informações detalhadas e personalizadas, entre em contato conosco.</p>
                </div>
                </Expansivel>
                <br/>
            </div>
        </>
    )
}

export default Content_faq