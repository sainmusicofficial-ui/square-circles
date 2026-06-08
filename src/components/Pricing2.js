import './pricing2.css'

export const Pricing2 = () => {

    setTimeout(() => {

  const faqItems = document.querySelectorAll('.pricing2-faq-item')

  faqItems.forEach(item => {

    const question = item.querySelector('.pricing2-faq-question')

    question.addEventListener('click', () => {

      faqItems.forEach(other => {

        if(other !== item){

          other.classList.remove('active')

        }

      })

      item.classList.toggle('active')

    })

  })

},100)

  return `

  <section class="pricing2-hero">

    <p class="pricing2-label">
      TRANSPARENT PRICING
    </p>

    <h1 class="pricing2-heading">
      Investment <span>Plans</span>
    </h1>

    <p class="pricing2-text">
      Flexible plans built to match every stage of your growth journey.
    </p>

  </section>

  <section class="pricing2-cards-section">

  <div class="pricing2-grid">

    <!-- STARTER -->

    <div class="pricing2-card">

      <p class="pricing2-plan">
        Starter
      </p>

      <p class="pricing2-subtitle">
        Perfect for startups getting started.
      </p>

      <h3 class="pricing2-price">
        ₹24,999
      </h3>

      <span class="pricing2-duration">
        one-time
      </span>

      <div class="pricing2-features">

        <span>✓ Brand Strategy Session</span>
        <span>✓ Logo & Identity Design</span>
        <span>✓ Landing Page Design</span>
        <span>✓ Social Media Setup</span>
        <span>✓ Basic SEO Optimization</span>
        <span>✓ Competitor Research</span>
        <span>✓ Mobile Responsive Design</span>
        <span>✓ 14 Days Delivery</span>

      </div>

      <a href="/contact" class="pricing2-button">
        Get Started
      </a>

    </div>

    <!-- GROWTH -->

    <div class="pricing2-card featured">

      <div class="pricing2-badge">
        Most Popular
      </div>

      <p class="pricing2-plan">
        Growth
      </p>

      <p class="pricing2-subtitle">
        For businesses ready to scale.
      </p>

      <h3 class="pricing2-price">
        ₹59,999
      </h3>

      <span class="pricing2-duration">
        one-time
      </span>

      <div class="pricing2-features">

        <span>✓ Everything in Starter</span>
        <span>✓ Premium Website Design</span>
        <span>✓ Performance Marketing Setup</span>
        <span>✓ Social Media Creatives</span>
        <span>✓ Advanced SEO Optimization</span>
        <span>✓ Content Strategy</span>
        <span>✓ Analytics Dashboard</span>
        <span>✓ Monthly Strategy Call</span>
        <span>✓ 30 Days Support</span>

      </div>

      <a href="/contact" class="pricing2-button primary">
        Scale Your Brand
      </a>

    </div>

    <!-- SCALE -->

    <div class="pricing2-card">

      <p class="pricing2-plan">
        Scale
      </p>

      <p class="pricing2-subtitle">
        Built for ambitious brands ready to dominate.
      </p>

      <h3 class="pricing2-price">
        ₹1,49,999
      </h3>

      <span class="pricing2-duration">
        custom engagement
      </span>

      <div class="pricing2-features">

        <span>✓ Everything in Growth</span>
        <span>✓ AI Automation Integration</span>
        <span>✓ Custom Platform Development</span>
        <span>✓ Multi-Platform Campaigns</span>
        <span>✓ Advanced Funnel Strategy</span>
        <span>✓ Dedicated Account Manager</span>
        <span>✓ Priority Support</span>
        <span>✓ Performance Reporting</span>
        <span>✓ Conversion Optimization</span>
        <span>✓ Fast-Track Delivery</span>

      </div>

      <a href="/contact" class="pricing2-button">
        Book Consultation
      </a>

    </div>

    <!-- ENTERPRISE -->

<div class="pricing2-card">

  <p class="pricing2-plan">
    Enterprise
  </p>

  <p class="pricing2-subtitle">
    Tailored solutions for high-growth brands and large-scale operations.
  </p>

  <h3 class="pricing2-price">
    Custom
  </h3>

  <span class="pricing2-duration">
    custom engagement
  </span>

  <div class="pricing2-features">

    <span>✓ Everything in Scale</span>
    <span>✓ AI Automation Systems</span>
    <span>✓ Multi-Platform Integrations</span>
    <span>✓ Enterprise Workflow Setup</span>
    <span>✓ Dedicated Strategy Team</span>
    <span>✓ Priority Deployment</span>
    <span>✓ Long-Term Growth Consulting</span>
    <span>✓ Advanced Analytics Dashboard</span>
    <span>✓ VIP Support Access</span>

  </div>

  <a href="/contact" class="pricing2-button">
    Contact Us
  </a>

</div>

  </div>

</section>

<section class="pricing2-comparison">

  <div class="pricing2-comparison-heading">

    <p>
      PLAN COMPARISON
    </p>

    <h2>
      Compare <span>Features</span>
    </h2>

  </div>

  <div class="pricing2-table-wrapper">

    <table class="pricing2-table">

      <thead>

        <tr>

          <th>
            Features
          </th>

          <th>
            Starter
          </th>

          <th class="highlight">
            Growth
          </th>

          <th>
            Scale
          </th>

          <th>
            Enterprise
          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>
            Brand Identity
          </td>

          <td>✓</td>

          <td class="highlight">✓</td>

          <td>✓</td>

          <td>✓</td>

        </tr>

        <tr>

          <td>
            Premium Website
          </td>

          <td>—</td>

          <td class="highlight">✓</td>

          <td>✓</td>

          <td>✓</td>

        </tr>

        <tr>

          <td>
            SEO Optimization
          </td>

          <td>Basic</td>

          <td class="highlight">Advanced</td>

          <td>Advanced</td>

          <td>Enterprise</td>

        </tr>

        <tr>

          <td>
            AI Automation
          </td>

          <td>—</td>

          <td class="highlight">—</td>

          <td>✓</td>

          <td>✓</td>

        </tr>

        <tr>

          <td>
            Dedicated Manager
          </td>

          <td>—</td>

          <td class="highlight">—</td>

          <td>✓</td>

          <td>✓</td>

        </tr>

        <tr>

          <td>
            Priority Support
          </td>

          <td>—</td>

          <td class="highlight">✓</td>

          <td>✓</td>

          <td>24/7</td>

        </tr>

        <tr>

          <td>
            Delivery Timeline
          </td>

          <td>14 Days</td>

          <td class="highlight">30 Days</td>

          <td>Custom</td>

          <td>Priority</td>

        </tr>

      </tbody>

    </table>

  </div>

</section>

<section class="pricing2-faq">

  <div class="pricing2-faq-heading">

    <p>
      FREQUENTLY ASKED QUESTIONS
    </p>

    <h2>
      Everything You Need <span>To Know</span>
    </h2>

  </div>

  <div class="pricing2-faq-list">

    <!-- ITEM -->

    <div class="pricing2-faq-item active">

      <div class="pricing2-faq-question">

        <h3>
          Do you offer custom packages?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Yes. Every business is different, and we can tailor a solution specifically around your goals, workflows, and growth stage.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          How long does a project usually take?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Timelines vary depending on complexity, but most projects are completed within 2–6 weeks.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          Do you provide revisions?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Absolutely. Every package includes revision rounds to ensure the final result aligns perfectly with your vision.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          Do you offer ongoing support?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Yes. We offer ongoing support, maintenance, optimization, and growth consulting depending on your package.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          What payment methods do you accept?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          We accept bank transfers, UPI, Razorpay, Stripe, and other secure payment methods depending on your region.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          Can we upgrade our package later?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Definitely. Many clients begin with Starter or Growth and scale into larger custom engagements later.
        </p>

      </div>

    </div>

    <!-- ITEM -->

    <div class="pricing2-faq-item">

      <div class="pricing2-faq-question">

        <h3>
          Will my website be mobile responsive?
        </h3>

        <span>+</span>

      </div>

      <div class="pricing2-faq-answer">

        <p>
          Yes. Every website we build is fully optimized for desktop, tablet, and mobile devices.
        </p>

      </div>

    </div>

  </div>

</section>

<section class="pricing2-cta">

  <p class="pricing2-cta-label">
    READY TO BUILD SOMETHING EXCEPTIONAL?
  </p>

  <h2 class="pricing2-cta-heading">
    Let’s turn your vision into
    <span>
      a premium digital experience.
    </span>
  </h2>

  <p class="pricing2-cta-text">
    Whether you're launching, scaling, or transforming your brand,
    we build experiences designed for long-term growth and impact.
  </p>

  <div class="pricing2-cta-buttons">

    <a href="/contact" class="pricing2-cta-primary">
      Book Discovery Call
    </a>

    <a href="/services" class="pricing2-cta-secondary">
      Explore Services
    </a>

  </div>

</section>

  `

}