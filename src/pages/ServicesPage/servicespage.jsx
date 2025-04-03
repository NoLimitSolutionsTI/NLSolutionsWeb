import React from "react";
import '@/styles/ServicesPage/servicesPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRocket, faGraduationCap, faHandshake, faBriefcase,faBuilding } from "@fortawesome/free-solid-svg-icons";
import Caurosel from "@/components/Carousel/Caurosel.jsx";
import { HeadProvider } from "react-head"
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import Smodal1 from "@/assets/modal1.jpg"
import Smodal2 from "@/assets/modal2.jpg";
import Smodal3 from "@/assets/modal3.jpg";
import Rmodal1 from "@/assets/reparacion.png"
import Rmodal2 from "@/assets/optimizacion.png";
import Rmodal3 from "@/assets/web.png";
import Emodal1 from "@/assets/GESTION.jpg";
import Emodal2 from "@/assets/DASHBOARD.png";
import Emodal3 from "@/assets/crm.png"
import SliderImage from "@/assets/slider-services.png"


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
              <img  src={SliderImage} alt="Img-slider" />
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
                    <p>Creación de sitios web a medida, sin límites, para negocios, educación y más.</p>
                </div>
                <div className={'section-2-services-button'}>
                    <button onClick={() => setIsOpen(true)} type="submit">Lo quiero!</button>
                </div>
              </div>

                <div className={'section-2-services-container'}>
                    <div className={'section-2-services-text'}>
                        <h3>Soporte TI</h3>
                        <p>Servicio técnico especializado en reparación, mantenimiento y optimización de equipos.</p>
                    </div>
                    <div className={'section-2-services-button'}>
                        <button onClick={() => setIsOpen2(true)} type="submit">Lo quiero!</button>
                    </div>
                </div>
                <div className={'section-2-services-container'}>
                <div className={'section-2-services-text'}>
                    <h3>Sistemas Empresariales a Medida</h3>
                    <p>Desarrollamos soluciones como ERP, CRM y sistemas de gestión para optimizar tu negocio.</p>
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
                <div className={'modal-overlay'} onClick={() => setIsOpen(false)}>
                    <div className={'modal-content'} onClick={(e) => e.stopPropagation()}>
                        <h2 >Soluciones Web Personalizadas</h2>
                        <p>Creación de sitios web a medida, sin límites, para negocios, educación y más.</p>
                        <div className={'modal-grid'}>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Smodal1} alt="img-modal" />
                                <h3>Diseñamos sitios web a medida, sin límites.</h3>
                                <p>Webs únicas y personalizadas según tus necesidades.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Smodal2} alt="img-modal" />
                                <h3>Tiendas online, páginas informativas y aulas virtuales.</h3>
                                <p>Soluciones digitales para negocios, educación y más.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Smodal3} alt="img-modal" />
                                <h3>Convertimos tu idea en realidad con tecnología de vanguardia.</h3>
                                <p>Usamos herramientas modernas para hacer crecer tu proyecto.</p>
                            </div>
                        </div>

                        {/* Línea de tiempo horizontal */}
                        <div className="timeline-horizontal">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Inicio</h3>
                                    <p>Definimos los objetivos y requerimientos.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Diseño</h3>
                                    <p>Creamos la interfaz y experiencia de usuario.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Desarrollo</h3>
                                    <p>Programamos y configuramos el sitio web.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Lanzamiento</h3>
                                    <p>Publicamos el sitio optimizado y funcional.</p>
                                </div>
                            </div>
                        </div>

                        <div className={'modal-button'}>
                            <button className={'btn-modal'} onClick={() => setIsOpen(false)}>
                                Cerrar
                            </button>
                            <button type="submit" className={'btn-modal'} onClick={() => navigate("/contact")}>Contactanos</button>
                        </div>
                    </div>
                </div>
            )}
            {isOpen2 && (
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <h2 >Soporte TI</h2>
                        <p>Servicio técnico especializado en reparación, mantenimiento y optimización de equipos.</p>
                        <div className={'modal-grid'}>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Rmodal1} alt="img-modal" />
                                <h3>Mantenimiento y reparación de computadoras y laptops.</h3>
                                <p>Diagnóstico, limpieza y reparación para mantener tu equipo en óptimas condiciones.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Rmodal2} alt="img-modal" />
                                <h3>Venta de repuestos y optimización de sistemas.</h3>
                                <p>Componentes de calidad y mejoras de software para mayor rendimiento.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Rmodal3} alt="img-modal" />
                                <h3>Soluciones rápidas y efectivas para tu tecnología.</h3>
                                <p>Soporte técnico ágil para resolver problemas y mejorar tu experiencia digital.</p>
                            </div>
                        </div>

                        {/* Línea de tiempo horizontal */}
                        <div className="timeline-horizontal">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Recepción del equipo</h3>
                                    <p>El cliente nos entrega la computadora o laptop para evaluación.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Diagnóstico</h3>
                                    <p>Realizamos pruebas para detectar fallas de hardware y software.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Reparación</h3>
                                    <p>Sustitución de repuestos, limpieza interna, eliminación de virus, etc.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Entrega al cliente</h3>
                                    <p>Se entrega el equipo reparado con recomendaciones de mantenimiento.</p>
                                </div>
                            </div>
                        </div>

                        <div className={'modal-button'}>
                            <button className={'btn-modal'} onClick={() => setIsOpen2(false)}>
                                Cerrar
                            </button>
                            <button type="submit" className={'btn-modal'} onClick={() => navigate("/contact")}>Contactanos</button>
                        </div>
                    </div>
                </div>
            )}
            {isOpen3 && (
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <h2 >Sistemas Empresariales a Medida</h2>
                        <p>Desarrollamos soluciones como ERP, CRM y sistemas de gestión para optimizar tu negocio.</p>
                        <div className={'modal-grid'}>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Emodal1} alt="img-modal" />
                                <h3>ERP, CRM, puntos de venta e inventarios.</h3>
                                <p>Automatiza procesos con sistemas integrales que optimizan la gestión empresarial.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Emodal2} alt="img-modal" />
                                <h3>Sistemas para restaurantes y gestión empresarial.</h3>
                                <p>Soluciones digitales para mejorar la administración y eficiencia de tu negocio.</p>
                            </div>
                            <div className={'modal-grid-item'}>
                                <img className={'img-fluid'} src={Emodal3} alt="img-modal" />
                                <h3>Optimiza tu negocio con tecnología eficiente. 🚀</h3>
                                <p>Impulsa tu empresa con herramientas diseñadas para aumentar productividad y control.</p>
                            </div>
                        </div>

                        {/* Línea de tiempo horizontal */}
                        <div className="timeline-horizontal">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Análisis de necesidades</h3>
                                    <p>Se recopilan los requisitos del negocio para definir la mejor solución tecnológica.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Desarrollo y programación</h3>
                                    <p>Se construye el sistema, integrando módulos como ventas, inventarios y clientes.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Pruebas y ajustes</h3>
                                    <p>Se realizan pruebas funcionales y de usuario para garantizar estabilidad y rendimiento.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Implementación</h3>
                                    <p>Se instala el sistema en la empresa y se capacita al personal.</p>
                                </div>
                            </div>
                        </div>

                        <div className={'modal-button'}>
                            <button className={'btn-modal'} onClick={() => setIsOpen3(false)}>
                                Cerrar
                            </button>
                            <button type="submit" className={'btn-modal'} onClick={() => navigate("/contact")}>Contactanos</button>
                        </div>
                    </div>
                </div>
            )}

</>
    )
}

