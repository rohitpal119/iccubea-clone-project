import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [showMoreKJ, setShowMoreKJ] = useState(false);
  const [showMoreICCUBEA, setShowMoreICCUBEA] = useState(false);

  const kjText =
    "KJ College of Engineering and Management Research (KJCOEMR) is one of the best Engineering Colleges in Maharashtra. It offers undergraduate courses in engineering in the branches of Computer, Electronics and Telecommunications, Civil and Mechanical.";

  const iccubeaFullText =
    "The conference on 4th Innovative Trends in Engineering and Technology aims to highlight the latest advancements transforming the engineering landscape. As industries rapidly evolve, emerging technologies like AI, IoT, Robotics, Advanced Materials, Robotics & Automation, Digital Twin Technology, 3D Printing in Construction, advanced materials system and sustainable systems are redefining traditional engineering practices. This conference will serve as a dynamic platform for researchers, professionals, and students to exchange groundbreaking ideas and practical solutions. The focus lies on innovation that drives efficiency, safety, and sustainability across sectors. Sessions will delve into smart technologies, automation, green engineering, and digital transformation. Participants will explore how interdisciplinary approaches are shaping the future of engineering. The conference encourages collaboration between academia and industry to bridge the gap between research and real-world application. By sharing innovations and case studies, we aim to inspire future-ready engineers. Together, we can pave the way for a technologically advanced and sustainable world.";

  const iccubeaShortText = iccubeaFullText.slice(0, 350) + "...";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* KJCOEMR Card */}
          <Card className="h-[380px] flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-secondary">
                About KJCOEMR
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1">
                {kjText}
              </p>
              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setShowMoreKJ(!showMoreKJ)}
                >
                  {showMoreKJ ? "Read Less" : "Read More"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ICCUBEA Card */}
          <Card className="h-[380px] flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-secondary">
                About ICITET
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1 overflow-y-auto">
                {showMoreICCUBEA ? iccubeaFullText : iccubeaShortText}
              </p>
              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setShowMoreICCUBEA(!showMoreICCUBEA)}
                >
                  {showMoreICCUBEA ? "Read Less" : "Read More"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
