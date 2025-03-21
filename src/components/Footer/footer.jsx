import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone, faUsers,faCode} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";

import '@/styles/components/Footer/footer.scss'

export default function Footer() {
  return (
    <>
        <footer>
            <div className={'footer-content'}>
                <div className={'logo-footer'}>
                    <img src="/src/assets/nl-logotype-min.webp" alt="Logo NL"/>
                </div>
                <div className="nav-container">
                    <h3>Explora</h3>
                    <ul className="nav-footer">
                        <li><a href="/"><FontAwesomeIcon icon={faHome} /> Inicio</a></li>
                        <li><a href="/services"><FontAwesomeIcon icon={faCode} />  Servicios</a></li>
                        <li><a href="/about"><FontAwesomeIcon icon={faUsers} /> Nosotros</a></li>
                        <li><a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contacto</a></li>
                    </ul>
                </div>

                {/* Sección de Contacto */}
                <div className="nav-container">
                    <h3>Contacto</h3>
                    <ul className="nav-footer">
                        <li><a href="mailto:nolimitsolutionsti@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> nolimitsolutionsti@gmail.com</a></li>
                        <li><a href="tel:+51941778278"><FontAwesomeIcon icon={faPhone} /> +51 941 778 278</a></li>
                    </ul>
                </div>

                {/* Sección de Redes Sociales */}
                <div className="nav-container">
                    <h3>Síguenos</h3>
                    <ul className="nav-footer">
                        <li><a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                        <li><a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /> TikTok</a></li>
                    </ul>
                </div>

            </div>
            <div className={'copyright'}>
                <h3>© 2025 NoLimitSolutions TI - Todos los derechos reservados</h3>
            </div>
        </footer>
    </>
  )
}
