import { projects } from "./projects";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../../ui/sectionHeading/SectionHeading";
import "../projectsSection/ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div>
      <SectionHeading title="PROJECTS" rosehot />
      {projects.map((project, index) => (
        <div key={index} className="row project">
          <div className="col-4 project-date-col">
            <h5 className="date">{project.duration}</h5>
          </div>

          <div className="col-8 project-detail-col">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
            </a>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {project.skills.map((skill) => (
                <span key={skill} className="project-badge">
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
