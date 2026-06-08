export const FeaturedProjects = () => {

  const projects = [

    {
      category:'Infrastructure',
      title:'Ruyadar Projects LLP',
      result:'Premium digital presence for a modern construction brand',
      image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
    },

    {
      category:'Industrial Safety',
      title:'Masters Safety Solutions',
      result:'Built trust-focused branding and lead generation system',
      image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
    },

    {
      category:'Finance & Compliance',
      title:'SS Auditors & Tax Consultants',
      result:'Professional online identity for a growing consultancy firm',
      image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop'
    }

  ]

  return `

    <section class="projects-section">

      <div class="projects-top">

        <div>

          <span class="projects-tag">
            FEATURED WORK
          </span>

          <h2 class="projects-title">
            Recent <span>Projects</span>
          </h2>

        </div>

        <a href="/portfolio" class="projects-link">
          View All Projects →
        </a>

      </div>

      <div class="projects-grid">

        ${projects.map(project => `

          <div class="project-card magnetic">

            <div class="project-image">

              <img src="${project.image}" alt="${project.title}" />

              <div class="project-overlay"></div>

            </div>

            <div class="project-content">

              <span class="project-category">
                ${project.category}
              </span>

              <h3>
                ${project.title}
              </h3>

              <p>
                ${project.result}
              </p>

            </div>

          </div>

        `).join('')}

      </div>

    </section>

  `

}