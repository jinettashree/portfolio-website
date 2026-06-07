import { experiences } from "./experiences";
import SectionHeading from "../../ui/sectionHeading/SectionHeading";
import "../experienceSection/ExperienceSection.css";

const ExperienceSection = () => {
  return (
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
          <div className="col-4">
            <h5 className="date">{exp.date}</h5>
          </div>

          <div className="col-8">
            <h3 className="title">{exp.company}</h3>
            <p>{exp.description}</p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ExperienceSection;
