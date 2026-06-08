import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from 'scrollreveal';

gsap.registerPlugin(ScrollTrigger)

export const initScrollReveal = () => {

  /* =========================
     HERO
  ========================= */

  gsap.from('.hero-badge', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.hero-title', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: 'power4.out'
  })

  gsap.from('.hero-description', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  })

  gsap.from('.hero-buttons', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
  })

  /* =========================
     STATS
  ========================= */

  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },

    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'all'
  })

  /* =========================
     ABOUT LEFT
  ========================= */

  gsap.from('.about-left', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },

    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    clearProps: 'all'
  })

  /* =========================
     ABOUT CARDS
  ========================= */

  gsap.from('.about-card', {
    scrollTrigger: {
      trigger: '.about-right',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },

    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'all'
  })

  /* SERVICES */

   gsap.from('.service-card',{

  scrollTrigger:{
    trigger:'.services-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:60,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* PROCESS SECTION */

gsap.from('.process-card',{

  scrollTrigger:{
    trigger:'.process-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* PROJECTS */

gsap.from('.project-card',{

  scrollTrigger:{
    trigger:'.projects-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.18,
  ease:'power3.out',
  clearProps:'all'

})

/* WHY SECTION */

gsap.from('.why-card',{

  scrollTrigger:{
    trigger:'.why-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* PRICING */

gsap.from('.pricing-card',{

  scrollTrigger:{
    trigger:'.pricing-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.18,
  ease:'power3.out',
  clearProps:'all'

})

/* TESTIMONIALS */

gsap.from('.testimonial-card',{

  scrollTrigger:{
    trigger:'.testimonials-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.testimonial-dots',{

  scrollTrigger:{
    trigger:'.testimonials-section',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:40,
  opacity:0,
  duration:1,
  delay:0.3,
  ease:'power3.out',
  clearProps:'all'

})

/* FINAL CTA */

gsap.from('.final-cta-title',{

  scrollTrigger:{
    trigger:'.final-cta-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

gsap.from('.final-cta-text',{

  scrollTrigger:{
    trigger:'.final-cta-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.final-cta-buttons',{

  scrollTrigger:{
    trigger:'.final-cta-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:60,
  opacity:0,
  duration:1,
  delay:0.4,
  ease:'power3.out',
  clearProps:'all'

})

/* FOOTER */

gsap.from('.footer-grid > div',{

  scrollTrigger:{
    trigger:'.footer',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:60,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

const sr = ScrollReveal({

  distance:'80px',

  duration:1800,

  delay:120,

  easing:'cubic-bezier(0.16, 1, 0.3, 1)',

  reset:false

});

/* ABOUT HERO */

sr.reveal('.about2-left',{

  origin:'left'

});

sr.reveal('.about2-card',{

  origin:'bottom',

  interval:120

});

sr.reveal('.about2-stat-card',{

  origin:'bottom',

  interval:100

});

/* WHY CHOOSE US */

sr.reveal('.why-card',{

  origin:'bottom',

  interval:120

});

/* VISION */

sr.reveal('.vision-section .vision-card',{

  origin:'bottom',

  interval:150,

  distance:'100px'

});

/* PROCESS */

sr.reveal('.process-item',{

  origin:'bottom',

  interval:120

});

/* PHILOSOPHY */

sr.reveal('.philosophy-heading',{

  origin:'bottom'

});

sr.reveal('.philosophy-card',{

  origin:'bottom',

  interval:120

});

/* CTA */

sr.reveal('.about-cta',{

  origin:'bottom'

});

/* SERVICES PAGE HERO */

gsap.from('.services2-label',{

  scrollTrigger:{
    trigger:'.services2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:40,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.services2-heading',{

  scrollTrigger:{
    trigger:'.services2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1.2,
  delay:0.1,
  ease:'power4.out',
  clearProps:'all'

})

gsap.from('.services2-text',{

  scrollTrigger:{
    trigger:'.services2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  ease:'power3.out',
  clearProps:'all'

})

/* SERVICES CARDS */

gsap.from('.services2-card',{

  scrollTrigger:{
    trigger:'.services2-grid-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.08,
  ease:'power3.out',
  clearProps:'all'

})

/* PROCESS */

gsap.from('.services-process-row',{

  scrollTrigger:{
    trigger:'.services-process-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* STACK */

gsap.from('.stack-card',{

  scrollTrigger:{
    trigger:'.stack-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.08,
  ease:'power3.out',
  clearProps:'all'

})

/* INDUSTRIES */

gsap.from('.industries-card',{

  scrollTrigger:{
    trigger:'.industries-section',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.12,
  ease:'power3.out',
  clearProps:'all'

})

/* CTA */

gsap.from('.services2-cta',{

  scrollTrigger:{
    trigger:'.services2-cta',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

/* PORTFOLIO HERO */

gsap.from('.portfolio2-label',{

  scrollTrigger:{
    trigger:'.portfolio2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:40,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.portfolio2-heading',{

  scrollTrigger:{
    trigger:'.portfolio2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1.2,
  delay:0.1,
  ease:'power4.out',
  clearProps:'all'

})

gsap.from('.portfolio2-text',{

  scrollTrigger:{
    trigger:'.portfolio2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  ease:'power3.out',
  clearProps:'all'

})

/* FILTERS */

gsap.from('.portfolio2-filter',{

  scrollTrigger:{
    trigger:'.portfolio2-filter-section',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:40,
  opacity:0,
  duration:0.8,
  stagger:0.08,
  ease:'power3.out',
  clearProps:'all'

})

/* GALLERY */

gsap.from('.portfolio2-card',{

  scrollTrigger:{
    trigger:'.portfolio2-gallery',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.12,
  ease:'power4.out',
  clearProps:'all'

})

/* RESULTS */

gsap.from('.portfolio2-result-card',{

  scrollTrigger:{
    trigger:'.portfolio2-results',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.1,
  ease:'power3.out',
  clearProps:'all'

})

/* CTA */

gsap.from('.portfolio2-cta',{

  scrollTrigger:{
    trigger:'.portfolio2-cta',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

/* PRICING HERO */

gsap.from('.pricing2-label',{

  scrollTrigger:{
    trigger:'.pricing2-hero',
    start:'top 80%'
  },

  y:40,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.pricing2-heading',{

  scrollTrigger:{
    trigger:'.pricing2-hero',
    start:'top 80%'
  },

  y:80,
  opacity:0,
  duration:1.2,
  delay:0.1,
  ease:'power4.out',
  clearProps:'all'

})

gsap.from('.pricing2-text',{

  scrollTrigger:{
    trigger:'.pricing2-hero',
    start:'top 80%'
  },

  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  ease:'power3.out',
  clearProps:'all'

})

/* PRICING CARDS */

gsap.from('.pricing2-card',{

  scrollTrigger:{
    trigger:'.pricing2-cards-section',
    start:'top 80%'
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.12,
  ease:'power4.out',
  clearProps:'all'

})

/* COMPARISON */

gsap.from('.pricing2-comparison',{

  scrollTrigger:{
    trigger:'.pricing2-comparison',
    start:'top 85%'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

/* FAQ */

gsap.from('.pricing2-faq-item',{

  scrollTrigger:{
    trigger:'.pricing2-faq',
    start:'top 85%'
  },

  y:70,
  opacity:0,
  duration:0.9,
  stagger:0.1,
  ease:'power3.out',
  clearProps:'all'

})

/* CTA */

gsap.from('.pricing2-cta',{

  scrollTrigger:{
    trigger:'.pricing2-cta',
    start:'top 85%'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

/* CONTACT HERO */

gsap.from('.contact2-label',{

  scrollTrigger:{
    trigger:'.contact2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:40,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

gsap.from('.contact2-heading',{

  scrollTrigger:{
    trigger:'.contact2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1.2,
  delay:0.1,
  ease:'power4.out',
  clearProps:'all'

})

gsap.from('.contact2-text',{

  scrollTrigger:{
    trigger:'.contact2-hero',
    start:'top 80%',
    toggleActions:'play none none none'
  },

  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  ease:'power3.out',
  clearProps:'all'

})

/* CONTACT CARDS */

gsap.from('.contact2-card',{

  scrollTrigger:{
    trigger:'.contact2-cards',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* CONTACT FORM LEFT */

gsap.from('.contact2-form-content',{

  scrollTrigger:{
    trigger:'.contact2-form-section',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  x:-80,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

/* CONTACT FORM RIGHT */

gsap.from('.contact2-form',{

  scrollTrigger:{
    trigger:'.contact2-form-section',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  x:80,
  opacity:0,
  duration:1,
  ease:'power3.out',
  clearProps:'all'

})

/* BENEFITS */

gsap.from('.contact2-benefit',{

  scrollTrigger:{
    trigger:'.contact2-benefits',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:80,
  opacity:0,
  duration:1,
  stagger:0.15,
  ease:'power3.out',
  clearProps:'all'

})

/* CTA */

gsap.from('.contact2-cta',{

  scrollTrigger:{
    trigger:'.contact2-cta',
    start:'top 85%',
    toggleActions:'play none none none'
  },

  y:100,
  opacity:0,
  duration:1.2,
  ease:'power4.out',
  clearProps:'all'

})

}