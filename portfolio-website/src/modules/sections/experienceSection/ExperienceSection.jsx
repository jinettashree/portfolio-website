import { experiences } from "./experiences";
import SectionHeading from "../../ui/sectionHeading/SectionHeading";
import "../experienceSection/ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <div>
      <div>
        <SectionHeading title="EXPERIENCE" rosehot />
        {experiences.map((exp, index) => (
          <a
            href={exp.link}
            target="_blank"
            rel="noreferrer"
            className="row experience"
            key={index}
          >
            <div className="col-4 experience-date-col">
              <h5 className="date">{exp.date}</h5>
            </div>

            <div className="col-8 experience-detail-col">
              <h3 className="experience-title">{exp.company}</h3>
              <p>{exp.description}</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill) => (
                  <span key={skill} className="experience-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
