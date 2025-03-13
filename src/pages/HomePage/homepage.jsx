import React from 'react'
import './homepage.css'

export default function Homepage() {
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
              <button type="submit">Lorem ipsus prueba</button>
            </div>
          </div>
        <div className={'slider-footer'}>
          <div>
              <h2>Slider 1</h2>
          </div>
          <div className={'active'}>
              <h2>Slider 2</h2>
          </div>
          <div>
              <h2>Slider 3</h2>
          </div>
        </div>
      </section>
      <section className={'section-2'}>
        <h2>Lorem ipsum dolor</h2>
        <div className={'first-media'}>
            <div className={'media-text'}>
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button type="submit">Ipsus</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'second-media'}>
            <div className={'media-text'}>
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button type="submit">Ipsus</button>
            </div>
            <div className={'media-image'}>
                <img src="" alt="Imagen" />
            </div>
        </div>
        <hr />
        <div className={'first-media'}>
              <div className={'media-text'}>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <button type="submit">Ipsus</button>
              </div>
              <div className={'media-image'}>
                  <img src="" alt="Imagen" />
              </div>
        </div>
      </section>
      <section className={'section-3'}>
          <div className={'section-3-content'}>
              <div>
                  <h2>Lorem ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus, quisquam, quos, dolorum, consequuntur, odit, et, fugiat, voluptas, labore, aspernatur, quae, quia, ipsa, dolorem, eaque, velit.</p>
                  <button type="submit">Lorem psus</button>
              </div>
              <div>
                  <img src="" alt="Imagen" />
              </div>
          </div>
      </section>
      <section className={'section-4'}>
          <h2>¿Lorem ipsum dolor sit amet consectetur?</h2>
          <button type="submit">Lorem ipsum</button>
      </section>
    </>
  )
}
