import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaPhone,
  FaFileAlt
} from "react-icons/fa";
import "./ContactSection.css";
const ContactSection = () => {
  return (
    <div className="contact">
      <a
        href="https://github.com/jinettashree"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/jinetta-shree-gokul-rajan-679577221/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a href="mailto:jinettashree@gmail.com" target="_blank" rel="noreferrer">
        <FaEnvelope />
      </a>

      <a
        href="https://medium.com/@jinettashree"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium />
      </a>

      <a href="tel:+919345856256">
        <FaPhone />
      </a>

      <a
        href="https://drive.google.com/file/d/1J2JLqx7uV7Qb-114IW1NGSwpQ9wTRRDj/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFileAlt />
      </a>
    </div>
  );
};

export default ContactSection;
