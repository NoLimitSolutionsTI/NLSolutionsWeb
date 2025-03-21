import React, {useState, useRef} from 'react'
import '@/styles/HomePage/homePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HeadProvider } from "react-head"
import ImagenPrueba from "@/assets/LogoNL.png"
const slides_home = [
    { image: ImagenPrueba,title: "Abraza la transformación digital", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"" },
    { image: ImagenPrueba,title: "Slide 2", text: "Descripción del Slide 2" },
    { image: ImagenPrueba, title: "Slide 3", text: "Descripción del Slide 3" },
  ];
export default function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
  return (
    <>
        <HeadProvider>
        <title>NL Solutions TI | Home </title>
        <meta name="description" content="Esta es la página principal de mi aplicación."/>
        </HeadProvider>
        <section className="slider-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 33500 }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slides_home.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slider-container">
                        <img src={slide.image}/>
                        <div className="slider-text">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                            <a href={slide.link}>Ver más</a>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className='slides-previews'>
                {slides_home.map((slide,index) =>(
                    <div onClick={() => swiperRef.current?.slideTo(index)} key={index}>
                        <b>{slide.title}</b>
                        <span>{slide.text}</span>
                    </div>
                ))}
            </div>
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
