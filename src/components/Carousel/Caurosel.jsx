import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Caurosel.css";

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
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                pagination={{ clickable: true }}
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
                                <button className="card-button">Más información </button>
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
