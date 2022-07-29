import React from "react";

import Figure from 'react-bootstrap/Figure';
import profileImage from "../assets/images/profile.jpg"
import { FiDownload } from "react-icons/fi";

const Inicio = () => {
    return (
        <div className='container'>
            <div className='info'>
            <p className='info-item'>Olá, eu sou <br></br><strong id='name'>Guilherme Magarotti</strong><br></br>Desenvolvedor Front-End</p>
            <button id="cv-button">Currículo <FiDownload /></button>
            </div>
            <div className='image'>
                <Figure>
                <Figure.Image id="config-image"
                    width={130}
                    height={180}
                    alt="130x180"
                    src={profileImage}
                />
                </Figure>
            </div>
        </div>
    )
}

export default Inicio;