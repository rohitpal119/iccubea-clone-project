import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-secondary">About PCCOE</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pimpri Chinchwad College of Engineering (PCCOE) is one of the best Engineering Colleges in Maharashtra. 
                It offers under graduate courses in engineering in the branches of Civil, Computer, Electronics and 
                Telecommunications, Information Technology and Mechanical, with intake of 840 students.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-secondary">About ICCUBEA</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                9th International Conference on Control Communication, Computing & Automation 2025
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;