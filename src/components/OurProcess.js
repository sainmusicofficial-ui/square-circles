export const OurProcess = () => {

  const process = [

    {
      number:'01',
      icon:'🧭',
      title:'Discovery',
      description:'Deep dive into your goals, audience, competitors, and growth opportunities.'
    },

    {
      number:'02',
      icon:'🎯',
      title:'Strategy',
      description:'We build a data-backed roadmap aligned with your business objectives.'
    },

    {
      number:'03',
      icon:'✨',
      title:'Design',
      description:'Crafting premium visuals and user experiences that people remember.'
    },

    {
      number:'04',
      icon:'💻',
      title:'Development',
      description:'Scalable websites, apps, and systems engineered for performance.'
    },

    {
      number:'05',
      icon:'📣',
      title:'Marketing',
      description:'Launch campaigns that attract, convert, and scale your brand online.'
    },

    {
      number:'06',
      icon:'🚀',
      title:'Launch & Scale',
      description:'Optimize, analyze, and continuously improve for long-term growth.'
    }

  ]

  return `

    <section class="process-section">

      <div class="process-header">

        <span class="process-tag">
          HOW WE WORK
        </span>

        <h2 class="process-title">
          Our <span>Process</span>
        </h2>

      </div>

      <div class="process-grid">

        ${process.map(item => `

          <div class="process-card magnetic">

            <div class="process-glow"></div>

            <div class="process-top">

              <span class="process-number">
                ${item.number}
              </span>

              <span class="process-icon">
                ${item.icon}
              </span>

            </div>

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.description}
            </p>

          </div>

        `).join('')}

      </div>

    </section>

  `

}