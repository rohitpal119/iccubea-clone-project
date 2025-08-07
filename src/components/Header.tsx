// header.tsx (edited to include routing for all nav items)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ieeeSection from "@/assets/ieee-pune-section.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "ICCUBEA", path: "/iccubea" },
    { name: "REGISTRATION", path: "/registration" },
    { name: "COMMITTEE", path: "/committee" },
    { name: "CALL FOR PAPERS", path: "/call-for-papers" },
    { name: "SPEAKERS", path: "/submission" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const handleNavClick = (item: any) => {
    setActiveTab(item.name);
    navigate(item.path);
  };

  return (
    <header className="w-full">
      <div className="bg-background border-b border-border py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 h-15 w-auto">
              <img src="/images/logo.webp" alt="KJ Logo" className="h-28 w-auto" />
            </div>
            <div className="text-center flex-1 mx-8">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                4<sup>th</sup>International Conference on Innovative Trends in Engineering and Technology (ICITET-2026).
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <img src={ieeeSection} alt="IEEE Pune Section" className="h-15 w-auto" />
              <Button variant="outline" className="text-conference-orange border-conference-orange hover:bg-conference-orange hover:text-white">
                ICITET-2026
              </Button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === item.name
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground hover:bg-secondary-light"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
