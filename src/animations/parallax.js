export const initParallax = () => {

  const glow1 = document.querySelector('.glow-1')
  const glow2 = document.querySelector('.glow-2')

  document.addEventListener('mousemove', (e) => {

    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    glow1.style.transform = `
      translate(
        ${x * 40}px,
        ${y * 40}px
      )
    `

    glow2.style.transform = `
      translate(
        ${-x * 40}px,
        ${-y * 40}px
      )
    `

  })

}