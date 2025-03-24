import React, {useState, useRef} from 'react'
import '@/styles/HomePage/homePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HeadProvider } from "react-head"
import ImagenPrueba from "@/assets/LogoNL.png"
const slides_home = [
    { image: ImagenPrueba,title: "Abraza la transformación digital", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#"},
    { image: ImagenPrueba,title: "Abraza la transformación digital 2", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#" },
    { image: ImagenPrueba, title: "Abraza la transformación digital 3", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#" }
  ];
export default function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
  return (
    <>
        <HeadProvider>
        <title>NL Solutions TI | Home </title>
        <meta name="description" content="Esta es la página principal de mi aplicación."/>
        </HeadProvider>
        <section className="slider-section ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 7000 }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slides_home.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slider-container">
                        <img src={slide.image}/>
                        <div className="slider-text">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                            <a href={slide.link} className='btn-details' onClick={() => navigate("/services")}>Ver más</a>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className='slides-previews'>
                {slides_home.map((slide,index) =>(
                    <div
                        key={index}
                        className={`slide-preview ${activeIndex === index ? "active" : ""}`}
                        onClick={() => swiperRef.current?.slideTo(index)}
                    >
                        <b>{slide.title}</b>
                        <span>{slide.text}</span>
                    </div>
                ))}
            </div>
        </section>

      <section className={'section-2 container-sm' }>
        <h2>Algunos de nuestros Servicios</h2>
        <div className={'first-media'}>
            <div className={'media-text'}>
                <h3>Soluciones Web Personalizadas</h3>
                <p>Diseñamos y desarrollamos tu sitio web a la medida, sin restricciones. Ya sea una tienda en línea, una página informativa o un aula virtual, nuestro equipo de expertos convierte tu visión en realidad. 🚀</p>
                <button type={"submit"} onClick={() => navigate("/services")}>Ver más</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr/>
        <div className={'second-media'}>
            <div className={'media-text'}>
                <h3>Soporte TI</h3>
                <p>Brindamos mantenimiento, reparación de laptops y computadoras, venta de repuestos y mucho más. Confía en nuestros expertos para mantener tu tecnología en óptimas condiciones. 🔧💻</p>
                <button type={"submit"} onClick={() => navigate("/services")}>Ver más</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr/>
        <div className={'first-media'}>
              <div className={'media-text'}>
                  <h3>Sistemas Empresariales a Medida</h3>
                  <p>Optimiza la gestión de tu negocio con nuestras soluciones ERP, CRM, puntos de venta, control de inventarios, sistemas para restaurantes y mucho más.💼</p>
                  <button onClick={() => navigate("/services")} type="submit">Ver más</button>
              </div>
              <div className={'media-image'}>
                  <img src="" alt="Imagen" />
              </div>
        </div>
      </section>
      <section className={'section-3 container'}>
          <div className={'section-3-content'}>
              <div>
                  <h2>Impulsamos tu negocio con tecnología</h2>
                  <p>Somos especialistas en desarrollo web, soporte TI y sistemas empresariales. Ofrecemos soluciones personalizadas para optimizar tu empresa y llevarla al siguiente nivel. ¡Hacemos tu visión realidad!🚀</p>
                  <button onClick={() => navigate("/contact")} type={"submit"}>Hablemos</button>
              </div>
              <div>
                  <img src="" alt="Imagen" className={'img-fluid'} />
              </div>
          </div>
      </section>
      <section className={'section-4 container-sm'}>
          <h2>Impulsa tu negocio con la transformación digital</h2>
          <button type={"submit"} onClick={() => navigate("/contact")} >
              Contactenos
          </button>
      </section>
    </>
  )
}



