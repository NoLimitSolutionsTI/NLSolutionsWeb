import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '@/styles/components/Carousel/cauroselAbot.scss';
import { useState, useEffect } from "react";

const personal = [
    {
        names: "Enzo Martinez",
        cargo: "Desarrollador Fullstack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et.",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in/enzomartinez24/",
        github: "https://github.com/EnzoMartinez01",
        instagram: "https://www.instagram.com/iamenzo_01/"
    },
    {
        names: "Aldhair Lujan Nicolini",
        cargo: "Desarrollador Fullstack",
        description:
            "Apasionado por la tecnología y el desarrollo de software, con experiencia en la creación de aplicaciones web modernas y escalables. ",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in/aldhair-lujan-nicolini-997278173/",
        github: "https://github.com/Aldhair11",
        instagram: "https://www.instagram.com/aldhair_nicolini/"
    },
    {
        names: "Anthony Lecarnaque",
        cargo: "Desarrollador Fullstack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et. ",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in/anthonylecarnaque/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com//"
    }
];

const CarouselAbout = () => {
    const [PantallaPequena, setPantallaPequena] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const manejarResize = () => setPantallaPequena(window.innerWidth <= 930);
        window.addEventListener("resize", manejarResize);
        return () => window.removeEventListener("resize", manejarResize);
    }, []);
    return (
        <div className="carousel-container container-sm">
            <Swiper
                modules={[Navigation,Pagination]}
                spaceBetween={20}
                loop={true}
                navigation={PantallaPequena ? false :{ nextEl: ".carousel-container .swiper-button-next", prevEl: ".carousel-container .swiper-button-prev" }}
                pagination={PantallaPequena ?{ clickable: true }: false}

            >
                {personal.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-caurosel-about">
                            <div className={'card-info'}>
                                <h3>{person.names}</h3>
                                <h4>{person.cargo}</h4>
                                <p>{person.description}</p>
                                <div className="social-media">
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                                    </a>
                                    <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                                    </a>
                                    <a href={person.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                                    </a>
                                </div>
                            </div>
                            <img src={person.image}  className="card-img-about "  alt={person.names}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {!PantallaPequena && (
                <>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </>
            )}
        </div>
    );
};
export default CarouselAbout;