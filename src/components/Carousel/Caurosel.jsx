import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '@/styles/components/Carousel/carousel.scss';
import {useState, useEffect, useRef} from "react";



const projects = [
    {
        title: "Ecommerce",
        description:
            "Tienda online enfocada en ventas: catálogo administrable, carrito de compras, pasarela de pago segura y panel para gestión de productos, pedidos y clientes.",
        image: "https://i.imgur.com/KIFZfnH.png",
    },
    {
        title: "Lujan Rabello & Abogados",
        description:
            "Landing informativa para estudio jurídico: presentación de servicios y áreas de práctica, equipo, testimonios y formulario de contacto con llamada a la acción.",
        image: "https://i.imgur.com/3pF5biD.png",
    },
    {
        title: "Portafolios",
        description:
            "Galería de portafolios para distintas personas: plantillas personalizables con secciones de 'Sobre mí', proyectos y contacto para publicar su trabajo de forma profesional.",
        image: "https://i.imgur.com/4Or7LG8.png",
    },
];
const Carousel = () => {
    const swiperRef = useRef(null);
    const [PantallaPequena, setPantallaPequena] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const manejarResize = () => setPantallaPequena(window.innerWidth <= 768);
        window.addEventListener("resize", manejarResize);
        return () => window.removeEventListener("resize", manejarResize);
    }, []);
    return (
        <div className="carousel-container container-sm">
            <Swiper

                modules={[Navigation, Pagination]}
                spaceBetween={20}
                loop={true}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                pagination={PantallaPequena ?{ clickable: true }: false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    AOS.refresh();
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2},
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-caurosel">
                            <img src={project.image}  className="card-img" />
                            <div className="card-overlay">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer">
                                <button  className="card-button">Visita la web </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Botones de navegación */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default Carousel;
