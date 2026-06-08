import './navbar.css'

export const Navbar = () => {

  const html = `

    <header class="navbar">

      <a href="/" class="logo">
       <img src="/logo.png" alt="Square & Circles Logo">
      </a>

      <nav class="nav-links">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>

      <a href="/contact" class="talk-btn">Let's Talk</a>

      <button class="hamburger-btn" id="hamburgerBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>

    <div class="mobile-header">

      <a href="/" class="mobile-logo">
        <img src="/src/assets/logo.png" alt="Square & Circles Logo">
      </a>

      <button class="mobile-menu-btn" id="mobileMenuBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>

    <div class="mobile-menu-drawer" id="mobileMenuDrawer">

      <button class="mobile-menu-close" id="mobileMenuClose">
        <span></span>
        <span></span>
      </button>

      <nav class="mobile-menu-links">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>

      <a href="/contact" class="mobile-menu-cta">Let's Talk</a>

    </div>

  `

  setTimeout(() => {
    const drawer = document.getElementById('mobileMenuDrawer')
    const overlay = document.getElementById('mobileMenuOverlay')
    const close = document.getElementById('mobileMenuClose')
    const mobileBtn = document.getElementById('mobileMenuBtn')
    const tabletBtn = document.getElementById('hamburgerBtn')

    const openMenu = () => {
      drawer.classList.add('open')
      overlay.classList.add('open')
      document.body.style.overflow = 'hidden'
    }

    const closeMenu = () => {
      drawer.classList.remove('open')
      overlay.classList.remove('open')
      document.body.style.overflow = ''
    }

    if (mobileBtn) mobileBtn.addEventListener('click', openMenu)
    if (tabletBtn) tabletBtn.addEventListener('click', openMenu)
    if (close) close.addEventListener('click', closeMenu)
    if (overlay) overlay.addEventListener('click', closeMenu)

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu)
    })

  }, 0)

  return html

}