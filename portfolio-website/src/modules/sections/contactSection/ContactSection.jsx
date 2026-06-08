import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaPhone,
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

      <a href="jinettashree@gmail.com">
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
    </div>
  );
};

export default ContactSection;
