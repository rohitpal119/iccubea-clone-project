import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Organizing committee data
const data = {
  convener: [
    {
      name: "Dr. Suhas Khot",
      title: "Conference Convener",
      institute: "KJCOEMR, Pune",
    },
  ],
  technicalChairs: [
    { name: "Dr. Nikita Kulkarni", title: "Technical Program Chair", institute: "KJCOEMR, Pune" },
    { name: "Dr. Shankar Amalraj", title: "Technical Program Chair", institute: "KJCOEMR, Pune" },
    { name: "Dr. Pramod Chavan", title: "Technical Program Chair", institute: "KJCOEMR, Pune" },
    { name: "Prof. Rahimraja G. Shaikh", title: "Technical Program Chair", institute: "KJCOEMR, Pune" },
  ],
  technicalCommittee: [
    { name: "Dr. Prajakta Deshmukh", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Atul Pujari", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Sunita Deshmukh", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Neha Shahare", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Prof. Gayatri Patil", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Prof. Mohit Shakya", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Aparna Hambarde", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Rajendra Zope", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Hema Koli", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Vivek Kordei", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Sangita Thakre", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Meenekshi Patil", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Rohit Gowde", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Samir Potdar", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Dr. Shaveta Thakral", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },
    { name: "Prof. Abhishek Taware", title: "Technical Program Committee", institute: "KJCOEMR, Pune" },

    
  ],
};

const TABS = [
  { name: "Convener", key: "convener" },
  { name: "Technical Program Chair", key: "technicalChairs" },
  { name: "Technical Committee", key: "technicalCommittee" },
];

const Committee = () => {
  const [selectedTab, setSelectedTab] = useState("convener");
  const members = data[selectedTab] || [];

  // The shared member card JSX to avoid repetition
  const renderMemberCard = (member, index) => (
    <article
      key={index}
      className="bg-white rounded-xl shadow-md w-full max-w-sm p-6 flex flex-col items-start space-y-3 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-100 rounded-full h-12 w-12 flex items-center justify-center text-green-700 text-3xl select-none">
          👤
        </div>
        <div className="flex flex-col">
          <h3 className="text-green-900 font-semibold text-lg leading-tight">{member.name}</h3>
          <p className="text-green-700 text-sm font-medium">{member.title}</p>
        </div>
      </div>
      <p className="text-green-600 text-base ml-16 -mt-1 font-medium">{member.institute}</p>
    </article>
  );

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-center text-4xl font-extrabold text-green-800 mb-3 tracking-tight">
          Organizing Committee
        </h2>
        <p className="text-center text-green-600 max-w-xl mx-auto mb-10 text-lg sm:text-xl font-medium">
          Meet the distinguished academics and researchers organizing ICITET-2026
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-100">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={`relative px-5 py-3 font-semibold rounded-full transition-colors duration-300 whitespace-nowrap
                ${
                  selectedTab === tab.key
                    ? "bg-green-700 text-white shadow-lg shadow-green-300/30"
                    : "bg-green-200 text-green-800 hover:bg-green-400 hover:text-white"
                }
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              `}
              aria-pressed={selectedTab === tab.key}
            >
              {tab.name}
              {selectedTab === tab.key && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full bg-green-900"></span>
              )}
            </button>
          ))}
        </div>

        {/* Members list - center single convener; grid for others */}
        {selectedTab === "convener" ? (
          <div className="flex justify-center">{members.map(renderMemberCard)}</div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {members.map(renderMemberCard)}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Committee;
 