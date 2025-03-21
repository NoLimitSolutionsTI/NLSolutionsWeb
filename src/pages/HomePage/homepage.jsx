import React from 'react'
import '@/styles/HomePage/homePage.scss'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Helmet} from "react-helmet"


export default function Homepage() {
  return (
    <>
        <Helmet>
        <title>NL Solutions TI | Home </title>
        <meta name="description" content="Esta es la página principal de mi aplicación."/>
        </Helmet>
        <section className={'slider-section'}>
            <div className={'slider-container'}>
                <div>
                    <img src="/src/assets/LogoNL.png" alt="Img-slider" />
                </div>
                <div className={'slider-text'}>
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <button type="submit">Lorem ipsus prueba</button>
                </div>
            </div>
            <div className={'slider-footer'}>
                <div>
                    <h2>Slider 1</h2>
                </div>
                <div className={'active'}>
                    <h2>Slider 2</h2>
                </div>
                <div>
                    <h2>Slider 3</h2>
                </div>
            </div>
        </section>

      <section className={'section-2'}>
        <h2>Algunos de nuestros Servicios</h2>
        <div className={'first-media'}>
            <div className={'media-text'}>
                <h3>Soluciones Web Personalizadas</h3>
                <p>Diseñamos y desarrollamos tu sitio web a la medida, sin restricciones. Ya sea una tienda en línea, una página informativa o un aula virtual, nuestro equipo de expertos convierte tu visión en realidad. 🚀</p>
                <button type="submit">Ver más</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'second-media'}>
            <div className={'media-text'}>
                <h3>Soporte TI</h3>
                <p>Brindamos mantenimiento, reparación de laptops y computadoras, venta de repuestos y mucho más. Confía en nuestros expertos para mantener tu tecnología en óptimas condiciones. 🔧💻</p>
                <button type="submit">Ver más</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'first-media'}>
              <div className={'media-text'}>
                  <h3>Sistemas Empresariales a Medida</h3>
                  <p>Optimiza la gestión de tu negocio con nuestras soluciones ERP, CRM, puntos de venta, control de inventarios, sistemas para restaurantes y mucho más.💼</p>
                  <button type="submit">Ver más</button>
              </div>
              <div className={'media-image'}>
                  <img src="" alt="Imagen" />
              </div>
        </div>
      </section>
      <section className={'section-3'}>
          <div className={'section-3-content'}>
              <div>
                  <h2>Impulsamos tu negocio con tecnología</h2>
                  <p>Somos especialistas en desarrollo web, soporte TI y sistemas empresariales. Ofrecemos soluciones personalizadas para optimizar tu empresa y llevarla al siguiente nivel. ¡Hacemos tu visión realidad!🚀</p>
                  <button type="submit">Hablemos</button>
              </div>
              <div>
                  <img src="" alt="Imagen" />
              </div>
          </div>
      </section>
      <section className={'section-4'}>
          <h2>Impulsa tu negocio con la transformación digital</h2>
          <button type="submit">Contactenos</button>
      </section>
    </>
  )
}



