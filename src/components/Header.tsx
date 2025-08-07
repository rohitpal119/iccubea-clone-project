import { useState } from "react";
import { Button } from "@/components/ui/button";
import pcceoLogo from "@/assets/pccoe-logo.png";
import pcceoJubileeLogo from "@/assets/pccoe-silver-jubilee-logo.jpg";
import ieeeSection from "@/assets/ieee-pune-section.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("HOME");

  const navItems = [
    "HOME",
    "ABOUT US", 
    "ICCUBEA",
    "REGISTRATION",
    "COMMITTEE",
    "CALL FOR PAPERS",
    "SUBMISSION",
    "AWARDS",
    "DOWNLOADS",
    "SPONSORS",
    "CONTACT US"
  ];

  return (
    <header className=" w-full">
      {/* Top logos section */}
      <div className="bg-background border-b border-border py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 h-15 w-auto">
              <img src="/images/trinity-logo.png" alt="KJ Logo" className="h-28 w-auto" />

            </div>
            
            <div className="text-center flex-1 mx-8">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                4<sup>th</sup>International Conference on Innovative Trends in Engineering and Technology (ICITET-2026).
              </h1>
              {/* <p className="text-sm text-muted-foreground mt-1">
                (Smart Living: Exploring Sustainability, Connected Technologies & their Potential)
              </p>
              <p className="text-sm text-muted-foreground">
                (IEEE Conference Record Number 65967) (In-person Mode Only)
              </p> */}
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

      {/* Navigation section */}
      <nav className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === item
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground hover:bg-secondary-light"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
