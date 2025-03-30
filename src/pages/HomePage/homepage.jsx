import React, {useState, useRef, useEffect} from 'react'
import '@/styles/HomePage/homePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HeadProvider } from "react-head"
import ImagenPrueba from "@/assets/LogoNL.png"
import solucionesWeb from "@/assets/soluciones-web.png";
import soporteTI from "@/assets/soporte-ti.png";
import sistemaEmpresarial from "@/assets/erp.jpg";
import cardImage from "@/assets/card-home.png";
const slides_home = [
    { image: ImagenPrueba,title: "Abraza la transformación digital", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#"},
    { image: ImagenPrueba,title: "Abraza la transformación digital 2", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#" },
    { image: ImagenPrueba, title: "Abraza la transformación digital 3", text: "Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.", link:"#" }
  ];
export default function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [Movil, esmovil] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            esmovil(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
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
                pagination={Movil ? { clickable: true } : false}
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
        <section className={'container-sm services'}>
            <h2>Algunos de nuestros Servicios</h2>
            <div className={'row mt-5 gx-4 pb-5 flex-md-row flex-sm-column'}>
                <div className={'media-text col-md-5 align-self-center order-sm-1 order-md-0 mt-4 mt-md-0'}>
                    <h3>Soluciones Web Personalizadas</h3>
                    <p className='py-3'>Diseñamos y desarrollamos tu sitio web a la medida, sin restricciones. Ya sea una tienda en línea, una página informativa o un aula virtual, nuestro equipo de expertos convierte tu visión en realidad. 🚀</p>
                    <a href='/services' className='btn-details'>Ver más</a>
                </div>
                <div className={'media-image col-md-6 ms-md-auto order-sm-0 order-md-1 d-flex'}>
                    <img className={'img-fluid m-md-auto ms-lg-auto'} src={solucionesWeb} alt="Imagen" />
                </div>
            </div>
            <div className={'row gx-4 py-5 flex-md-row flex-sm-column'}>
                <div className={'media-text order-sm-1 col-md-5 align-self-center mt-4 mt-md-0'}>
                    <h3>Soporte TI</h3>
                    <p className='py-3'>Brindamos mantenimiento, reparación de laptops y computadoras, venta de repuestos y mucho más. Confía en nuestros expertos para mantener tu tecnología en óptimas condiciones. 🔧💻</p>
                    <a href='/services' className='btn-details'>Ver más</a>
                </div>
                <div className={'media-image order-sm-0 col-md-6 me-md-auto m-sm-auto d-flex'}>
                    <img className={'img-fluid me-lg-auto'} src={soporteTI} alt="Imagen" />
                </div>
            </div>
            <div className={'row gx-4 pt-5 flex-md-row flex-sm-column'}>
                <div className={'media-text col-md-5 align-self-center order-sm-1 order-md-0 mt-4 mt-md-0'}>
                    <h3>Sistemas Empresariales a Medida</h3>
                    <p className='py-3'>Optimiza la gestión de tu negocio con nuestras soluciones ERP, CRM, puntos de venta, control de inventarios, sistemas para restaurantes y mucho más.💼</p>
                    <a href='/services' className='btn-details'>Ver más</a>
                </div>
                <div className={'media-image col-md-6 ms-md-auto m-sm-auto order-sm-0 order-md-1 d-flex'}>
                    <img className={'img-fluid ms-lg-auto'} src={sistemaEmpresarial} alt="Imagen" />
                </div>
            </div>
        </section>
        <section className={'short-us container-md'}>
            <div className={'row'}>
                <div className='col-md-5 order-1 align-self-center mx-auto mt-lg-0 mt-sm-4'>
                    <h2>Impulsamos tu negocio con tecnología</h2>
                    <p className='py-3'>Somos especialistas en desarrollo web, soporte TI y sistemas empresariales. Ofrecemos soluciones personalizadas para optimizar tu empresa y llevarla al siguiente nivel. ¡Hacemos tu visión realidad!🚀</p>
                    <a href='/contact' className='btn-details'>Hablemos</a>
                </div>
                <div className='col-md-6 order-0 media'>
                    <img className={'img-fluid'} src={cardImage} alt="Imagen" />
                </div>
            </div>
        </section>
        <section className={'section-4 '}>
            <h2>Impulsa tu negocio con la transformación digital</h2>
            <button  type={"submit"} onClick={() => navigate("/contact")} >
                Contactenos
            </button>
        </section>
    </>
  )
}



