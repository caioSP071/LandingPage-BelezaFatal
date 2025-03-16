import React from 'react';
import Feedback from '../../utils/feedback.tsx';
import './content_feedback.css'
import Feedback1 from '../../assets/feedback_1.png'
import Feedback2 from '../../assets/feedback_2.png'
import Feedback3 from '../../assets/feedback_3.png'

interface FeedbackData {
    texto: string;
    foto: string;
    nome: string;
}

const Feedbacks: React.FC = () => {
    const feedbacks: FeedbackData[] = [
        {
            texto: 'Atendimento impecável, super atenciosa e dedicada, me senti cuidada.',
            foto: Feedback1,
            nome: 'Maria Silva',
        },
        {
            texto: 'A make ficou intacta a noite toda e olha que dancei muito!',
            foto: Feedback2,
            nome: 'Carla Oliveira',
        },
        {
            texto: 'Amei o resultado! Produtos de qualidade e a make nem se fala!',
            foto: Feedback3,
            nome: 'Mariana Lima',
        },
        // Adicione mais feedbacks aqui
    ];

    return (
        <>
            <h1>Feedbacks</h1>
            <div className="feedbacks">
                {feedbacks.map((feedback, index) => (
                    <Feedback
                        key={index}
                        texto={feedback.texto}
                        foto={feedback.foto}
                        nome={feedback.nome}
                    />
                ))}
            </div>
            <a className="bf_btn fd_btn">Deixe sua opinião</a>
        </>
    );
};

export default Feedbacks;