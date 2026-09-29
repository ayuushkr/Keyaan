import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

import "./Blog.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      slug: "improve-online-visibility",
      title: "Improve your Online visibility with keyantech's Professional Website Design Service in Chandigarh",
      date: "September, 2026",
      author: "Keyanntech Team",
      image: "/images/blog.jpeg",
    },
    {
      id: 2,
      slug: "digital-marketing-for-business",
      title: "Improve Digital Marketing For Your Business with Keyanntech Solution",
      category: "Digital Marketing",
      date: "August, 2026",
      author: "Keyanntech Team",
      image: "/images/marketing.avif",
    },
    {
      id: 3,
      slug: "seo-strategies-online-growth",
      title: "SEO Strategies To Improve Your Online Presence with Keyanntech Team's",
      category: "SEO",
      date: "July, 2026",
      author: "Keyanntech Team",
      image: "/images/seoo.jpg",
    },
  ];

  return (
    <div className="blog-page">

      {/* =================================================
          BLOG HERO
      ================================================= */}

      <section className="blog-hero">

        <video
          className="blog-bg-video"
          src="/videos/blogbg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="blog-bg-overlay"></div>

        <div className="blog-hero-container">

          <div className="blog-hero-content">

            <span className="section-label">
              OUR BLOG
            </span>

            <h1>
              Insights, Ideas &
              <span> Digital Solutions</span>
            </h1>

            <p>
              Explore useful insights, technology trends and practical
              ideas to help your business grow in the digital world.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          LATEST BLOGS
      ================================================= */}

      <section className="blog-list-section">

        <div className="blog-container">

          <div className="blog-heading">

            <span className="section-label">
              LATEST ARTICLES
            </span>

            <h2>
              Explore Our
              <span> Latest Blogs</span>
            </h2>

            <p>
              Stay updated with the latest technology, development,
              marketing and digital business insights.
            </p>

          </div>


          {/* Blog Cards */}

          <div className="blog-grid">

            {blogs.map((blog) => (
              <article
                className="blog-card"
                key={blog.id}
              >

                <div className="blog-card-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                  <span className="blog-category">
                    {blog.category}
                  </span>

                </div>


                <div className="blog-card-content">

                  <div className="blog-meta">

                    <span>
                      <Calendar size={15} />
                      {blog.date}
                    </span>

                    <span>
                      <User size={15} />
                      {blog.author}
                    </span>

                  </div>


                  <h3>
                    {blog.title}
                  </h3>


                  <p>
                    Discover useful information and practical
                    insights related to modern digital solutions.
                  </p>


                  <Link
                    to={`/blog/${blog.slug}`}
                    className="blog-read-more"
                  >
                    Read More
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          BLOG CTA
      ================================================= */}

      <section className="blog-cta">

        <div className="blog-cta-container">

          <div>

            <span className="section-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Build Something
              <span> Great Together</span>
            </h2>

            <p>
              Have an idea or project you'd like to discuss?
              Get in touch with our team.
            </p>

          </div>

          <Link
            to="/contact"
            className="blog-cta-button"
          >
            Let's Talk
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Blog;