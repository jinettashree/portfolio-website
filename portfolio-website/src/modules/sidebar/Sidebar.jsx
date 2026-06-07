import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="mt-3">
      <div className="tabs">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
      </div>
    </nav>
  );
};

export default Sidebar;
