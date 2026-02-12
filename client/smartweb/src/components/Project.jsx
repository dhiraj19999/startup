import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fast, scalable e-commerce platform with secure payments and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web Development",
  },
  {
    title: "Business Portfolio",
    description:
      "Modern portfolio website for startups to showcase services and projects.",
    tech: ["React", "Tailwind CSS"],
    category: "Website",
  },
  {
    title: "Mobile App UI",
    description:
      "User-friendly mobile app interface designed for high engagement.",
    tech: ["React Native", "Firebase"],
    category: "Mobile App",
  },
  {
    title: "AI Chatbot",
    description:
      "AI-powered chatbot for customer support and lead generation.",
    tech: ["OpenAI", "Node.js", "Express"],
    category: "AI Automation",
  },
  {
    title: "CRM System",
    description:
      "Custom CRM to manage clients, sales pipeline, and reports.",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "Software",
  },
  {
    title: "Landing Page",
    description:
      "High-conversion landing page optimized for speed and SEO.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    category: "Marketing",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Our Projects
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          We build modern websites, apps, and AI solutions that help businesses
          grow faster and smarter.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300"
            >
              <span className="inline-block mb-3 text-sm font-semibold text-emerald-500">
                {project.category}
              </span>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-slate-900 text-white px-4">
        <h2 className="text-4xl font-bold mb-4">
          Want a Project Like This?
        </h2>
        <p className="max-w-xl mx-auto text-slate-300 mb-8">
          Let’s build something amazing together. Tell us about your idea and
          we’ll turn it into reality.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 font-semibold text-white hover:opacity-90 transition">
            Get Free Quote
          </button>
          <button className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition">
            WhatsApp Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
