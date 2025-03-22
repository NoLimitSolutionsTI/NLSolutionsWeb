import React from "react";
import '@/styles/ServicesPage/servicesPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat, faWrench, faGraduationCap, faHandshake, faPlane } from "@fortawesome/free-solid-svg-icons";
import Caurosel from "@/components/Carousel/Caurosel.jsx";
import { HeadProvider } from "react-head"

export default function ServicesPage() {
    return (
        <>
          <HeadProvider>
            <title>NL Solutions TI | Services </title>
            <meta name="description" content="Esta es la página de servicios de mi aplicación."/>
          </HeadProvider>
          <section className={'slider-section'}>
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

            <section className={'section-2-services'}>
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
                    <button type="submit">Lo quiero!</button>
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
                        <button type="submit">Lo quiero!</button>
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
                    <button type="submit">Lo quiero!</button>
                </div>
            </div>
            </section>

            <section className="icons-section container">
                <h3 className="icon-title">Soluciones flexibles en nuestro servicio </h3>
                <h2 className="icon-subtitle">Para cada tipo de empresa</h2>

                <div className="icons">
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faHardHat} className="icon" />
                        <p className="icon-text">Servicios Mineros</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faWrench} className="icon" />
                        <p className="icon-text">Ingeniería y Construcción</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                        <p className="icon-text">Educación</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <p className="icon-text">Servicios Profesionales</p>
                    </div>

                    <div className="icon-block">
                        <FontAwesomeIcon icon={faPlane} className="icon" />
                        <p className="icon-text">Aeronáutica</p>
                    </div>
                </div>
            </section>

  <section className={'card-service container'}>
    <h2 className={'title'}>Nuestros Proyectos</h2>
    <h4>Innovamos y desarrollamos soluciones tecnológicas que transforman negocios. 🚀</h4>
<Caurosel/>
  </section>


<section className={'section-4'}>
          <h2>¿Buscas una aplicación a medida?</h2>
          <button type="submit">Contactenos</button>
</section>
</>
    )
}