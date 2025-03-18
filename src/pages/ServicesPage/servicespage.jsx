import React from "react";
import '@/styles/ServicesPage/servicesPage.scss'
import Caurosel from "@/components/Carousel/Caurosel.jsx";
import {Helmet} from "react-helmet";

export default function ServicesPage() {
    return (
        <>
          <Helmet>
            <title>NL Solutions TI | Services </title>
            <meta name="description" content="Esta es la página de servicios de mi aplicación."/>
          </Helmet>
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

          <section className={'section-2'}>
            <div className={'list-container'}>

                <h2 className={'list-title'}>Lorem Ipsum dolor lorem ipsum ipsum</h2>

              <div className="text">
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur dolor si</li>
                  <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
                </ul>
              </div>
              <button className="btn">Lo quiero!</button>
              <div className="text">
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur dolor si</li>
                  <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
                </ul>
              </div>
              <button className="btn">Lo quiero!</button>
              <div className="text">
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur dolor si</li>
                  <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
                </ul>
              </div>
              <button className="btn">Lo quiero!</button>
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