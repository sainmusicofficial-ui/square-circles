import './style.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { WhoWeAre } from './components/WhoWeAre'
import { WhatWeDo } from './components/WhatWeDo'
import { OurProcess } from './components/OurProcess'
import { FeaturedProjects } from './components/FeaturedProjects'
import { WhyChooseUs } from './components/WhyChooseUs'
import { PricingPreview } from './components/PricingPreview'
import { Testimonials } from './components/Testimonials'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

import { initAnimations } from './animations/gsap'
import { initParallax } from './animations/parallax'
import { initCursorGlow } from './animations/cursor'
import { initSmoothScroll } from './animations/lenis'
import { initMagneticButtons } from './animations/magnetic'
import { initScrollReveal } from './animations/scrollReveal'

import './animations/scrollReveal'


import { About } from './components/About'
import { Services2 } from './components/Services2'
import { Portfolio2 } from './components/Portfolio2'
import { Pricing2 } from './components/Pricing2'
import { Contact2 } from './components/Contact2'

const path = window.location.pathname

document.querySelector('#app').innerHTML = `

  <div class="website">

    <div class="cursor-glow"></div>

    <!-- Background Glows -->
    <div class="bg-glow glow-1"></div>
    <div class="bg-glow glow-2"></div>

    ${Navbar()}

    ${
  path === '/about'

  ? About()

  : path === '/services'
  
  ? Services2()

  : path === '/portfolio'

  ? Portfolio2()

  : path === '/pricing'

  ? Pricing2()

  : path === '/contact'

  ? Contact2()

  : `

    ${Hero()}

    ${Stats()}

    ${WhoWeAre()}

    ${WhatWeDo()}

    ${OurProcess()}

    ${FeaturedProjects()}

    ${WhyChooseUs()}

    ${PricingPreview()}

    ${Testimonials()}

    ${FinalCTA()}

  `
}

    ${Footer()}

  </div>

`

/* RESET SCROLL */

window.scrollTo(0, 0)

/* INIT ANIMATIONS */

initAnimations()

initParallax()

initCursorGlow()

initSmoothScroll()

initMagneticButtons()

initScrollReveal()

/* NAVBAR EFFECT */

const navbar = document.querySelector('.navbar')

let lastScroll = 0

window.addEventListener('scroll', () => {

  const currentScroll = window.pageYOffset

  /* GLASS ACTIVE */

  if(currentScroll > 30){

    navbar.classList.add('scrolled')

  }else{

    navbar.classList.remove('scrolled')

  }

  /* HIDE ON SCROLL DOWN */

  if(currentScroll > lastScroll && currentScroll > 120){

    navbar.classList.add('hide')

  }else{

    navbar.classList.remove('hide')

  }

  lastScroll = currentScroll

})