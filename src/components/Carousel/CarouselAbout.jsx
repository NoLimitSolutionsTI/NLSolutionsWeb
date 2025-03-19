import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '@/styles/components/Carousel/cauroselAbot.scss';

const personal = [
    {
        names: "Nombres Completos",
        cargo: "Desarrollador Fullstack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et, fugiat, voluptas, labore, aspernatur, quae, quia, ipsa, dolorem, eaque, velit.",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in/enzomartinez24/",
        github: "https://github.com/EnzoMartinez01",
        instagram: "https://www.instagram.com/iamenzo_01/"
    },
    {
        names: "Nombres Completos",
        cargo: "Desarrollador Fullstack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et, fugiat, voluptas, labore, aspernatur, quae, quia, ipsa, dolorem, eaque, velit.",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in/enzomartinez24/",
        github: "https://github.com/EnzoMartinez01",
        instagram: "https://www.instagram.com/iamenzo_01/"
    },
    {
        names: "Nombres Completos",
        cargo: "Desarrollador Fullstack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et, fugiat, voluptas, labore, aspernatur, quae, quia, ipsa, dolorem, eaque, velit.",
        image: "https://i.imgur.com/Sup9hpK.png",
        linkedin: "https://www.linkedin.com/in//",
        github: "https://github.com/",
        instagram: "https://www.instagram.com//"
    }
];

const CarouselAbout = () => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{ nextEl: ".carousel-container .swiper-button-next", prevEl: ".carousel-container .swiper-button-prev" }}
            >
                {personal.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-caurosel-about">
                            <div className={'card-info'}>
                                <h3>{person.names}</h3>
                                <h4>{person.cargo}</h4>
                                <p>{person.description}</p>
                                <div className={'social-media'}>
                                    <a href={person.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                                    <a href={person.github} target="_blank"><i className="fa-brands fa-github"></i></a>
                                    <a href={person.instagram} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                            <img src={person.image}  className="card-img-about"  alt={person.names}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
};

export default CarouselAbout;