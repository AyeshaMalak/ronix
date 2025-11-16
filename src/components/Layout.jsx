import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50 flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/home")}>
        <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-24 object-contain" />
      </header>
      <div
        className="
          fixed z-50 text-black flex gap-4
          bottom-0 left-0 w-full px-4 py-2 bg-white shadow-md
          md:bg-transparent md:shadow-none md:flex-col md:w-auto
          md:left-[30px] md:top-[40%] md:-translate-y-0
        "
      >
        <Link
          to="/portfolio"
          className="
            font-extrabold uppercase text-base sm:text-lg flex-1 text-center py-3 rounded-md
            md:flex-none md:text-xl md:font-extrabold md:py-1
            md:[writing-mode:vertical-lr] md:rotate-180
            hover:text-[#0084FF] transition-colors
          "
        >
          PORTFOLIO
        </Link>

        <Link
          to="/contact"
          className="
            font-extrabold uppercase text-base sm:text-lg flex-1 text-center py-3 rounded-md
            md:flex-none md:text-xl md:font-extrabold md:py-1
            md:[writing-mode:vertical-lr] md:rotate-180
            hover:text-[#0084FF] transition-colors
          "
        >
          CONTACT
        </Link>
      </div>

    
      <main className="pt-32">{children}</main>
    </div>
  );
};

export default Layout;
