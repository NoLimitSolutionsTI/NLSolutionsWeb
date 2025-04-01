import React, {useEffect, useState} from 'react'
import '@/styles/components/Header/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const logoNL = <svg width="300" height="345" viewBox="0 0 300 345" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M148.802 18.975C148.802 18.975 107.137 108.27 77.1289 121.785C77.1289 121.785 74.598 122.795 74.3656 122.992C74.1331 123.19 74.0758 123.784 74.3656 123.855C74.6554 123.926 77.1353 124.641 78.3378 125.235C79.5404 125.829 98.2992 138.69 110.979 159.563C123.659 180.435 147.403 222.794 149.147 228.908H169.872C169.872 228.908 167.401 220.876 165.555 216.66C163.708 212.444 143.719 164.926 134.813 152.49C134.813 152.49 125.543 136.503 117.542 129.202C117.542 129.202 112.568 125.493 111.152 124.717C111.152 124.717 110.841 124.265 111.152 124.027C111.463 123.79 120.785 116.432 123.414 112.987C126.044 109.543 135.253 94.8577 137.922 90.5625C140.59 86.2672 155.781 54.0044 157.61 49.68C159.439 45.3556 169.594 20.1183 170.045 19.1475L148.802 18.975Z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M150.184 116.983C150.184 116.983 191.841 206.277 221.841 219.793C221.841 219.793 224.371 220.804 224.605 221C224.838 221.197 224.893 221.792 224.605 221.863C224.316 221.933 221.834 222.649 220.632 223.243C219.43 223.836 200.676 236.698 187.998 257.57C175.319 278.443 151.583 320.804 149.838 326.915H129.119C129.119 326.915 131.589 318.884 133.436 314.668C135.282 310.452 155.266 262.933 164.171 250.498C164.171 250.498 173.437 234.51 181.437 227.21C181.437 227.21 186.409 223.502 187.825 222.725C187.825 222.725 188.136 222.273 187.825 222.035C187.514 221.797 178.195 214.44 175.566 210.995C172.938 207.55 163.731 192.866 161.062 188.57C158.394 184.275 143.207 152.012 141.378 147.688C139.549 143.363 129.397 118.126 128.946 117.155L150.184 116.983Z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M0.619956 122.993C0.619956 122.993 30.3845 118.496 72.1204 66.4125C100.092 32.9033 120.996 1.55251 120.996 1.55251H154.329C154.329 1.55251 118.658 63.0158 114.088 69.8625C110.338 75.4808 83.2097 111.856 65.1305 121.814C65.0424 121.862 64.9545 121.91 64.8667 121.958C64.8667 121.958 59.818 124.144 58.9947 124.2V124.718C58.9947 124.718 73.9684 130.578 87.4913 145.763C101.014 160.947 131.646 205.304 137.576 216.315C143.85 227.964 150.773 239.885 152.429 242.88C152.429 242.88 154.025 245.269 153.983 246.503L120.824 246.675C120.824 246.675 108.127 226.065 99.0626 214.245C89.9983 202.425 79.9207 189.978 74.3656 182.85C68.2627 175.02 46.1335 151.407 42.4149 148.178C38.6964 144.948 18.9959 129.196 7.70092 125.408C7.70092 125.408 2.25739 123.72 0.792662 123.683C0.792662 123.683 0.250882 123.394 0.619956 122.993Z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M298.649 221.318C298.649 221.318 268.911 216.82 227.209 164.738C199.262 131.228 178.375 99.8775 178.375 99.8775H145.07C145.07 99.8775 180.711 161.341 185.278 168.188C189.024 173.806 216.13 210.181 234.193 220.139C234.281 220.188 234.369 220.236 234.458 220.283C234.458 220.283 239.501 222.468 240.324 222.525V223.043C240.324 223.043 225.363 228.902 211.852 244.088C198.341 259.273 167.734 303.629 161.809 314.64C155.539 326.289 148.624 338.21 146.968 341.205C146.968 341.205 145.374 343.594 145.415 344.828L178.547 345C178.547 345 191.233 324.39 200.289 312.57C209.346 300.75 219.415 288.303 224.966 281.175C231.064 273.345 253.174 249.732 256.89 246.503C260.607 243.273 280.289 227.521 291.575 223.733C291.575 223.733 297.014 222.045 298.476 222.008C298.476 222.008 299.019 221.719 298.649 221.318Z"/>
  </svg>

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
                <li><a href="/">Inicio</a></li>
                <li><a href="services">Servicios</a></li>
                <li><a href="about">Nosotros</a></li>
                <li><a href="contact" className="btn-details">Contacto</a></li>
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
