import { useState, useEffect } from "react";

const SideScroller = () => {
  const sections = ["home", "section1", "section2", "section3"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        hidden           
        lg:flex          
        fixed 
        top-1/2 -translate-y-1/2 
        flex-col gap-2 
        z-50
        right-55
      "
    >
      {sections.map((id) => (
        <div
          key={id}
          className={`h-1 rounded-full transition-all duration-300 transform ${
            active === id
              ? "bg-sky-500 w-20 scale-x-110"
              : "bg-gray-300 w-8 hover:bg-sky-300"
          }`}
        />
      ))}
    </div>
  );
};

export default SideScroller;
