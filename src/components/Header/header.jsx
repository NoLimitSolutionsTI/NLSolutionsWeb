import React, {useEffect, useState} from 'react'
import '@/styles/components/Header/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {logoNL} from "@/App";
export default function Header() {
  
    
    const [showBar, setShowBar] = useState(window.innerWidth < 1050);
    const [menuOpen, setMenuOpen] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowBar(window.innerWidth < 1050);
            if (window.innerWidth >= 1050) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(()=>{
        const handleScroll= () =>{
            if (window.scrollY >= 90){
                setStickyNav(true)
            } else{
                setStickyNav(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <header className={`${menuOpen ? "active" : ""} ${stickyNav ? "sticky" : ""}`}>
            <a href="/" className="logo">
                {logoNL}
                <span>NL Solutions TI</span>
            </a>

            {showBar && (
                <FontAwesomeIcon
                    icon={menuOpen ? faTimes : faBars}
                    className="icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            )}

            <ul className={`nav-header ${menuOpen ? "open" : ""}`}>
                <div className={'nav-header-container-list'}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="services">Servicios</a></li>
                    <li><a href="about">Nosotros</a></li>
                    <li><a href="contact" className="btn-details-contact">Contacto</a></li>
                </div>
                {showBar && (
                    <div className={'social-header'}>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a></li>
                        </ul>
                    </div>
                )}
            </ul>
        </header>
    );
}
