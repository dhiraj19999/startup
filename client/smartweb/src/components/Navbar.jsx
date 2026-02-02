import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Clients", id: "clients" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`w-full transition-all duration-500
        bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]
        ${scrolled ? "py-3 shadow-2xl" : "py-4"}`}
      >
        <div className="w-full px-8 lg:px-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-extrabold text-white">
            SmartWeb
            <span className="ml-1 bg-white text-[#0F172A] px-2 py-0.5 rounded-md">
              AI
            </span>
          </h1>

          {/* LINKS */}
          <ul className="hidden md:flex gap-10 text-white font-semibold">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <a href={`#${link.id}`} className="transition">
                  {link.name}
                </a>
                <span
                  className="absolute left-0 -bottom-2 h-[3px] w-0
                  bg-white rounded-full transition-all duration-300
                  group-hover:w-full"
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block px-7 py-2.5 rounded-full
            bg-white text-[#0F172A] font-bold
            hover:scale-110 transition"
          >
            Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
