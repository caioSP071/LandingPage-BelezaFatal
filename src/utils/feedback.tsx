import React from 'react';
import './feedback.css';

interface FeedbackProps {
    texto: string;
    foto: string;
    nome: string;
}

const Feedback: React.FC<FeedbackProps> = ({ texto, foto, nome }) => {
    return (
        <div className="feedback">
            <p className="feedback-texto">{texto}</p>
            <div className="feedback-autor">
                <img src={foto} alt={nome} className="feedback-foto" />
                <span className="feedback-nome">{nome}</span>
            </div>
        </div>
    );
};

export default Feedback;