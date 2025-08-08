import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ieeeSection from "@/assets/ieee-pune-section.png";

// Hamburger and close icons
const HamburgerIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 28 28">
    <rect width="24" height="2.5" x="2" y="6" rx="1" className="fill-current text-green-900" />
    <rect width="24" height="2.5" x="2" y="13" rx="1" className="fill-current text-green-900" />
    <rect width="24" height="2.5" x="2" y="20" rx="1" className="fill-current text-green-900" />
  </svg>
);

const CloseIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" className="stroke-white"/>
  </svg>
);

const navItems = [
  { name: "HOME", path: "/" },
  { name: "TRACKS", path: "/about" },
  { name: "ICITET", path: "/iccubea" },
  { name: "REGISTRATION", path: "/registration" },
  { name: "COMMITTEE", path: "/committee" },
  { name: "CALL FOR PAPERS", path: "/call-for-papers" },
  { name: "SPEAKERS", path: "/submission" },
  { name: "CONTACT US", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeTab = navItems.find(item => item.path === location.pathname)?.name || "HOME";

  const handleNavClick = (item) => {
    if (location.pathname !== item.path) {
      navigate(item.path);
    }
    setMobileMenuOpen(false); // always close drawer after selection
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-30">
      {/* Top Bar */}
      <div className="bg-background border-b border-border py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 h-15 w-auto">
            <img src="/images/logo.webp" alt="KJ Logo" className="h-16 w-auto" />
            {/* Hamburger for mobile */}
            <button
              className="ml-2 md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
          <div className="text-center flex-1 mx-4 hidden md:block">
            <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              4<sup>th</sup> International Conference on Innovative Trends in Engineering and Technology (ICITET-2026)
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <img src={ieeeSection} alt="IEEE Pune Section" className="h-11 w-auto hidden md:block" />
            <Button
              variant="outline"
              className="text-conference-orange border-conference-orange hover:bg-conference-orange hover:text-white"
            >ICITET-2026</Button>
          </div>
        </div>
        {/* Conference title for mobile only */}
        <div className="block md:hidden mt-3 text-center">
          <h1 className="text-base font-bold text-foreground leading-tight">
            4<sup>th</sup> ICITET 2026
          </h1>
          <p className="text-xs text-muted-foreground">Innovative Trends in Engineering and Technology</p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="bg-secondary hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-2 text-base font-medium whitespace-nowrap rounded transition-colors duration-150
                  ${activeTab === item.name
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-secondary-foreground hover:bg-secondary-light"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <aside
            className="fixed top-0 left-0 h-full w-64 bg-green-900 shadow-2xl p-6 flex flex-col z-50"
            tabIndex={0}
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between mb-6">
              <img src="/images/logo.webp" alt="KJ Logo" className="h-10 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-2 text-base font-medium rounded transition-colors duration-150
                    ${activeTab === item.name
                      ? "bg-green-700 text-white"
                      : "text-green-200 hover:bg-green-800 hover:text-white"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="https://www.kjei.edu.in/kjcoemr/international-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-conference-orange text-white rounded mt-2 text-center w-full font-medium"
              >
                Conference Website
              </a>
            </div>
          </aside>
          {/* Click outside to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
