import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import "./BlogDet.css";

const blogs = [
  {
    slug: "improve-online-visibility",
    title:
      "Improve Your Online Visibility With Professional Website Design",
    category: "Web Designing",
    date: "September 20, 2026",
    author: "Keyanntech Team",
    image: "/images/blog.jpeg",
    content: (
      <>
        <p>
          Website Design Service in Chandigarh- In today’s dynamic digital landscape, a strong online presence isn’t merely advantageous—it’s an indispensable component of a successful business strategy. Your website serves as more than just a digital storefront; it’s a dynamic platform, a persuasive marketing tool, and a gateway to engaging with potential customers on a global scale.

          At Keyantech, we understand the pivotal role that a well-designed website plays in modern business. That’s why we’ve positioned ourselves as Chandigarh’s premier website design agency, offering a comprehensive suite of professional services tailored to meet the diverse needs of businesses across various sectors.

          Drawing from years of industry experience, our team of talented web designers and developers has honed their craft, blending cutting-edge technology with a deep understanding of user experience principles. Our approach isn’t merely about creating websites; it’s about crafting digital experiences that resonate with your audience, drive meaningful engagement, and ultimately fuel your company’s growth and success.

          By leveraging our expertise and passion for innovation, we go beyond the conventional to deliver digital solutions that inspire, convert, and elevate your brand in today’s competitive digital landscape. Partner with Keyantech, and let’s transform your online presence into a powerful asset that propels your business to new heights.
        </p>

        <h2>The Importance of a Well-Designed Website</h2>

        <p>
          In today’s fast-paced digital landscape, your website serves as the primary gateway between your brand and potential customers, making it an indispensable marketing asset. It functions as a dynamic platform to showcase your products or services, establish your brand identity, and provide valuable insights and information to your target audience. A meticulously designed website not only creates a lasting impression but also plays a crucial role in enhancing user experience, bolstering credibility, and ultimately driving conversions and sales.

          At Keyantech, we recognize the pivotal role that a visually appealing and user- friendly website plays in your success. Our team specializes in creating designs that strike the perfect balance between aesthetics and functionality, ensuring that your website not only looks stunning but also delivers a seamless and intuitive experience for your visitors. From captivating visuals to intuitive navigation and engaging content, we meticulously craft every aspect of your website to leave a lasting impact and drive meaningful interactions with your audience.

          By leveraging the latest design trends, cutting-edge technology, and user-centered approaches, we transform your digital presence into a powerful marketing tool that not only attracts attention but also converts visitors into loyal customers. Whether you’re looking to revamp your existing website or create a brand new online experience, Keyantech is your trusted partner in achieving digital success. Let us help you unlock the full potential of your online presence and elevate your brand to new heights
        </p>

        <h2>Our Comprehensive Website Design Service in Chandigarh</h2>

        <p>
         1. Responsive Web Design:
          In today’s mobile-centric world, it’s essential that your website adapts flawlessly to different screen sizes and devices. Our responsive web design approach ensures that your website looks and functions beautifully across desktops, tablets, and smartphones, providing an optimal browsing experience for visitors, regardless of the device they’re using.

         2. E-commerce Solutions:
          If you’re looking to establish an online presence for your business or expand your existing e-commerce operations, we offer comprehensive e- commerce website development services. Our team will work closely with you to create a user-friendly online store, integrating secure payment gateways and streamlining the entire shopping experience for your customers.

         3. Content Management Systems (CMS):
          We understand the importance of being able to easily manage and update your website’s content without relying on coding expertise. That’s why our team is proficient in popular Content Management Systems (CMS) like WordPress, Drupal, and Joomla. With our CMS solutions, you’ll have complete control over your website, allowing you to make changes, add new content, and keep your site fresh and engaging.

         4. Custom Web Development:
          Elevate your digital presence with bespoke web solutions tailored to your unique business needs. Our expert developers collaborate closely with you to understand your specific requirements and objectives. By leveraging cutting-edge technologies and innovative design approaches, we craft custom web solutions that not only meet but exceed your expectations. Experience a seamless blend of functionality, creativity, and scalability that gives your business a competitive edge in the digital landscape.

         5. Search Engine Optimization (SEO):
          Stand out in the vast digital landscape with our comprehensive SEO strategies. We go beyond basic optimization techniques, diving deep into keyword research, content optimization, technical SEO, and off-page strategies. Our goal is to enhance your website’s visibility, attract organic traffic, and improve search engine rankings for relevant keywords. With our SEO expertise, your website will be well-equipped to compete and thrive in search engine results pages.

         6. Branding and Corporate Identity:
          Make a lasting impression with a strong and cohesive brand identity across all digital touchpoints. Our creative team works closely with you to develop a strategic branding approach that reflects your company’s values, mission, and personality. From logo design to color schemes, typography, and visual elements, we ensure every aspect of your website’s design reinforces your brand identity. This attention to detail creates a memorable and engaging experience for your audience, fostering trust and loyalty towards your brand.

         7. Mobile-First Design Excellence:
          With the majority of internet users accessing content through mobile devices, our mobile-first design strategy ensures your website is not just responsive but optimized for smaller screens. This approach guarantees a seamless and engaging user experience regardless of the device, capturing and retaining user attention on-the-go.

         8. User-Centric Experience (UX) Design:
          Beyond aesthetics, our focus is on crafting an immersive and intuitive user experience. By leveraging cutting-edge UX design principles and best practices, we create websites that not only look visually stunning but also guide visitors seamlessly through the content, leading to higher engagement and conversion rates.

         9. Comprehensive Website Maintenance and Support:
          Our commitment doesn’t end with the launch. We offer comprehensive website maintenance and support services to keep your online presence running smoothly. From regular updates and security patches to performance optimization and technical assistance, our team ensures your website remains secure, up-to-date, and performing at its best at all times.
        </p>

        <h2>Increasing Your Online Presence in Chandigarh</h2>

        <p>
          At Keyantech, we recognize the unique digital challenges and opportunities that businesses encounter in Chandigarh’s dynamic landscape. As a local website design agency deeply rooted in the region, we possess an intimate understanding of the local market nuances, emerging industry trends, and evolving consumer behaviors. This profound insight empowers us to craft tailored solutions that resonate authentically with your target audience.

          Our relentless pursuit of excellence and unwavering focus on customer satisfaction have propelled us to the forefront as one of the best website design Service in Chandigarh. Our portfolio boasts a diverse clientele, ranging from ambitious startups to well-established enterprises, spanning across industries such as e-commerce, healthcare, education, and beyond.

          Do not let a mediocre website impede your business’s growth potential. Collaborate with Keyantech to unlock the transformative power of a professionally designed website that not only captivates your audience but also drives conversions and amplifies your bottom line.
          
        </p>
      </>
    ),
  },

  {
    slug: "digital-marketing-for-business",
    title: "Why Digital Marketing Matters For Your Business",
    category: "Digital Marketing",
    date: "September 15, 2026",
    author: "Keyanntech Team",
    image: "/images/marketing.avif",
    content: (
      <>
        <p>
          In today’s hyper-connected marketplace, traditional marketing methods alone are no longer enough to sustain and grow a brand. Digital marketing has evolved from an optional strategy into the core engine driving modern business success. It bridges the gap between your brand and millions of active online users, offering unprecedented access to target audiences, measurable outcomes, and high returns on investment.

          At Keyantech, we help businesses navigate the fast-moving digital landscape. We combine targeted marketing strategies with data-driven insights to transform your online presence into a customer acquisition engine.
        </p>

        <h2>The Core Advantages of Digital Marketing</h2>

        <p>
          Global & Local Reach: Digital channels eliminate geographic barriers, allowing you to engage potential clients locally in Chandigarh or expand your reach to international markets with equal precision.

          Cost-Effective Growth: Unlike traditional print or broadcast media, digital marketing offers flexible budgets. Small businesses and startups can effectively compete with industry giants by focusing on targeted, high-conversion campaigns.

          Hyper-Targeted Audience Engagement: Modern digital tools allow you to tailor your message to specific demographics, user behaviors, interests, and location data, ensuring your marketing dollars are spent on high-intent prospects.

          Real-Time Data & Analytics: Measure every click, impression, and conversion instantly. With real-time metrics, you can continually refine campaigns, optimize budgets, and maximize ROI without waiting months for results.

          Interactive Customer Relationships: Engage directly with your audience through social media, email, and interactive content, building brand trust, loyalty, and long-term customer relationships.
        </p>

        <h2>Key Digital Marketing Services by Keyantech</h2>

        <p>
          Pay-Per-Click (PPC) Advertising: Drive immediate, qualified traffic to your site with data-backed search and social ad campaigns optimized for maximum return on ad spend.

          Social Media Marketing (SMM): Build an active community around your brand across platforms like Instagram, LinkedIn, Facebook, and Twitter using compelling content and interactive campaigns.

          Content Marketing Strategy: Establish authority in your niche by producing high-value blog posts, whitepapers, case studies, and visuals that inform, engage, and convert.

          Email Marketing Automation: Nurture leads through customized email workflows, promotional campaigns, and personalized messaging that keeps your brand top-of-mind.

          Conversion Rate Optimization (CRO): Turn site traffic into paying customers by analyzing user journeys, running A/B tests, and refining user experience pathways.
        </p>

        
      </>
    ),
  },

  {
    slug: "seo-strategies-online-growth",
    title: "SEO Strategies To Improve Your Online Presence",
    category: "SEO",
    date: "September 10, 2026",
    author: "Keyanntech Team",
    image: "/images/seoo.jpg",
    content: (
      <>
        <p>
          Search engine optimization helps websites improve their visibility
          in search results and attract relevant organic visitors.
        </p>

        <h2>Strategic SEO Solutions To Boost Your Online Presence</h2>

        <p>
          Having a stunning website is only half the battle—your target audience needs to be able to find it. With millions of searches performed on search engines every second, Search Engine Optimization (SEO) is the foundational asset that determines whether your business stands out or remains hidden in search results.

          Keyantech delivers end-to-end SEO strategies engineered to elevate search rankings, drive organic traffic, and secure long-term digital dominance for your business.
        </p>

        <h2>Why SEO is Crucial for Long-Term Digital Success</h2>

        <p>
          Sustainable Organic Traffic: Unlike paid advertising, which stops generating traffic the moment your budget ends, organic SEO delivers continuous, long-term visitors to your site.

          Enhanced Credibility & Authority: Higher search engine rankings naturally signal trustworthiness and industry authority to potential buyers.

          High-Intent Lead Generation: Search engine users are actively seeking solutions, products, or services. SEO positions your business directly in front of audiences at the precise moment they are ready to act.

          Better User Experience: Quality SEO involves optimizing site architecture, speed, mobile usability, and content quality—creating a faster, smoother experience for all visitors.
        </p>

        <h2>Comprehensive SEO Strategies We Implement</h2>

        <p>
          In-Depth Keyword Research: We uncover high-value search terms, long-tail queries, and buyer-intent keywords that align with your industry and customer behavior.

          On-Page Optimization: We fine-tune title tags, meta descriptions, header structure, internal linking, and content relevance to ensure search engine algorithms fully understand your pages.

          Technical SEO Auditing: We resolve underlying technical issues, optimizing website speed, mobile performance, XML sitemaps, indexability, and schema markup to keep search engines indexing your site smoothly.

          Authority Building & Off-Page SEO: We execute high-quality link-building campaigns, digital PR strategies, and content outreach to build domain authority and brand credibility across the web.

          Local SEO & Google Business Profile Management: Dominating local searches in Chandigarh and surrounding areas requires strategic local citation building, localized keyword targeting, and proactive review management.

          Continuous Monitoring & Analytics: We track rankings, organic traffic trends, and conversion metrics, continuously adapting your SEO strategy to stay ahead of search engine algorithm updates.

          Partner with Keyantech Today
          Whether you need to launch a complete digital marketing overhaul or dominate search engine rankings with targeted SEO, Keyantech provides the strategic insight, technical execution, and creative vision necessary to grow your brand.
        </p>
      </>
    ),
  },
];

function BlogDetail() {
  const { slug } = useParams();

  console.log("Current slug:", slug);

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="blog-not-found">
        <h1>Blog Not Found</h1>

        <p>
          The blog article you are looking for does not exist.
        </p>

        <Link to="/blog" className="back-to-blog">
          <ArrowLeft size={18} />
          Back To Blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="blog-detail-hero">
        <div className="blog-detail-container">

          <Link to="/blog" className="blog-back-link">
            <ArrowLeft size={18} />
            Back To Blog
          </Link>

          <span className="blog-detail-category">
            {blog.category}
          </span>

          <h1>{blog.title}</h1>

          <div className="blog-detail-meta">
            <span>
              <Calendar size={17} />
              {blog.date}
            </span>

            <span>
              <User size={17} />
              {blog.author}
            </span>
          </div>

        </div>
      </section>

      <section className="blog-detail-content">
        <div className="blog-detail-container">

          <img
            src={blog.image}
            alt={blog.title}
            className="blog-detail-image"
          />

          <article className="blog-article">
            {blog.content}
          </article>

          <div className="blog-detail-footer">
            <Link to="/blog" className="back-to-blog">
              <ArrowLeft size={18} />
              Back To Blog
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default BlogDetail;