import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-gray-900 text-white p-6">
  <div className="max-w-[95rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    
    <div className="flex flex-col min-w-0">
      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text mb-2">
        RONIX
      </h3>
      <p className="text-gray-400 text-[12px] md:text-sm leading-relaxed">
        Creating exceptional digital experiences for forward-thinking brands.
      </p>
    </div>

   <div className="flex flex-col min-w-0">
  <h4 className="font-bold mb-2">Services</h4>
  <ul className="flex flex-wrap sm:flex-col gap-4 text-gray-400 text-[12px] md:text-sm">
    <li><Link to="/design" className="hover:text-cyan-400">Design</Link></li>
    <li><Link to="/develop" className="hover:text-cyan-400">Develop</Link></li>
    <li><Link to="/market" className="hover:text-cyan-400">Market</Link></li>
    <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
  </ul>
</div>

    <div className="flex flex-col min-w-0">
      <h4 className="font-bold mb-2">Connect</h4>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/ronix-software" target="_blank" rel="noopener noreferrer"
          className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
          <Linkedin size={18} />
        </a>
        <a href="https://www.instagram.com/ronixsoftware/" target="_blank" rel="noopener noreferrer"
          className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
          <Instagram size={18} />
        </a>
        <a href="https://x.com/RonixSoftware" target="_blank" rel="noopener noreferrer"
          className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
          <Twitter size={18} />
        </a>
      </div>
    </div>

    <div className="flex flex-col min-w-0">
      <h4 className="font-bold mb-2">Contact</h4>
      <form className="flex flex-col gap-3">
        <input type="email" placeholder="Your email" className="p-2 rounded text-sm bg-gray-900 text-white border border-white placeholder-gray-400" />
        <textarea placeholder="Message" className="p-2 rounded text-sm h-20 resize-none bg-gray-900 text-white border border-white placeholder-gray-400"></textarea>
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded text-sm">
          Send
        </button>
      </form>
    </div>

  </div>

  <div className="border-t border-gray-800 mt-6 pt-3 text-gray-500 text-[11px] md:text-xs text-center">
    © {new Date().getFullYear()} Ronix. All rights reserved.
  </div>
</footer>

  );
}