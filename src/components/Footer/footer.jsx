import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone, faUsers,faCode, faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {logoNL} from "@/App";
import '@/styles/components/Footer/footer.scss'

export default function Footer() {

    const [ShowNavFooter, setNavFooter]= useState(window.innerWidth < 1050);
    const [NavFooterOpen, setNavFooterOpen] = useState(false);
    const toggle_navFooter = (index) => {
        setNavFooterOpen((prev) => ({
          ...prev,
          [index]: !prev[index], // alterna true/false por índice
        }));
      };

    useEffect(()=>{
        const handleResize= ()=>{
            setNavFooter(window.innerWidth < 1050);
            if (window.innerWidth >= 1050) {
                setNavFooter(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
        <footer >
            <div className={'footer-content'}>
                <div className={'container-footer'}>
                    <div className={'logo-footer'}>
                        {logoNL}
                        <span>NL Solutions TI</span>
                    </div>
                    <div className={'nav-container-footer'}>
                        <div className="nav-container">
                            <span onClick={() => toggle_navFooter(0)}>Explora {ShowNavFooter && (<FontAwesomeIcon icon={NavFooterOpen[0]?faCaretUp: faCaretDown}/>)}</span>
                            <ul className={`nav-footer ${NavFooterOpen[0] ? "open" : ""}`}>
                                <li><a href="/"><FontAwesomeIcon icon={faHome} /> Inicio</a></li>
                                <li><a href="/services"><FontAwesomeIcon icon={faCode} />  Servicios</a></li>
                                <li><a href="/about"><FontAwesomeIcon icon={faUsers} /> Nosotros</a></li>
                                <li><a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contacto</a></li>
                            </ul>
                        </div>

                        {/* Sección de Contacto */}
                        <div className="nav-container">
                            <span onClick={() => toggle_navFooter(1)}>Contacto {ShowNavFooter && (<FontAwesomeIcon icon={NavFooterOpen[1]?faCaretUp: faCaretDown}/>)}</span>
                            <ul className={`nav-footer ${NavFooterOpen[1] ? "open" : ""}`}>
                                <li><a href="mailto:nolimitsolutionsti@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> nolimitsolutionsti@gmail.com</a></li>
                                <li><a href="tel:+51941778278"><FontAwesomeIcon icon={faPhone} /> +51 941 778 278</a></li>
                            </ul>
                        </div>

                        {/* Sección de Redes Sociales */}
                        <div className="nav-container">
                            <span onClick={() => toggle_navFooter(2)}>Síguenos {ShowNavFooter && (<FontAwesomeIcon icon={NavFooterOpen[2]?faCaretUp: faCaretDown}/>)}</span>
                            <ul className={`nav-footer ${NavFooterOpen[2] ? "open" : ""}`}>
                                <li><a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                                <li><a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                                <li><a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /> TikTok</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'copyright'}>
                <span>© 2025 NoLimitSolutions TI - Todos los derechos reservados</span>
            </div>
        </footer>
    </>
  )
}
