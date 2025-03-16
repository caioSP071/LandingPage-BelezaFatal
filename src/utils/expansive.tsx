import /*React,*/ { useState, ReactNode } from 'react';
    import './expansive.css'

interface ExpansivelProps {
    titulo: string;
    children: ReactNode;
}

function Expansivel({ titulo , children }: ExpansivelProps) {
    const [aberto, setAberto] = useState(false);

    const alternarAberto = () => {
        setAberto(!aberto);
    };

    return (
        <div>
            <div className='ex-header' onClick={alternarAberto} style={{ cursor: 'pointer' }}>
                {titulo} {aberto ? '-' : '+'}
            </div>
            {aberto && <div>{children}</div>}
        </div>
    );
}

export default Expansivel;