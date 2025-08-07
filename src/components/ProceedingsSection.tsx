import { Card, CardContent } from "@/components/ui/card";
import iccubeaLogo from "@/assets/iccubea-logo.png";

const ProceedingsSection = () => {
  const proceedings = [
    { track: "Civil Engineering" },
    { track: "Mechanical Engineering" },
    { track: "Electrical Engineering" },
    { track: "Computer Engineering"},
    { track: "Electronics & Telecommunication"},
    { track: "AI Applications"},
    { track: "Engineering Science"},
   
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Conference Tracks</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pl-16">
          {proceedings.map((proceeding) => (
            <Card key={proceeding.track} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
              
                  <h3 className="font-bold text-sm text-secondary">{proceeding.track}</h3>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceedingsSection;
