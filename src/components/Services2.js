import './services2.css'

export const Services2 = () => {

  setTimeout(() => {

    const cards = document.querySelectorAll('.services2-card')

    cards.forEach(card => {

      card.addEventListener('click', () => {

        if(card.classList.contains('active')){

          card.classList.remove('active')

        } else {

          cards.forEach(c => c.classList.remove('active'))

          card.classList.add('active')

        }

      })

    })

  },100)

  return `

  <section class="services2-hero">

    <p class="services2-label">
      WHAT WE OFFER
    </p>

    <h1 class="services2-heading">
      Our <span>Services</span>
    </h1>

    <p class="services2-text">
      From brand strategy to AI automation — everything your business needs to grow online.
    </p>

  </section>

  <section class="services2-grid-section">

    <div class="services2-grid">

      <!-- DIGITAL -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">✈</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Digital Marketing</h3>

        <p class="services2-short">
          Multi-channel campaigns that drive awareness and conversions at scale.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            We craft integrated digital marketing strategies across paid ads, email, organic content, funnels, and analytics.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- ADS -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">▥</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Performance Ads</h3>

        <p class="services2-short">
          Data-driven ad strategies across Google, Meta, and beyond.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            ROI-focused advertising campaigns optimized for lead generation, conversions, and scalable growth.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- SEO -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">⌕</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>SEO Optimization</h3>

        <p class="services2-short">
          Dominate search rankings with technical and content SEO.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Technical audits, keyword research, content optimization, and ranking strategies built for long-term traffic.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- SOCIAL -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">⤴</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Social Media</h3>

        <p class="services2-short">
          Engaging social strategies that build communities and drive growth.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Full social media management, content calendars, creatives, reels, and engagement strategies.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- BRANDING -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">◔</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Branding & Identity</h3>

        <p class="services2-short">
          Distinctive brand systems that resonate and stand out.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Logos, visual identity systems, typography, packaging, positioning, and brand storytelling.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- GRAPHIC -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">◭</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Graphic Design</h3>

        <p class="services2-short">
          Stunning visuals that communicate your brand story.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Creative assets for digital, print, campaigns, social media, and advertising materials.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- UIUX -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">▣</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>UI/UX Design</h3>

        <p class="services2-short">
          Intuitive interfaces designed for delight and conversion.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Wireframes, user journeys, interfaces, product experiences, and conversion-focused design systems.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- WEB -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">⊙</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Web Development</h3>

        <p class="services2-short">
          High-performance websites built with cutting-edge technology.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Premium responsive websites with smooth animations, optimization, and scalable architecture.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- APP -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">▯</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>App Development</h3>

        <p class="services2-short">
          Native and cross-platform apps that users love.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            iOS, Android, and hybrid applications designed for speed, scalability, and seamless UX.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- ECOM -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">▿</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>E-commerce</h3>

        <p class="services2-short">
          Scalable online stores optimized for maximum revenue.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Shopify, WooCommerce, and custom e-commerce systems built for conversions and growth.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- CONTENT -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">◫</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Content Creation</h3>

        <p class="services2-short">
          Compelling content that educates, entertains, and converts.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Reels, ad creatives, scripts, graphics, photography, and storytelling tailored for engagement.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- VIDEO -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">◧</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>Video Production</h3>

        <p class="services2-short">
          Cinematic video content from concept to final cut.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            Brand films, commercials, podcasts, reels, edits, motion graphics, and production workflows.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

      <!-- AI -->

      <div class="services2-card">

        <div class="services2-top">

          <div class="services2-icon">⌘</div>

          <span class="services2-arrow">⌄</span>

        </div>

        <h3>AI Automation</h3>

        <p class="services2-short">
          Intelligent automation solutions that supercharge efficiency.
        </p>

        <div class="services2-hidden">

          <div class="services2-line"></div>

          <p>
            AI chatbots, workflow automation, lead systems, CRM integrations, and intelligent operations.
          </p>

          <a href="#">
            Get Started →
          </a>

        </div>

      </div>

    </div>

  </section>

  <section class="services-process-section">

  <div class="services-process-heading">

    <p>
      HOW WE WORK
    </p>

    <h2>
      Our <span>Process</span>
    </h2>

  </div>

  <div class="services-process-timeline">

    <!-- STEP 1 -->

    <div class="services-process-row right">

      <div class="services-process-dot">
        ◎
      </div>

      <div class="services-process-card">

        <span>
          Step 1
        </span>

        <h3>
          Discovery
        </h3>

        <p>
          Deep dive into your goals, audience, and competitive landscape.
        </p>

      </div>

    </div>

    <!-- STEP 2 -->

    <div class="services-process-row left">

      <div class="services-process-dot">
        ◉
      </div>

      <div class="services-process-card">

        <span>
          Step 2
        </span>

        <h3>
          Strategy
        </h3>

        <p>
          Craft a data-backed roadmap tailored to your objectives.
        </p>

      </div>

    </div>

    <!-- STEP 3 -->

    <div class="services-process-row right">

      <div class="services-process-dot">
        ✦
      </div>

      <div class="services-process-card">

        <span>
          Step 3
        </span>

        <h3>
          Design
        </h3>

        <p>
          Create stunning visuals and intuitive user experiences.
        </p>

      </div>

    </div>

    <!-- STEP 4 -->

    <div class="services-process-row left">

      <div class="services-process-dot">
        ⌘
      </div>

      <div class="services-process-card">

        <span>
          Step 4
        </span>

        <h3>
          Development
        </h3>

        <p>
          Build robust, high-performance digital solutions.
        </p>

      </div>

    </div>

    <!-- STEP 5 -->

    <div class="services-process-row right">

      <div class="services-process-dot">
        ➤
      </div>

      <div class="services-process-card">

        <span>
          Step 5
        </span>

        <h3>
          Marketing
        </h3>

        <p>
          Launch campaigns that reach the right people at the right time.
        </p>

      </div>

    </div>

    <!-- STEP 6 -->

    <div class="services-process-row left">

      <div class="services-process-dot">
        ↗
      </div>

      <div class="services-process-card">

        <span>
          Step 6
        </span>

        <h3>
          Launch & Scale
        </h3>

        <p>
          Go live, optimize, and scale for sustainable growth.
        </p>

      </div>

    </div>

  </div>

</section>

<section class="stack-section">

  <div class="stack-heading">

    <p>
      TOOLS & TECHNOLOGY
    </p>

    <h2>
      Our <span>Tech Stack</span>
    </h2>

  </div>

  <div class="stack-grid">

    <div class="stack-card">Figma</div>

    <div class="stack-card">React</div>

    <div class="stack-card">GSAP</div>

    <div class="stack-card">Shopify</div>

    <div class="stack-card">Meta Ads</div>

    <div class="stack-card">Google Ads</div>

    <div class="stack-card">Webflow</div>

    <div class="stack-card">Node.js</div>

    <div class="stack-card">Framer</div>

    <div class="stack-card">AI Automation</div>

    <div class="stack-card">WordPress</div>

    <div class="stack-card">Analytics</div>

  </div>

</section>

<section class="industries-section">

  <div class="industries-heading">

    <p>
      INDUSTRIES
    </p>

    <h2>
      Industries We <span>Work With</span>
    </h2>

  </div>

  <div class="industries-grid">

    <div class="industries-card">
      <span>01</span>
      <h3>Fashion & Luxury</h3>
    </div>

    <div class="industries-card">
      <span>02</span>
      <h3>Healthcare</h3>
    </div>

    <div class="industries-card">
      <span>03</span>
      <h3>Restaurants & Cafés</h3>
    </div>

    <div class="industries-card">
      <span>04</span>
      <h3>Startups & SaaS</h3>
    </div>

    <div class="industries-card">
      <span>05</span>
      <h3>Real Estate</h3>
    </div>

    <div class="industries-card">
      <span>06</span>
      <h3>E-Commerce</h3>
    </div>

  </div>

</section>

<section class="services2-cta">

  <p class="services2-cta-label">
    LET’S BUILD SOMETHING EXCEPTIONAL
  </p>

  <h2 class="services2-cta-heading">
    Ready to elevate your digital presence?
  </h2>

  <p class="services2-cta-text">
    From branding and development to marketing and AI automation,
    we help ambitious businesses grow faster with premium digital experiences.
  </p>

  <div class="services2-cta-buttons">

    <a href="/contact" class="services2-cta-primary">
      Start a Project
    </a>

    <a href="/portfolio" class="services2-cta-secondary">
      View Portfolio
    </a>

  </div>

</section>



  `
}