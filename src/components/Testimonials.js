export const Testimonials = () => {

  const testimonials = [

    {
      text:'Square & Circles helped us establish a premium digital presence that truly reflects our construction brand.',
      name:'Ruyadar Projects LLP',
      company:'Infrastructure & Construction',
      avatar:'R'
    },

    {
      text:'Their branding and website strategy generated better trust, stronger positioning, and more inbound leads.',
      name:'Masters Safety Solutions',
      company:'Industrial Safety',
      avatar:'M'
    },

    {
      text:'Professional execution, transparent communication, and a website that elevated our firm’s credibility instantly.',
      name:'SS Auditors & Tax Consultants',
      company:'Finance & Compliance',
      avatar:'S'
    }

  ]

  setTimeout(() => {

    let currentTestimonial = 0

    const items = document.querySelectorAll('.testimonial-item')

    if(!items.length) return

    setInterval(() => {

      items.forEach(item => {
        item.classList.remove('active-testimonial')
      })

      currentTestimonial++

      if(currentTestimonial >= items.length){
        currentTestimonial = 0
      }

      items[currentTestimonial].classList.add('active-testimonial')

    },5000)

  },100)

  return `

    <section class="testimonials-section">

      <div class="testimonials-heading">

        <span class="testimonials-tag">
          TESTIMONIALS
        </span>

        <h2 class="testimonials-title">
          What Clients
          <span>Say</span>
        </h2>

      </div>

      <div class="testimonial-slider">

        ${testimonials.map((testimonial,index) => `

          <div class="testimonial-item ${index === 0 ? 'active-testimonial' : ''}">

            <div class="testimonial-card magnetic">

              <div class="testimonial-stars">
                ★★★★★
              </div>

              <p class="testimonial-text">
                "${testimonial.text}"
              </p>

              <div class="testimonial-avatar">
                ${testimonial.avatar}
              </div>

              <h3 class="testimonial-name">
                ${testimonial.name}
              </h3>

              <p class="testimonial-company">
                ${testimonial.company}
              </p>

            </div>

          </div>

        `).join('')}

      </div>

    </section>

  `

}