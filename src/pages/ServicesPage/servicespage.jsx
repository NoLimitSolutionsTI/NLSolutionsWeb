import React from "react";
import "./servicespage.css";
import Caurosel from "@/components/Carousel/Caurosel.jsx";

export default function ServicesPage() {
    return (
        <>
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

      <section className={'container'}>
 
  <h2 className={'title'}>Lorem ipsum dolor lorem</h2>

  <div className={'content'}>
    <div className={'card'}>
      <div className={'card-text'}>
        <h3 className={'card-title'}>Lorem ipsum dolor sit amet</h3>
        <ul className={'card-list'}>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
        </ul>
      </div>
      <button className={'btn'}>Lo quiero</button>
    </div>

    <div className={'card'}>
      <div className={'card-text'}>
        <h3 className={'card-title'}>Lorem ipsum dolor sit amet</h3>
        <ul className={'card-list'}>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
        </ul>
      </div>
      <button className={'btn'}>Lo quiero</button>
    </div>

    <div className={'card'}>
      <div className={'card-text'}>
        <h3 className={'card-title'}>Lorem ipsum dolor sit amet</h3>
        <ul className={'card-list'}>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur dolor sit amet</li>
        </ul>
      </div>
      <button className={'btn'}>Lo quiero</button>
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