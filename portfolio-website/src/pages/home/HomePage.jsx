import Sidebar from "../../modules/sidebar/Sidebar";
import ProfileSection from "../../modules/sections/profileSection/ProfileSection";
import "./Home.css";
import "../../modules/sidebar/Sidebar.css";
import AboutSection from "../../modules/sections/aboutSection/aboutSection";
import ExperienceSection from "../../modules/sections/experienceSection/ExperienceSection";
import BlogsSection from "../../modules/sections/blogsSection/BlogsSection";
import FooterSection from "../../modules/sections/footerSection/FooterSection";
import ProjectsSection from "../../modules/sections/projectsSection/ProjectsSection";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ProfileSection />
        <Sidebar />
        <FooterSection />
      </div>

      <div className="content">
        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="blogs">
          <BlogsSection />
        </section>

        <p className="copyright">
          © 2026 Jinetta Shree Gokul Rajan. All rights reserved. | React.js •
          CSS • Bootstrap • Vercel
        </p>
      </div>
    </div>
  );
};

export default Home;
