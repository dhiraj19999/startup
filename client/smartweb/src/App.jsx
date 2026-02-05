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
import { Routes, Route } from "react-router-dom";
import Clients from "./components/Clients";
function App() {
  return (
    <>
      <div>
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
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
