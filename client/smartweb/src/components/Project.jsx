import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    name: "E-Commerce Website",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    link: "https://example.com",
  },
  {
    name: "Business Portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "https://example.com",
  },
  {
    name: "AI Chatbot",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    link: "https://example.com",
  },
  {
    name: "CRM System",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "https://example.com",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 min-h-screen py-20 px-6">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Our Projects
        </h1>
        <p className="text-slate-600 text-lg">
          Swipe or use arrows to explore our work
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
                
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {project.name}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold hover:opacity-90 transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;