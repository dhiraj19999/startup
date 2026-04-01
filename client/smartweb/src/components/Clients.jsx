import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const Clients = () => {
 

  
const testimonials = [
{
text:"SmartWeb AI delivered a professional business website and automation system that perfectly matched our requirements. Their team understood our goals, improved the user experience, and built a fast, scalable platform. After launch, we saw better lead generation, improved customer engagement, and overall growth in our digital presence.",
company:"NovaTech",
ceo:"Rahul Sharma"
},

{
text:"We hired SmartWeb AI for mobile app and dashboard development, and the results exceeded our expectations. The app performance, UI design, and backend architecture were all professionally built. Our workflow is now automated, data tracking is easier, and our team productivity has significantly improved.",
company:"ShopEase",
ceo:"Amit Patel"
},

{
text:"SmartWeb AI helped us launch our startup with a complete digital solution including website, admin panel, and branding videos. Their communication was clear, delivery was on time, and the final product was scalable and secure. We highly recommend them for startups looking for long-term technology partners.",
company:"Ono Travels",
ceo:"Ravi Kumar"
},

{
text:"Working with SmartWeb AI was a great experience. They developed our e-commerce platform with smooth checkout, fast loading speed, and mobile-friendly design. The platform is easy to manage and optimized for conversions. Our online sales improved and customers now have a better shopping experience.",
company:"LocalMart",
ceo:"Sanjay Deshmukh"
},

{
text:"SmartWeb AI built our custom business software and analytics dashboard which helped us streamline operations and monitor performance in real time. The system is secure, scalable, and easy to use. Their team provided excellent support and ensured everything worked perfectly after launch.",
company:"PropertyHub",
ceo:"Rahul Mehta "
}
];





  return (
    <div className="w-full overflow-hidden">
<Helmet>
<title>
Our Clients & Testimonials | SmartWeb AI | Website, App & AI Development
</title>

<meta
name="description"
content="See how SmartWeb AI helps startups and businesses with website development, mobile apps, AI automation, ecommerce, dashboards, video editing and VFX services. Read client testimonials and success stories."
/>

<meta
name="keywords"
content="SmartWeb AI clients, client testimonials, web development clients, mobile app development clients, AI automation clients, startup web development company India, SmartWeb AI portfolio, business website clients"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="SmartWeb AI Clients & Testimonials" />

<meta
property="og:description"
content="Trusted by startups and businesses across India. See testimonials and success stories from SmartWeb AI clients."
/>

<meta property="og:type" content="website" />

<link rel="canonical" href="https://smartwebai.in/clients" />
</Helmet>
      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-br from-[#E6FFF5] to-[#ECFEFF]">
        <h1 className="text-5xl font-extrabold mb-4">
          Our Happy Clients
        </h1>
        <p className="text-gray-600">
          We’ve helped startups and businesses build powerful digital products
        </p>
      </section>


      {/* CLIENTS SLIDER */}
     <section className="py-24 overflow-hidden">
  <h2 className="text-4xl font-extrabold text-center mb-16">
    Trusted by Businesses & Startups
  </h2>

  <div className="slider gap-16 items-center">

    {[
      "https://rafameditours.com/wp-content/uploads/2025/11/logo-3-150x150.png",
      "https://ono-customer-ui-img.s3.ap-south-1.amazonaws.com/onologo1.webp",
      "https://jitendrasirclasses.in/uploads/settings/1769853908_d6dcc639e39f8df15d43.png",
      "https://aaryashprints.in/images/logo-1.png",
      "https://healix-frontend-kappa.vercel.app/assets/Healix-D_nVAUYY.png",
      "https://foodie-app-3410b.web.app/logo.png",
      
    ]
    .concat([
      "https://rafameditours.com/wp-content/uploads/2025/11/logo-3-150x150.png",
      "https://ono-customer-ui-img.s3.ap-south-1.amazonaws.com/onologo1.webp",
      "https://jitendrasirclasses.in/uploads/settings/1769853908_d6dcc639e39f8df15d43.png",
      "https://aaryashprints.in/images/logo-1.png",
      "https://healix-frontend-kappa.vercel.app/assets/Healix-D_nVAUYY.png",
      "https://foodie-app-3410b.web.app/logo.png",
     
    ])
    .map((logo, i) => (
      <div
        key={i}
        className="min-w-[160px] flex items-center justify-center
          transition duration-300"
      >
        <img
          src={logo}
          alt="client logo"
          className="h-16 object-contain"
        />
      </div>
    ))}

  </div>
</section>

      {/* SERVICES SLIDER */}
     <section className="py-24 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF] overflow-hidden">
  <h2 className="text-4xl font-extrabold text-center mb-16">
    How We Help Our Clients
  </h2>

  <div className="slider gap-6" style={{ animationDuration: "22s" }}>

    {[
      {name:"Website Development",color:"from-cyan-400 to-blue-500"},
      {name:"Mobile App Development",color:"from-purple-400 to-pink-500"},
      {name:"AI Automation",color:"from-emerald-400 to-green-500"},
      {name:"E-Commerce Solutions",color:"from-orange-400 to-red-500"},
      {name:"Custom Software",color:"from-indigo-400 to-blue-600"},
      {name:"Business Dashboard",color:"from-yellow-400 to-amber-500"},
      {name:"Video Editing",color:"from-rose-400 to-pink-600"},
      {name:"VFX & Motion Graphics",color:"from-violet-500 to-purple-700"},
    ]
    .concat([
      {name:"Website Development",color:"from-cyan-400 to-blue-500"},
      {name:"Mobile App Development",color:"from-purple-400 to-pink-500"},
      {name:"AI Automation",color:"from-emerald-400 to-green-500"},
      {name:"E-Commerce Solutions",color:"from-orange-400 to-red-500"},
      {name:"Custom Software",color:"from-indigo-400 to-blue-600"},
      {name:"Business Dashboard",color:"from-yellow-400 to-amber-500"},
      {name:"Video Editing",color:"from-rose-400 to-pink-600"},
      {name:"VFX & Motion Graphics",color:"from-violet-500 to-purple-700"},
    ])
    .map((service,i)=>(
      <div
        key={i}
        className={`min-w-[260px] p-6 rounded-xl text-white font-bold shadow-xl
        bg-gradient-to-r ${service.color}`}
      >
        {service.name}
      </div>
    ))}

  </div>
</section>


      {/* TESTIMONIALS SLIDER */}
      <section className="py-24 overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="slider gap-8" style={{ animationDuration: "30s" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
<div
  key={i}
  className="w-[320px] flex-shrink-0 p-6 bg-white shadow-xl rounded-2xl"
>
  <p className="mb-4 text-gray-600 text-[15px] leading-relaxed break-words whitespace-pre-line">
    {t.text}
  </p>

  <div className="text-yellow-400 mb-4">★★★★★</div>

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#22FF88] text-white flex items-center justify-center font-bold">
      {t.ceo[0]}
    </div>

    <div>
      <h4 className="font-bold">{t.company}</h4>
      <span className="text-sm text-gray-500">
        CEO - {t.ceo}
      </span>
    </div>
  </div>
</div>
          ))}
        </div>
      </section>


      {/* STATS */}
      <section className="py-24 bg-gradient-to-r from-[#22FF88] to-[#00E5CC] text-white">
        <div className="grid md:grid-cols-4 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">40+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">30+</h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Industries Served</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>


      {/* CTA */}
     


      {/* animation */}
      <style>
        {`
        .slider{
          display:flex;
          width:max-content;
          animation:scrollRightToLeft 25s linear infinite;
        }

        @keyframes scrollRightToLeft {
          0%{
            transform:translateX(0);
          }
          100%{
            transform:translateX(-50%);
          }
        }
        `}
      </style>

    </div>
  );
};

export default Clients;