export const WhyChooseUs = () => {

  const reasons = [

    {
      icon:'✨',
      title:'Creative Excellence',
      description:'Award-worthy design and storytelling that captivates and converts audiences.'
    },

    {
      icon:'📊',
      title:'Data-Driven Strategy',
      description:'Every creative decision is backed by analytics and market insights.'
    },

    {
      icon:'👥',
      title:'Full-Service Team',
      description:'Designers, developers, marketers, and strategists under one roof.'
    },

    {
      icon:'⚡',
      title:'Fast Delivery',
      description:'Agile workflows that hit deadlines without compromising quality.'
    },

    {
      icon:'💬',
      title:'Transparent Communication',
      description:'Real-time updates, clear timelines, and absolutely no surprises.'
    },

    {
      icon:'📈',
      title:'Scalable Solutions',
      description:'Built to grow with your business from startup to enterprise level.'
    }

  ]

  return `

    <section class="why-section">

      <div class="why-heading">

        <span class="why-tag">
          WHY US
        </span>

        <h2 class="why-title">
          Why Choose
          <span>Us</span>
        </h2>

      </div>

      <div class="why-grid">

        ${reasons.map(reason => `

          <div class="why-card magnetic">

            <div class="why-icon">
              ${reason.icon}
            </div>

            <h3>
              ${reason.title}
            </h3>

            <p>
              ${reason.description}
            </p>

          </div>

        `).join('')}

      </div>

    </section>

  `

}