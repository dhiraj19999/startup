import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`w-full transition-all duration-500
        bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]
        ${scrolled ? "py-3 shadow-2xl" : "py-4"}`}
      >
        <div className="w-full px-8 lg:px-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="font-poppins text-2xl font-extrabold text-white tracking-wide">
            SmartWeb
            <span className="ml-1 text-[#0F172A] bg-white px-2 py-0.5 rounded-md">
              AI
            </span>
          </h1>

          {/* NAV LINKS */}
          <ul className="hidden md:flex gap-12 font-inter text-[15px] font-semibold text-white">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer group"
              >
                <span className="group-hover:text-[#0F172A] transition">
                  {item}
                </span>
                <span
                  className="absolute left-0 -bottom-2 h-[3px] w-0
                  bg-white rounded-full transition-all duration-300
                  group-hover:w-full"
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="hidden md:block font-inter px-7 py-2.5 rounded-full
            bg-white text-[#0F172A] font-bold
            hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]
            transition duration-300"
          >
            Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
