import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Building2,
  Wrench,
  Zap,
  Monitor,
  Radio,
  BrainCircuit,
  FlaskConical,
} from "lucide-react";

const tracks = [
  {
    title: "Civil Engineering",
    description:
      "Structural engineering, transportation, environmental engineering, geotechnical engineering",
    color: "bg-emerald-700",
    icon: <Building2 className="text-white w-8 h-8" />,
  },
  {
    title: "Mechanical Engineering",
    description:
      "Manufacturing, thermal systems, materials science, automotive engineering",
    color: "bg-green-700",
    icon: <Wrench className="text-white w-8 h-8" />,
  },
  {
    title: "Electrical Engineering",
    description:
      "Power systems, renewable energy, electrical machines, smart grids",
    color: "bg-yellow-600",
    icon: <Zap className="text-white w-8 h-8" />,
  },
  {
    title: "Computer Engineering",
    description:
      "Software engineering, data structures, algorithms, cybersecurity",
    color: "bg-indigo-700",
    icon: <Monitor className="text-white w-8 h-8" />,
  },
  {
    title: "Electronics & Telecommunication",
    description:
      "Signal processing, communications, embedded systems, VLSI design",
    color: "bg-pink-600",
    icon: <Radio className="text-white w-8 h-8" />,
  },
  {
    title: "AI Applications",
    description:
      "Machine learning, deep learning, computer vision, natural language processing",
    color: "bg-blue-700",
    icon: <BrainCircuit className="text-white w-8 h-8" />,
  },
  {
    title: "Engineering Science",
    description:
      "Applied mathematics, physics, chemistry, interdisciplinary research",
    color: "bg-sky-700",
    icon: <FlaskConical className="text-white w-8 h-8" />,
  },
];

const About = () => {
  return (
    <>
      <Header />

      <section className="bg-green-50 py-20 px-6 md:px-12 min-h-screen">
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-green-900 tracking-tight">
            Conference Tracks
          </h2>
          <div className="mt-4 h-1 w-28 mx-auto bg-conference-orange rounded-full" />
          <p className="mt-6 text-green-700 text-lg leading-relaxed">
            ICITET-2026 welcomes research papers across diverse engineering and technology domains
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {tracks.map((track, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-md mb-6 ${track.color} shrink-0`}>
                {track.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">{track.title}</h3>
              <p className="text-green-700 text-base leading-relaxed flex-grow">{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
