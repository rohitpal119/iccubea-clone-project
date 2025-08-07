import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Lightbulb } from "lucide-react";

const Submission = () => {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-white py-20 px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-foreground tracking-tight">
            Keynote Speakers
          </h2>
          <div className="mt-3 h-1 w-28 mx-auto bg-conference-orange rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Learn from world-renowned experts and thought leaders in engineering and technology
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Speaker 1 */}
          <article className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-foreground leading-snug">
              Dr. Anand Deva Durai
            </h3>
            <p className="text-conference-orange font-semibold mt-1">
              Director, Intelligence Computing Centre
            </p>

            <div className="flex items-center mt-4 text-muted-foreground text-sm space-x-2">
              <Building2 className="w-5 h-5" />
              <span>Department of Computer Science, King Khalid University, Saudi Arabia</span>
            </div>
            <div className="flex items-center mt-2 text-muted-foreground text-sm space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span>Artificial Intelligence, Intelligent Computing</span>
            </div>

            <div className="bg-conference-orange/20 p-5 mt-6 rounded-lg">
              <p className="font-semibold text-sm text-foreground mb-1">Keynote Topic:</p>
              <p className="text-conference-orange text-md font-medium leading-relaxed">
                "Advancements in Intelligent Computing and AI"
              </p>
            </div>
          </article>

          {/* Speaker 2 */}
          <article className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-foreground leading-snug">
              Prof. Mukul S. Sutaone
            </h3>
            <p className="text-conference-orange font-semibold mt-1">Director</p>

            <div className="flex items-center mt-4 text-muted-foreground text-sm space-x-2">
              <Building2 className="w-5 h-5" />
              <span>IIIT Allahabad, Prayagraj (U.P. - India)</span>
            </div>
            <div className="flex items-center mt-2 text-muted-foreground text-sm space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span>Telecommunication, Signal Processing, Engineering Education</span>
            </div>

            <div className="bg-conference-orange/20 p-5 mt-6 rounded-lg">
              <p className="font-semibold text-sm text-foreground mb-1">Keynote Topic:</p>
              <p className="text-conference-orange text-md font-medium leading-relaxed">
                "Innovation in Engineering Education and Technology Leadership"
              </p>
            </div>
          </article>
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6 text-lg font-medium">
            More speakers to be announced soon!
          </p>
          <a
            href="#"
            className="inline-block bg-conference-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-conference-orange/90 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-conference-orange/50"
            aria-label="Propose a Speaker"
          >
            Propose a Speaker
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Submission;
