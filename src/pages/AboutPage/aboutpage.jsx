import React from "react";
import '@/styles/AboutPage/aboutPage.scss'
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CarouselAbout from "@/components/Carousel/CarouselAbout.jsx";


export default function AboutPage() {
    return (
        <>
            <Helmet>
                    <title>NL Solutions TI | About </title>
                <meta name="description" content="Esta es la página de servicios de mi aplicación."/>
            </Helmet>
            <section className={'slider-section'}>
                <div className={'slider-container'}>
                    <div>
                        <img src="/src/assets/LogoNL.png" alt="Img-slider" />
                    </div>
                    <div className={'slider-text'}>
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </section>
            <section className={'section-2-about'}>
                <div>
                    <h2>¿Lorem ipsum dolor lorem?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className={'mission-vision-container'}>
                    <div className={'mission'}>
                        <h2>MISION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className={'vision'}>
                        <h2>VISIÓN</h2>
                        <p>Lorem ipsum dolor sit amet consectetur dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </section>
            <section className={'section-3-about'}>
                <h2>VALORES DE NL</h2>
                <div className={'valores-list'}>
                    <ul>
                        <li>
                             <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                            Loremanzo
                        </li>                        <hr />
                        <li>
                            <span className={'icon'}>X</span>
                            Loremanzo
                        </li>                        <hr />
                        <li>
                            <span className={'icon'}>X</span>
                            Loremanzo
                        </li>
                        <hr />
                        <li>
                            <span className={'icon'}>X</span>
                            Loremanzo
                        </li>                        <hr />
                        <li>
                            <span className={'icon'}>X</span>
                            Loremanzo
                        </li>
                    </ul>
                </div>
            </section>
            <section className={'card-personal container'}>
                <h2 className={'title'}>Equipo NL</h2>
                <h4>Lorem ipsum dolor lorem ipsumLorem ipsum dolor lorem ipsumLorem ipsum dolor lorem ipsum</h4>
                <CarouselAbout />
            </section>
        </>
    )
}