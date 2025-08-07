import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaFileAlt, FaCloudUploadAlt, FaSearch, FaRegIdBadge } from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt className="text-4xl text-green-600" />,
    title: "Prepare Manuscript",
    desc: "Follow IEEE format guidelines for paper preparation",
  },
  {
    icon: <FaCloudUploadAlt className="text-4xl text-green-600" />,
    title: "Submit via EasyChair",
    desc: "Upload your paper through our submission portal",
  },
  {
    icon: <FaSearch className="text-4xl text-green-600" />,
    title: "Peer Review",
    desc: "Your paper will undergo rigorous peer review",
  },
  {
    icon: <FaRegIdBadge className="text-4xl text-green-600" />,
    title: "Publication",
    desc: "Accepted papers will be published in indexed journals",
  },
];

const CallForPapers = () => (
  <>
    <Header />
    <main className="bg-green-50 min-h-screen py-16 px-6 sm:px-12 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-green-900 text-center mb-4 sm:mb-6 max-w-3xl leading-tight">
        Call for Papers
      </h2>
      <p className="text-center text-green-700 max-w-3xl mb-12 text-lg sm:text-xl font-medium">
        Submit your research contributions to ICITET-2026 and share your innovations with the global community
      </p>

      <h3 className="text-center text-green-900 font-semibold text-2xl mb-8 tracking-wide">
        Submission Process
      </h3>

      <div className="flex flex-wrap gap-10 justify-center max-w-6xl w-full px-2 sm:px-0">
        {steps.map((step, idx) => (
          <article
            key={step.title}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-64 transition-transform transform hover:scale-105 cursor-default"
            aria-label={`${step.title} step`}
          >
            <div className="flex justify-center w-full mb-5">
              {step.icon}
            </div>
            <h4 className="text-green-900 text-center text-xl font-bold mb-2 px-2">{step.title}</h4>
            <p className="text-green-700 text-center text-sm leading-relaxed px-3">{step.desc}</p>
            <span className="mt-6 inline-block text-green-500 text-2xl font-extrabold select-none">
              {idx + 1}
            </span>
          </article>
        ))}
      </div>

      <section className="mt-16 max-w-3xl text-center text-green-800 text-lg font-semibold">
        Call For Papers Website URL:{" "}
        <a
          href="https://www.kjei.edu.in/kjcoemr/international-conference"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-600 transition-colors duration-200"
        >
          https://www.kjei.edu.in/kjcoemr/international-conference
        </a>
      </section>
    </main>
    <Footer />
  </>
);

export default CallForPapers;
