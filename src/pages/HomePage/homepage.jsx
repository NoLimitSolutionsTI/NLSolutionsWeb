import React from 'react'
import '@/styles/HomePage/homePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet} from "react-helmet"


export default function Homepage() {
  return (
    <>
        <Helmet>
        <title>NL Solutions TI | Home </title>
        <meta name="description" content="Esta es la página principal de mi aplicación."/>
        </Helmet>
        <section className="slider-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 15000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="slider-container">
                        <img src="/src/assets/LogoNL.png" alt="Img-slider" />
                        <div className="slider-text">
                            <h1> Slide 1</h1>
                            <p>Descripción </p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-container">
                        <img src="/src/assets/LogoNL.png" alt="Img-slider" />
                        <div className="slider-text">
                            <h1> Slide 2</h1>
                            <p>Descripción </p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-container">
                        <img src="/src/assets/LogoNL.png" alt="Img-slider" />
                        <div className="slider-text">
                            <h1> Slide 3</h1>
                            <p>Descripción </p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
      <section className={'section-2'}>
        <h2>Lorem ipsum dolor</h2>
        <div className={'first-media'}>
            <div className={'media-text'}>
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button type="submit">Ipsus</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'second-media'}>
            <div className={'media-text'}>
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button type="submit">Ipsus</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'first-media'}>
              <div className={'media-text'}>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <button type="submit">Ipsus</button>
              </div>
              <div className={'media-image'}>
                  <img src="" alt="Imagen" />
              </div>
        </div>
      </section>
      <section className={'section-3'}>
          <div className={'section-3-content'}>
              <div>
                  <h2>Lorem ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et, fugiat, voluptas, labore, aspernatur, quae, quia, ipsa, dolorem, eaque, velit.</p>
                  <button type="submit">Lorem psus</button>
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
