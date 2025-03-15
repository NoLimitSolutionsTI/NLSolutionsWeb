import React from 'react'
import '@/styles/components/Footer/footer.scss'

export default function Footer() {
  return (
    <>
        <footer>
            <div className={'footer-content'}>
                <div className={'logo-footer'}>
                    <img src="/src/assets/nl-logotype-min.webp" alt="Logo NL"/>
                </div>
                <div className={'nav-container'}>
                    <h3>Explora</h3>
                    <ul className={'nav-footer'}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className={'nav-container'}>
                    <h3>Contacto</h3>
                    <ul className={'nav-footer'}>
                        <li><a href="">Email</a></li>
                        <li><a href="">Whatsapp</a></li>
                    </ul>
                </div>
                <div className={'nav-container'}>
                    <h3>Siguenos</h3>
                    <ul className={'nav-footer'}>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">TikTok</a></li>
                    </ul>
                </div>
            </div>
            <div className={'copyright'}>
                <h3>© 2025 NoLimitSolutions TI - Todos los derechos reservados</h3>
            </div>
        </footer>
    </>
  )
}
