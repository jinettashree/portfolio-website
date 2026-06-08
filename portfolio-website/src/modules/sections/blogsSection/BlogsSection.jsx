import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "../../ui/sectionHeading/SectionHeading";
import "../blogsSection/BlogsSection.css";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jinettashree",
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.items.slice(0, 5) || []))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <SectionHeading title="TECHNICAL & NON-TECHNICAL BLOGS" rosehot />
      {blogs.map((blog, index) => (
        <a
          key={index}
          href={blog.link}
          target="_blank"
          rel="noreferrer"
          className="blog-card"
        >
          <div className="row align-items-center">
            <div className="col-3 blog-img-col">
              <img
                src={
                  blog.thumbnail ||
                  blog.content.match(/<img[^>]+src="([^">]+)"/)?.[1]
                }
                alt={blog.title}
                className="blog-image"
              />
            </div>
            <div className="col-9 blog-content-col blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-date">
                <FaCalendarAlt className="calendar-icon" />
                {new Date(blog.pubDate).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
        </a>
      ))}
      <a
        href="https://medium.com/@jinettashree"
        target="_blank"
        rel="noreferrer"
        className="view"
      >
        View All Blogs →
      </a>
    </div>
  );
};

export default BlogsSection;
