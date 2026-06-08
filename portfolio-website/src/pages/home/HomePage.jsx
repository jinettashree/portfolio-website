import Sidebar from "../../modules/sidebar/Sidebar";
import ProfileSection from "../../modules/sections/profileSection/ProfileSection";
import "./Home.css";
import "../../modules/sidebar/Sidebar.css";
import AboutSection from "../../modules/sections/aboutSection/aboutSection";
import ExperienceSection from "../../modules/sections/experienceSection/ExperienceSection";
import BlogsSection from "../../modules/sections/blogsSection/BlogsSection";
import ContactSection from "../../modules/sections/contactSection/ContactSection";
import ProjectsSection from "../../modules/sections/projectsSection/ProjectsSection";

import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      {!isMobile && (
        <div className="sidebar desktop-sidebar">
          <ProfileSection />
          <Sidebar />
          <ContactSection />
        </div>
      )}

      {isMobile && (
        <div className="mobile-header">
          <ProfileSection />
        </div>
      )}

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

        {isMobile && (
          <section id="contact">
            <ContactSection />
          </section>
        )}

        <p className="copyright">
          © 2026 Jinetta Shree Gokul Rajan. All rights reserved. | React.js •
          CSS • Bootstrap • Vercel
        </p>
      </div>

      {isMobile && (
        <nav className="mobile-bottom-nav">
          <a href="#about">
            <i className="ti ti-user"></i>
            <span>About</span>
          </a>
          <a href="#experience">
            <i className="ti ti-briefcase"></i>
            <span>Exp</span>
          </a>
          <a href="#projects">
            <i className="ti ti-code"></i>
            <span>Projects</span>
          </a>
          <a href="#blogs">
            <i className="ti ti-writing"></i>
            <span>Blogs</span>
          </a>
          <a href="#contact">
            <i className="ti ti-address-book"></i>
            <span>Contact</span>
          </a>
        </nav>
      )}
    </div>
  );
};

export default Home;
