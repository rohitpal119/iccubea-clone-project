import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Cpu,
  Wifi,
  Bot,
  Leaf,
  Users,
  Globe,
} from "lucide-react";

const Iccubea = () => {
  const topics = [
    {
      title: "Artificial Intelligence",
      description: "Latest AI applications and research",
      icon: <Cpu className="w-10 h-10 text-green-600" />,
    },
    {
      title: "IoT & Connectivity",
      description: "Internet of Things innovations",
      icon: <Wifi className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Robotics",
      description: "Advanced robotics systems",
      icon: <Bot className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Sustainable Systems",
      description: "Green technology solutions",
      icon: <Leaf className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Industry Collaboration",
      description: "Academia-industry partnerships",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Global Network",
      description: "International research community",
      icon: <Globe className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <>
      <Header />

      <section className="bg-green-50 py-20 px-6 md:px-12 min-h-screen">
        <div className="text-center max-w-4xl mx-auto mb-14 px-4">
          <h2 className="text-5xl font-extrabold text-green-900 tracking-tight">
            About ICITET-2026
          </h2>
          <div className="mt-4 h-1 w-28 mx-auto bg-conference-orange rounded-full" />
          <p className="mt-6 text-green-700 text-lg leading-relaxed">
            The 4th International Conference on Innovative Trends in Engineering and Technology (ICITET-2026) brings together researchers, academicians, and industry professionals to explore cutting-edge developments in engineering and technology. Our focus spans across artificial intelligence, IoT, robotics, sustainable systems, and emerging technologies that shape our future.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {topics.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-md mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h3>
              <p className="text-green-700 text-base leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Iccubea;
