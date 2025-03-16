import './content_reservation.css'
import React from 'react';


const Content_reservation: React.FC = () => {
    return (
        <>
            <div className="reservation_content">
                <h1>Reserve seu momento</h1>
                <div className="reservation_content_btn">
                    <a className="btn_agendar bf_btn">Agendar</a>
                    <a className="btn_agendar_grp bf_btn">Atendimento em grupo</a>
                </div>
            </div>
        </>
    )
}

export default Content_reservation;