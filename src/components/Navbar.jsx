import { CodeXml, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center relative text-sm">
        <div className="flex items-center flex-shrink-0 gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-peach text-peach-ink">
              <CodeXml className="size-4.5" aria-hidden="true" />
            </span>
          <span className="text-2xl tracking-tight font-extrabold italic text-[#0B1C33]">CaTech</span>
        </div>

        <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-slate-700 hover:text-[#0B1C33] transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex justify-center space-x-6 items-center">
          <a href="#" className="py-2 px-4 border border-slate-300 rounded-lg font-medium hover:bg-slate-50">
            Sign In
          </a>
          <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 py-2.5 px-4 rounded-lg text-white font-medium shadow-sm">
            Create an Account
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="p-2 rounded-lg hover:bg-slate-100">
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed top-16 left-0 right-0 z-20 bg-white border-b border-slate-200 w-full p-8 flex flex-col items-center lg:hidden shadow-lg">
          <ul className="w-full text-center">
            {navItems.map((item, index) => (
              <li key={index} className="py-3">
                <a href={item.href} onClick={() => setMobileDrawerOpen(false)} className="text-slate-700 font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="py-2.5 px-6 border border-slate-300 rounded-lg font-medium">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 py-2.5 px-6 rounded-lg text-white font-medium">
              Create an Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;