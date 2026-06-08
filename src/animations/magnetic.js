export const initMagneticButtons = () => {

  const buttons = document.querySelectorAll(
    '.primary-btn, .secondary-btn, .talk-btn'
  )

  buttons.forEach((button) => {

    button.addEventListener('mousemove', (e) => {

      const rect = button.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const moveX = (x - rect.width / 2) * 0.15
      const moveY = (y - rect.height / 2) * 0.25

      button.style.transform = `
        translate(${moveX}px, ${moveY}px)
      `

    })

    button.addEventListener('mouseleave', () => {

      button.style.transform = `
        translate(0px, 0px)
      `

    })

  })

}