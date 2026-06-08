export const WhatWeDo = () => {

  const services = [

    {
      icon:'📢',
      title:'Digital Marketing',
      description:'Multi-channel campaigns that drive awareness and conversions at scale.'
    },

    {
      icon:'📊',
      title:'Performance Ads',
      description:'Data-driven ad strategies across Google, Meta, TikTok, and beyond.'
    },

    {
      icon:'🌐',
      title:'Web Development',
      description:'High-performance websites and web apps built with modern technology.'
    },

    {
      icon:'🎨',
      title:'Branding & Identity',
      description:'Distinctive brand systems that resonate, stand out, and scale.'
    },

    {
      icon:'📱',
      title:'App Development',
      description:'Native and cross-platform apps that users love and keep returning to.'
    },

    {
      icon:'🤖',
      title:'AI Automation',
      description:'Intelligent workflows that eliminate repetitive tasks and supercharge growth.'
    }

  ]

  return `

    <section class="services-section">

      <div class="services-top">

        <div>

          <span class="services-tag">
            WHAT WE DO
          </span>

          <h2 class="services-title">
            Full-Service
            <span>Digital Agency</span>
          </h2>

        </div>

        <a href="/services" class="services-link">
          View All 13 Services →
        </a>

      </div>

      <div class="services-grid">

        ${services.map(service => `

          <div class="service-card magnetic">

            <div class="service-icon">
              ${service.icon}
            </div>

            <h3>
              ${service.title}
            </h3>

            <p>
              ${service.description}
            </p>

            <a href="/services" class="service-learn">
              Learn More →
            </a>

          </div>

        `).join('')}

      </div>

    </section>

  `

}