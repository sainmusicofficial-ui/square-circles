export const Footer = () => {

  return `

    <footer class="footer">

      <div class="footer-grid">

        <div class="footer-brand">

          <a href="/" class="footer-logo-link">

          <img
            src="/logo.png"
            alt="Square & Circles"
            class="footer-logo"
           />

           </a>

          <p>
            Full-service creative and digital agency building
            brands that move people.
          </p>

        </div>

        <div class="footer-links">

          <h4>Quick Links</h4>

          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>

        </div>

        <div class="footer-links">

          <h4>Services</h4>

          <a href="/services/digital-marketing">Digital Marketing</a>
          <a href="/services/web-development">Web Development</a>
          <a href="/services/app-development">App Development</a>
          <a href="/services/branding">Branding</a>
          <a href="/services/seo">SEO</a>
          <a href="/services/ui-ux-design">UI/UX Design</a>

        </div>

        <div class="footer-newsletter">

          <h4>Newsletter</h4>

          <p>
            Stay updated with our latest insights.
          </p>

          <form class="footer-form">

            <input
              type="email"
              placeholder="Your email"
            />

            <button type="submit">
              →
            </button>

          </form>

        </div>

      </div>

      <div class="footer-bottom">

        <p>
          © 2020 Square & Circles. All rights reserved.
        </p>

      </div>

    </footer>

  `

}