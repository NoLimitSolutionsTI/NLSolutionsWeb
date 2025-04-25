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
        title: "Proyecto A",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "https://i.imgur.com/Sup9hpK.png",
    },
    {
        title: "Proyecto B",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "https://i.imgur.com/Sup9hpK.png",
    },
    {
        title: "Proyecto C",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "https://i.imgur.com/Sup9hpK.png",
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
