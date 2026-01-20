import CardProject from "./CardProject";
import projectsData from "./projectsData";
import reviewsData from "./reviewsData";


function Project() {
    return (
       <article className="projects-editorial py-5">
  <div className="container">

    {/* Header */}
    <div className="text-center mb-5">
      <h1 className="fw-bold">Projects That Define Our Expertise</h1>
      <p className="text-muted">
        Real-world solutions built with strategy, design & technology
      </p>
    </div>

    {/* Project Rows */}
    {projectsData.map((pro, index) => (
      <div
        className={`editorial-row ${index % 2 !== 0 ? "reverse" : ""}`}
        key={index}
      >
        {/* Image */}
        <div className="editorial-image">
          <img src={pro.projectImg} alt={pro.title} />
        </div>

        {/* Content */}
        <div className="editorial-content">
          <span className="editorial-tag">{pro.subtitle}</span>
          <h3>{pro.title}</h3>
          <p>{pro.desc}</p>

          <a href={pro.proLin} className="editorial-link">
            View Case Study →
          </a>
        </div>
      </div>
    ))}

  </div>
</article>


    )
}

export default Project;