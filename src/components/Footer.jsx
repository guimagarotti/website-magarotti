import React from "react";

import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { FaRegHandPointDown } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-footer" id="contato">
            <div className="conteudo-footer">
                <div className="footer-title">
                    <h1>Entre em contato abaixo</h1>
                    <h3>Segue redes para feedback <FaRegHandPointDown /></h3>
                </div>

                <div className="footer-list">
                    <a className="list-item" target="_blank" href="https://www.instagram.com/guimagarotti/" rel="noreferrer" ><BsInstagram /></a>
                    <a className="list-item" target="_blank" href="https://www.linkedin.com/in/guilherme-cambi-magarotti-16177522b/" rel="noreferrer"><BsLinkedin /></a>
                    <a className="list-item" target="_blank" href="https://github.com/guimagarotti" rel="noreferrer"><BsGithub /></a>
                    <a className="list-item" target="_blank" href="https://twitter.com/GuilhermeMagar7" rel="noreferrer"><BsTwitter /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;