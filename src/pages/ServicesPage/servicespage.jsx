import React from "react";
import '@/styles/ServicesPage/servicesPage.scss'
import Caurosel from "@/components/Carousel/Caurosel.jsx";
import { Head} from "react-head"

export default function ServicesPage() {
    return (
        <>
          <Head>
            <title>NL Solutions TI | Services </title>
            <meta name="description" content="Esta es la página de servicios de mi aplicación."/>
          </Head>
          <section className={'slider-section'}>
          <div className={'slider-container'}>
            <div>
              <img src="/src/assets/LogoNL.png" alt="Img-slider" />
            </div>
            <div className={'slider-text'}>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          </section>

            <section className={'section-2-services'}>
                <h2 className={'title-section-2'}>Lorem ipsum dolor lorem</h2>
              <div className={'section-2-services-container'}>
                <div className={'section-2-services-text'}>
                    <h3>Lorem ipsum dolor sit amet consectetur</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>
                <div className={'section-2-services-button'}>
                    <button type="submit">Lo quiero!</button>
                </div>
              </div>
                <div className={'section-2-services-container'}>
                    <div className={'section-2-services-text'}>
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                        </ul>
                    </div>
                    <div className={'section-2-services-button'}>
                        <button type="submit">Lo quiero!</button>
                    </div>
                </div>
                <div className={'section-2-services-container'}>
                <div className={'section-2-services-text'}>
                    <h3>Lorem ipsum dolor sit amet consectetur</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>
                    <div className={'section-2-services-button'}>
                    <button type="submit">Lo quiero!</button>
                </div>
            </div>
            </section>

          <section className={'icons-section container'}>
            <h3 className={'icon-title'}>Lorem ipsum dolor lorem ipsum ipsum</h3>
            <div className={'icons'}>
              <div className={'icon-block'}>
                <span className={'icon'}>X</span>
                <p className={'icon-text'}>Loremanzo</p>
              </div>
              <div className={'icon-block'}>
                <span className={'icon'}>X</span>
                <p className={'icon-text'}>Loremanzo</p>
              </div>
      <div className={'icon-block'}>
        <span className={'icon'}>X</span>
        <p className={'icon-text'}>Loremanzo</p>
      </div>
      <div className={'icon-block'}>
        <span className={'icon'}>X</span>
        <p className={'icon-text'}>Loremanzo</p>
      </div>
      <div className={'icon-block'}>
        <span className={'icon'}>X</span>
        <p className={'icon-text'}>Loremanzo</p>
      </div>
    </div>
  </section>

  <section className={'card-service container'}>
    <h2 className={'title'}>Lorem ipsum dolor lorem ipsum</h2>
    <h4>Lorem ipsum dolor lorem ipsumLorem ipsum dolor lorem ipsumLorem ipsum dolor lorem ipsum</h4>
<Caurosel/>
  </section>


<section className={'section-4'}>
          <h2>¿Lorem ipsum dolor sit amet consectetur?</h2>
          <button type="submit">Lorem ipsum</button>
</section>
</>
    )
}