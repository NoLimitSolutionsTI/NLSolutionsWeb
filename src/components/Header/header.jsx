import React from 'react'
import '@/styles/Header/header.scss'

export default function header() {
  return (
    <>
        <header>
            <div className={'logo'}>
                <img src="/src/assets/LogoNL.png" alt="logo-nl" />
                <h1>NL Solutions TI</h1>
            </div>

            <ul className={'nav-header'}>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </header>
    </>
  )
}
