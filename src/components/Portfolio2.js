import './portfolio2.css'

export const Portfolio2 = () => {

  setTimeout(() => {

    const filters = document.querySelectorAll('.portfolio2-filter')

    const cards = document.querySelectorAll('.portfolio2-card')

    filters.forEach(button => {

      button.addEventListener('click', () => {

        filters.forEach(btn =>
          btn.classList.remove('active')
        )

        button.classList.add('active')

        const filter = button.dataset.filter

        cards.forEach(card => {

          const category = card.dataset.category

          if(filter === 'all' || category === filter){

            card.style.display = 'block'

          }

          else{

            card.style.display = 'none'

          }

        })

      })

    })

  },100)


  return `

  <section class="portfolio2-hero">

    <p class="portfolio2-label">
      OUR WORK
    </p>

    <h1 class="portfolio2-heading">
      Impact <span>Gallery</span>
    </h1>

    <p class="portfolio2-text">
      Real projects. Real results. A curated selection of work we are proud of.
    </p>

  </section>

<section class="portfolio2-filter-section">

  <div class="portfolio2-filters">

    <button class="portfolio2-filter active" data-filter="all">
      All
    </button>

    <button class="portfolio2-filter" data-filter="branding">
      Branding
    </button>

    <button class="portfolio2-filter" data-filter="websites">
      Websites
    </button>

    <button class="portfolio2-filter" data-filter="mobile">
      Mobile Apps
    </button>

    <button class="portfolio2-filter" data-filter="marketing">
      Marketing
    </button>

    <button class="portfolio2-filter" data-filter="social">
      Social Media
    </button>

    <button class="portfolio2-filter" data-filter="uiux">
      UI/UX
    </button>

  </div>

</section>

<section class="portfolio2-gallery">

  <div class="portfolio2-grid">

    <!-- CARD -->

    <div class="portfolio2-card large" data-category="branding">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>Branding</span>

        <h3>Obsidian House</h3>

      </div>

    </div>

    <!-- CARD -->

    <div class="portfolio2-card" data-category="websites">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>Websites</span>

        <h3>Velora Commerce</h3>

      </div>

    </div>

    <!-- CARD -->

    <div class="portfolio2-card" data-category="uiux">

      <img
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>UI/UX</span>

        <h3>Zenith AI</h3>

      </div>

    </div>

    <!-- CARD -->

    <div class="portfolio2-card" data-category="marketing">

      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>Marketing</span>

        <h3>Lumina Beauty</h3>

      </div>

    </div>

    <!-- CARD -->

    <div class="portfolio2-card large" data-category="social">

      <img
        src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>Social Media</span>

        <h3>Kairo Studios</h3>

      </div>

    </div>

    <!-- CARD -->

    <div class="portfolio2-card" data-category="mobile">

      <img
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
      />

      <div class="portfolio2-overlay">

        <span>Mobile Apps</span>

        <h3>Nexora Health</h3>

      </div>

    </div>

  </div>

</section>

<section class="portfolio2-results">

  <div class="portfolio2-results-heading">

    <p>
      PERFORMANCE METRICS
    </p>

    <h2>
      Results That <span>Speak</span>
    </h2>

  </div>

  <div class="portfolio2-results-grid">

    <!-- CARD -->

    <div class="portfolio2-result-card">

      <h3>
        250+
      </h3>

      <span>
        Projects Delivered
      </span>

    </div>

    <!-- CARD -->

    <div class="portfolio2-result-card">

      <h3>
        98%
      </h3>

      <span>
        Client Satisfaction
      </span>

    </div>

    <!-- CARD -->

    <div class="portfolio2-result-card">

      <h3>
        4.8x
      </h3>

      <span>
        Average ROI
      </span>

    </div>

    <!-- CARD -->

    <div class="portfolio2-result-card">

      <h3>
        35M+
      </h3>

      <span>
        Impressions Generated
      </span>

    </div>

  </div>

</section>

<section class="portfolio2-cta">

  <p class="portfolio2-cta-label">
    LET’S CREATE YOUR NEXT SUCCESS STORY
  </p>

  <h2 class="portfolio2-cta-heading">
    Have a project in mind?
    <span>
      Let’s make it unforgettable.
    </span>
  </h2>

  <p class="portfolio2-cta-text">
    From premium branding and websites to scalable digital experiences,
    we help ambitious brands stand out in a crowded world.
  </p>

  <div class="portfolio2-cta-buttons">

    <a href="/contact" class="portfolio2-cta-primary">
      Start Your Project
    </a>

    <a href="/services" class="portfolio2-cta-secondary">
      Explore Services
    </a>

  </div>

</section>

  `

}