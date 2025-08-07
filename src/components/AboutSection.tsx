import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const kjText =
    "KJ College of Engineering and Management Research (KJCOEMR) is one of the best Engineering Colleges in Maharashtra. It offers undergraduate courses in engineering in the branches of Computer, Electronics and Telecommunications, Civil and Mechanical. KJCOEMR provides comprehensive infrastructure including advanced laboratories, well-equipped libraries, experienced faculty, and industry collaborations, creating an environment conducive for innovation, research, and professional growth.";

  const iccubeaFullText =
    "The conference on 4th Innovative Trends in Engineering and Technology aims to highlight the latest advancements transforming the engineering landscape. As industries rapidly evolve, emerging technologies like AI, IoT, Robotics, Advanced Materials, Robotics & Automation, Digital Twin Technology, 3D Printing in Construction, advanced materials system and sustainable systems are redefining traditional engineering practices. This conference will serve as a dynamic platform for researchers, professionals, and students to exchange groundbreaking ideas and practical solutions. The focus lies on innovation that drives efficiency, safety, and sustainability across sectors. Sessions will delve into smart technologies, automation, green engineering, and digital transformation. Participants will explore how interdisciplinary approaches are shaping the future of engineering. The conference encourages collaboration between academia and industry to bridge the gap between research and real-world application. By sharing innovations and case studies, we aim to inspire future-ready engineers. Together, we can pave the way for a technologically advanced and sustainable world.";

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10">
          {/* KJCOEMR Card */}
          <Card className="shadow-lg rounded-2xl border border-green-200 h-[400px] overflow-hidden">
            <CardContent className="flex flex-col p-8 h-full">
              <h2 className="text-3xl font-extrabold mb-6 text-green-900">About KJCOEMR</h2>
              <div
                className="text-green-700 text-base leading-relaxed overflow-y-auto pr-2"
                style={{ maxHeight: "280px" }}
              >
                {kjText}
              </div>
            </CardContent>
          </Card>

          {/* ICITET Card */}
          <Card className="shadow-lg rounded-2xl border border-green-200 h-[400px] overflow-hidden">
            <CardContent className="flex flex-col p-8 h-full">
              <h2 className="text-3xl font-extrabold mb-6 text-green-900">About ICITET</h2>
              <div
                className="text-green-700 text-base leading-relaxed overflow-y-auto pr-2 whitespace-pre-line"
                style={{ maxHeight: "280px" }}
              >
                {iccubeaFullText}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
