import { Card, CardContent } from "@/components/ui/card";
import iccubeaLogo from "@/assets/iccubea-logo.png";

const ProceedingsSection = () => {
  const proceedings = [
    { year: "2024", link: "https://ieeexplore.ieee.org/xpl/conhome/10774565/proceeding" },
    { year: "2023", link: "https://ieeexplore.ieee.org/xpl/conhome/10391946/proceeding" },
    { year: "2022", link: "https://ieeexplore.ieee.org/xpl/conhome/10010701/proceeding" },
    { year: "2019", link: "https://ieeexplore.ieee.org/xpl/conhome/9125411/proceeding" },
    { year: "2018", link: "https://ieeexplore.ieee.org/xpl/conhome/8681925/proceeding" },
    { year: "2017", link: "https://ieeexplore.ieee.org/xpl/conhome/8443317/proceeding" },
    { year: "2016", link: "https://ieeexplore.ieee.org/xpl/conhome/7856390/proceeding" },
    { year: "2015", link: "https://ieeexplore.ieee.org/xpl/conhome/7155748/proceeding" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">Previous Conferences Proceedings</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6 justify-items-center">
          {proceedings.map((proceeding) => (
            <Card key={proceeding.year} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <a href={proceeding.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={iccubeaLogo} 
                    alt="ICCUBEA"
                    className="w-16 h-16 mx-auto mb-3 object-contain"
                  />
                  <h3 className="font-bold text-sm text-secondary">ICCUBEA {proceeding.year}</h3>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceedingsSection;