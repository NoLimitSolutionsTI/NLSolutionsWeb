import React from "react";
import '@/styles/ServicesPage/servicesPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRocket, faGraduationCap, faHandshake, faBriefcase,faBuilding } from "@fortawesome/free-solid-svg-icons";
import Caurosel from "@/components/Carousel/Caurosel.jsx";
import { HeadProvider } from "react-head"
import {useNavigate} from "react-router-dom";
import { useState } from "react";


export default function ServicesPage() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
        <>
          <HeadProvider>
            <title>NL Solutions TI | Services </title>
            <meta name="description" content="Esta es la página de servicios de mi aplicación."/>
          </HeadProvider>
          <section className={'slider-section '}>
          <div className={'slider-container'}>
            <div>
              <img src="/src/assets/LogoNL.png" alt="Img-slider" />
            </div>
            <div className={'slider-text'}>
              <h1>¿Buscas un servicio de calidad?</h1>
              <p>Descubre nuestras ofertas y lleva tu negocio al siguiente nivel. 🚀</p>
            </div>
          </div>
          </section>

            <section className={'section-2-services container-sm'}>
                <h2 className={'title-section-2'}>Nuestros Servicios</h2>
              <div className={'section-2-services-container'}>
                <div className={'section-2-services-text'}>
                    <h3>Soluciones Web Personalizadas</h3>
                    <ul>
                        <li>Diseñamos sitios web a medida, sin límites.</li>
                        <li>Tiendas online, páginas informativas y aulas virtuales.</li>
                        <li>Convertimos tu idea en realidad con tecnología de vanguardia.</li>
                    </ul>
                </div>
                <div className={'section-2-services-button'}>
                    <button onClick={() => setIsOpen(true)} type="submit">Lo quiero!</button>
                </div>
              </div>

                <div className={'section-2-services-container'}>
                    <div className={'section-2-services-text'}>
                        <h3>Soporte TI</h3>
                        <ul>
                            <li>Mantenimiento y reparación de computadoras y laptops.</li>
                            <li>Venta de repuestos y optimización de sistemas.</li>
                            <li>Soluciones rápidas y efectivas para tu tecnología.</li>
                        </ul>
                    </div>
                    <div className={'section-2-services-button'}>
                        <button onClick={() => setIsOpen2(true)} type="submit">Lo quiero!</button>
                    </div>
                </div>
                <div className={'section-2-services-container'}>
                <div className={'section-2-services-text'}>
                    <h3>Sistemas Empresariales a Medida</h3>
                    <ul>
                        <li>ERP, CRM, puntos de venta e inventarios.</li>
                        <li>Sistemas para restaurantes y gestión empresarial.</li>
                        <li>Optimiza tu negocio con tecnología eficiente. 🚀</li>
                    </ul>
                </div>
                    <div className={'section-2-services-button'}>
                    <button onClick={() => setIsOpen3(true)} type="submit">Lo quiero!</button>
                </div>
            </div>
            </section>

            <section className="icons-section container container-sm">
                <h3 className="icon-title">Soluciones flexibles en nuestro servicio </h3>
                <h2 className="icon-subtitle">Para cada tipo de empresa</h2>

                <div className="icons">
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faBriefcase} className="icon" />
                        <p className="icon-text">Empresarial</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faBuilding} className="icon" />
                        <p className="icon-text"> Inmobiliarias </p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                        <p className="icon-text">Educación</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <p className="icon-text">Consultorias</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faRocket} className="icon" />
                        <p className="icon-text">StartUp</p>
                    </div>
                </div>
            </section>

  <section className={'card-service container container-sm'}>
    <h2 className={'title'}>Nuestros Proyectos</h2>
    <h4>Innovamos y desarrollamos soluciones tecnológicas que transforman negocios. 🚀</h4>
<Caurosel/>
  </section>


<section className={'section-4 container-sm'}>
          <h2>¿Buscas una aplicación a medida?</h2>
          <button type="submit" onClick={() => navigate("/contact")}>Contactenos</button>
</section>

            {isOpen && (
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <h2 >Informacion</h2>
                        <p >Mas Informacion</p>
                        <button className={'btn-modal'} onClick={() => setIsOpen(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
            {isOpen2 && (
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <h2 >Informacion 2</h2>
                        <p >Mas Informacion</p>
                        <button className={'btn-modal'} onClick={() => setIsOpen2(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
            {isOpen3 && (
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <h2 >Informacion 3</h2>
                        <p >Mas Informacion </p>
                        <button className={'btn-modal'} onClick={() => setIsOpen3(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

</>
    )
}

