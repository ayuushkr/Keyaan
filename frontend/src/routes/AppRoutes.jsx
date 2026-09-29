import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BlogDet from "../pages/BlogDet/BlogDet";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/About" element={<About />} />

      <Route path="/Blog" element={<Blog />} />
      
      <Route path="/BlogDet" element={<BlogDet />} />

      <Route path="/Blog/:slug" element={<BlogDet />} />

      <Route path="/Portfolio" element={<Portfolio/>} />

      <Route path="/Contact" element={<Contact/>} />


      
      

    </Routes>
  );
}

export default AppRoutes;