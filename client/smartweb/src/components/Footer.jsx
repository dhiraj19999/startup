import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Footer() {

const whatsappLink = `https://wa.me/918459116231?text=${encodeURIComponent(
`Hi SmartWeb AI 👋

I'm interested in your services.
Please share details.`
)}`;

const gmailLink =
"https://mail.google.com/mail/?view=cm&fs=1&to=info@smartwebai.in&su=Project%20Inquiry&body=Hi%20SmartWeb%20AI,%0A%0AI%20am%20interested%20in%20your%20services.";
return (
<footer className="bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF] pt-20 pb-10">
<Helmet>
<title>
SmartWeb AI | Website Development, Mobile Apps & AI Automation India
</title>

<meta 
name="description" 
content="SmartWeb AI provides website development, mobile app development, AI automation, ecommerce, video editing and VFX services across Pune, Latur, Ambejogai and all over India. Contact us for free consultation."
/>

<meta 
name="keywords" 
content="SmartWeb AI, website developer Pune, website developer Latur, mobile app developer India, AI automation company, ecommerce development India, VFX video editing company, SmartWeb AI contact"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="SmartWeb AI - Business Digital Solutions" />

<meta 
property="og:description" 
content="Websites, mobile apps, AI automation, ecommerce and VFX services for businesses across India."
/>

<meta property="og:type" content="website" />

<meta name="author" content="SmartWeb AI" />
</Helmet>
<div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

{/* BRAND */}
<div>
<h3 className="text-2xl font-extrabold mb-4">
SmartWeb <span className="text-[#22FF88]">AI</span>
</h3>

<p className="text-gray-600 leading-relaxed mb-6">
SmartWeb AI provides website development, mobile apps, AI automation,
ecommerce, dashboards, video editing and VFX solutions to help
businesses attract customers and grow digitally.
</p>

<div className="flex gap-4 text-xl">

<a
href={whatsappLink}
target="_blank"
className="hover:text-[#22FF88]"
>
<FaWhatsapp/>
</a>

<a
href="https://instagram.com/smartwebai"
target="_blank"
className="hover:text-[#22FF88]"
>
<FaInstagram/>
</a>

<a
href="https://linkedin.com/company/smartweb-ai"
target="_blank"
className="hover:text-[#22FF88]"
>
<FaLinkedin/>
</a>

<a
href={gmailLink}
className="hover:text-[#22FF88]"
>
<FaEnvelope/>
</a>

</div>
</div>


{/* SERVICES */}
<div>
<h4 className="font-bold text-lg mb-5">
Services
</h4>

<ul className="space-y-3 text-gray-600">

<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/web-development">Website Development</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/mobile-app">Mobile App Development</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/ai-automation">AI Automation</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/ecommerce">E-Commerce</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/dashboard">Dashboard</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/services/custom-software">Custom Software</Link></li>
<li><Link to="/services/video-editing">Video Editing</Link></li>
<li><Link to="/services/vfx">VFX</Link></li>

</ul>
</div>


{/* QUICK LINKS */}
<div>
<h4 className="font-bold text-lg mb-5">
Quick Links
</h4>

<ul className="space-y-3 text-gray-600">

<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/#home">Home</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/#services">Services</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/#projects">Projects</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/#clients">Clients</Link></li>
<li><Link  className="transition-colors duration-200 hover:text-[#00E5CC]" to="/#contact">Contact</Link></li>

</ul>
</div>


{/* CONTACT */}
<div>
<h4 className="font-bold text-lg mb-5">
Contact
</h4>

<div className="space-y-3 text-gray-600">
<p>📍 Latur, Maharashtra, India</p>
<p>📞 +91 8459116231</p>
<p>✉ info@smartwebai.in</p>
</div>

<a
href={whatsappLink}
target="_blank"
className="inline-block mt-6 px-6 py-3 rounded-full
bg-gradient-to-r from-[#22FF88] to-[#00E5CC]
font-semibold shadow hover:scale-105 transition"
>
Get Free Quote
</a>

</div>

</div>


{/* bottom */}
<div className="border-t mt-16 pt-8
flex flex-col md:flex-row justify-between items-center gap-4">

<p className="text-gray-500 text-sm">
© 2026 SmartWeb AI. All rights reserved.
</p>

<div className="flex gap-6 text-sm text-gray-500">
<a href="#">Privacy Policy</a>
<a href="#">Terms & Conditions</a>
</div>

</div>

</div>
</footer>
);
}