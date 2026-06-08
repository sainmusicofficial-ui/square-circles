import { gsap } from "gsap"

export const initAnimations = () => {

  gsap.set([
    ".navbar",
    ".hero-badge",
    ".hero-title",
    ".hero-description",
    ".hero-buttons button"
  ],{
    opacity:1
  })

  gsap.from(".navbar",{
    y:-80,
    opacity:0,
    duration:1,
    ease:"power4.out"
  })

  gsap.from(".hero-badge",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.3,
    ease:"power3.out"
  })

  gsap.from(".hero-title",{
    y:80,
    opacity:0,
    duration:1.2,
    delay:0.5,
    ease:"power4.out"
  })

  gsap.from(".hero-description",{
    y:40,
    opacity:0,
    duration:1,
    delay:0.8,
    ease:"power3.out"
  })

  gsap.from(".hero-buttons button",{
    y:40,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2,
    ease:"power3.out"
  })

}