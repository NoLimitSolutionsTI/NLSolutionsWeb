import React from "react";
import '@/styles/AboutPage/aboutPage.scss'
import { HeadProvider } from "react-head"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLightbulb, faStar, faHandshake, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import CarouselAbout from "@/components/Carousel/CarouselAbout.jsx";
import AOS from 'aos';
import { rutaImagenes  } from '@/App';


export default function AboutPage() {
    return (
        <>
            <HeadProvider>
                <title>NL Solutions TI | About </title>
                <meta name="description" content="Esta es la página de Nostros de mi aplicación."/>
            </HeadProvider>
            <section className={'slider-section'}>
                <div className={'slider-container'}>
                    <div>
                        <img src={`${rutaImagenes}about-slider.webp`} alt="Img-slider" />
                    </div>
                    <div className={'slider-text'}>
                        <h1>¿Tiene interés en conocernos?</h1>
                        <p>Nos complace compartir la pasión que nos impulsó  en la industria de software.</p>
                    </div>
                </div>
            </section>
            <section className={'section-2-about'}>
                <div className={'why'} data-aos="fade-up">
                    <h2>¿Por qué elegir NoLimitSolutionsTI?</h2>
                    <br/>
                    <p>Creemos que cada desafío presenta una oportunidad de crecimiento y aprendizaje. Nos apasiona encontrar soluciones a problemas complejos y estamos comprometidos con mantenernos actualizados en las últimas tendencias tecnológicas. Nuestro enfoque personalizado nos permite adaptarnos a las necesidades específicas de cada cliente y garantizar resultados sobresalientes.</p>
                </div>
                <div className={'mission-vision-container'}>
                    <div className={'mission'} data-aos="fade-up">
                        <h2>MISION</h2>
                        <br/>
                        <p>Ser una consultoría líder en dar soluciones innovadoras orientadas a la era digital. Resolver los desafíos actuales de manera eficiente y efectiva, mientras capacitamos y empoderamos a futuros programadores a través de una formación espeScializada. Trabajamos en colaboración con nuestros clientes para construir un camino hacia el éxito tecnológico, impulsando el crecimiento y la evolución constante de empresas y profesionales en el ámbito tecnológico.</p>
                    </div>
                    <div className={'vision'} data-aos="fade-down">
                        <h2>VISIÓN</h2>
                        <br/>
                        <p>Aspiramos a transformar la industria a través de la innovación. Buscamos ser reconocidos por nuestro enfoque hacia el futuro y nuestra capacidad para resolver los desafíos emergentes. Así forjar un futuro en el que, las empresas y negocios, encuentren soluciones eficientes y sostenibles para sus necesidades tecnológicas, mientras inspiramos y capacitamos a una nueva generación de programadores que lideren el cambio en el mundo tecnológico. A través de nuestra dedicación y compromiso, nos esforzamos por crear un impacto positivo en la sociedad y contribuir al desarrollo tecnológico global.</p>
                    </div>
                </div>
            </section>
            <section className={'section-3-about container-sm'}>
                <h2 data-aos="fade-up">VALORES DE NL</h2>
                <div className="valores-list">
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faLightbulb} className="icon icon-lightbulb icon-valores" />
                            Innovación
                        </li>
                        <hr />
                        <li data-aos="fade-down" data-aos-delay="100">
                            <FontAwesomeIcon icon={faStar} className="icon icon-star icon-valores" />
                            Calidad
                        </li>
                        <hr />
                        <li data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faHandshake} className="icon icon-handshake icon-valores" />
                            Compromiso
                        </li>
                        <hr />
                        <li data-aos="fade-down" data-aos-delay="100">
                            <FontAwesomeIcon icon={faShieldAlt} className="icon icon-shield icon-valores" />
                            Responsabilidad
                        </li>
                        <hr />
                        <li data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faUsers} className="icon icon-users icon-valores" />
                            Trabajo en equipo
                        </li>
                    </ul>
                </div>
            </section>
            <section className={'card-personal container container-sm'} data-aos="fade-up">
                <h2 data-aos="fade-up" className={'title'}>Equipo NL</h2>
                <h4 data-aos="fade-up" data-aos-delay="100">Unimos talento, creatividad y tecnología para ofrecer soluciones innovadoras y de calidad.</h4>
                <CarouselAbout data-aos="fade-up" data-aos-delay="200"/>
            </section>
        </>
    )
}