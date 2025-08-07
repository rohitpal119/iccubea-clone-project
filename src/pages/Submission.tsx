import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Lightbulb } from "lucide-react";

const Submission = () => {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-white py-20 px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Keynote Speakers</h2>
          <div className="mt-2 h-1 w-24 mx-auto bg-conference-orange rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Learn from world-renowned experts and thought leaders in engineering and technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Speaker 1 */}
          <div className="bg-background p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-foreground">Dr. Anand Deva Durai</h3>
            <p className="text-conference-orange font-medium">
              Director, Intelligence Computing Centre
            </p>
            <div className="flex items-center mt-2 text-muted-foreground text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Department of Computer Science, King Khalid University, Saudi Arabia
            </div>
            <div className="flex items-center mt-1 text-muted-foreground text-sm">
              <Lightbulb className="w-4 h-4 mr-2" />
              Artificial Intelligence, Intelligent Computing
            </div>

            <div className="bg-conference-orange/10 p-4 mt-4 rounded-lg">
              <p className="font-semibold text-sm text-foreground">Keynote Topic:</p>
              <p className="text-conference-orange text-sm mt-1">
                "Advancements in Intelligent Computing and AI"
              </p>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="bg-background p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-foreground">Prof. Mukul S. Sutaone</h3>
            <p className="text-conference-orange font-medium">Director</p>
            <div className="flex items-center mt-2 text-muted-foreground text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              IIIT Allahabad, Prayagraj (U.P. - India)
            </div>
            <div className="flex items-center mt-1 text-muted-foreground text-sm">
              <Lightbulb className="w-4 h-4 mr-2" />
              Telecommunication, Signal Processing, Engineering Education
            </div>

            <div className="bg-conference-orange/10 p-4 mt-4 rounded-lg">
              <p className="font-semibold text-sm text-foreground">Keynote Topic:</p>
              <p className="text-conference-orange text-sm mt-1">
                "Innovation in Engineering Education and Technology Leadership"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">More speakers to be announced soon!</p>
          <a
            href="#"
            className="inline-block bg-conference-orange text-white px-6 py-2 rounded hover:bg-conference-orange/90 transition"
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
