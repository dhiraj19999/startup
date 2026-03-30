import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WebDevelopment from "./pages/subpages/Web";
import MobileAppDevelopment from "./pages/subpages/App";
import AiAutomation from "./pages/subpages/Ai";
import DashboardDevlopment from "./pages/subpages/Dashboard";
import ECommerce from "./pages/subpages/Ecom";
import CustomBusiness from "./pages/subpages/CustomBusiness";
import ScrollToTop from "./components/ScrollTop";
import VideoEditing from "./pages/subpages/Video";
import VFX from "./pages/subpages/Vfx";
import { Routes, Route } from "react-router-dom";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { Helmet } from "react-helmet-async";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>


<Helmet>
<title>
SmartWeb AI - Website Development, Mobile Apps & AI Automation India
</title>

<meta
name="description"
content="SmartWeb AI provides website development, mobile app development, AI automation, ecommerce, video editing and VFX services in Pune, Latur, Ambejogai and across India. Build SEO optimized digital solutions."
/>

<meta
name="keywords"
content="SmartWeb AI, website development India, mobile app development India, AI automation India, ecommerce development India, VFX services India, video editing services India, web developer Pune, web developer Latur"
/>

<meta name="robots" content="index, follow" />
<meta name="author" content="SmartWeb AI" />

<meta property="og:title" content="SmartWeb AI - Business Digital Solutions" />
<meta
property="og:description"
content="Websites, mobile apps, AI automation, ecommerce and VFX services for businesses across India."
/>

<meta property="og:type" content="website" />
<meta property="og:site_name" content="SmartWeb AI" />

<link rel="canonical" href="https://smartwebai.in/" />
</Helmet>


      <div>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />

        

    


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-app"
            element={<MobileAppDevelopment />}
          />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/dashboard" element={<DashboardDevlopment />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route
            path="/services/custom-software"
            element={<CustomBusiness />}
          />
           <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/vfx" element={<VFX />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Project />} />
         
        
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
