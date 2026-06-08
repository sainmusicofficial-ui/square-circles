export const PricingPreview = () => {

  const plans = [

    {
      name:'Starter',
      price:'₹24,999',
      popular:false,
      features:[
        'Brand Strategy',
        'Logo Design',
        'Social Media Setup',
        'Basic Website',
        'Basic SEO'
      ]
    },

    {
      name:'Growth',
      price:'₹59,999',
      popular:true,
      features:[
        'Premium Website Design',
        'Performance Ads Setup',
        'Content Creation',
        'SEO Optimization',
        'Monthly Strategy Calls'
      ]
    },

    {
      name:'Premium',
      price:'₹1,49,999',
      popular:false,
      features:[
        'App Development',
        'Full Brand System',
        'AI Automation',
        'Dedicated Manager',
        'Advanced Marketing'
      ]
    }

  ]

  return `

    <section class="pricing-section">

      <div class="pricing-heading">

        <span class="pricing-tag">
          PRICING
        </span>

        <h2 class="pricing-title">
          Simple, Transparent
          <span>Pricing</span>
        </h2>

      </div>

      <div class="pricing-grid">

        ${plans.map(plan => `

          <div class="pricing-card ${plan.popular ? 'popular-plan' : ''} magnetic">

            ${plan.popular ? `
              
              <div class="popular-badge">
                Most Popular
              </div>

            ` : ''}

            <h3>
              ${plan.name}
            </h3>

            <div class="pricing-price">

              ${plan.price}

              <span>
                Starting At
              </span>

            </div>

            <ul class="pricing-features">

              ${plan.features.map(feature => `

                <li>
                  ✓ ${feature}
                </li>

              `).join('')}

            </ul>

            <a href="/pricing" class="pricing-btn">
              Get Started
            </a>

          </div>

        `).join('')}

      </div>

      <div class="pricing-footer-link">

        <a href="/pricing">
          View Full Pricing →
        </a>

      </div>

    </section>

  `

}