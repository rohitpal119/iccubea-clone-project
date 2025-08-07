import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RegistrationTable = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-green-50 flex flex-col items-center px-4 py-16">
        <h1 className="text-4xl font-extrabold text-green-900 mb-12 text-center leading-tight max-w-3xl">
          Registration Fees
        </h1>

        <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-x-auto border border-green-200">
          <table className="min-w-full table-auto text-center divide-y divide-green-200">
            <thead className="bg-green-100 text-green-800 text-lg font-semibold tracking-wide">
              <tr>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Domestic (INR)</th>
                <th className="py-4 px-6">International (USD)</th>
              </tr>
            </thead>
            <tbody className="text-green-900 text-md divide-y divide-green-100">
              {[
                {
                  category: "IEEE member (Faculty)	7,000/-	130$",
                  domestic: "₹7,000",
                  international: "$130",
                },
                {
                  category: "NON- IEEE (Faculty)",
                  domestic: "₹9,000",
                  international: "$150",
                },
                {
                  category: "IEEE Student Member (UG/PG/Research Scholar)",
                  domestic: "₹6,000",
                  international: "$100",
                },
                {
                  category: "Fellow-Industries",
                  domestic: "₹12,000",
                  international: "$175",
                },
                {
                  category: "NON- IEEE student",
                  domestic: "₹7,000",
                  international: "$130",
                },
                {
                  category: "Attendees",
                  domestic: "₹2,000",
                  international: "$50",
                },
              ].map(({ category, domestic, international }, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-green-50 transition-colors duration-200"
                >
                  <td className="py-5 px-6 text-left font-medium">{category}</td>
                  <td className="py-5 px-6">{domestic}</td>
                  <td className="py-5 px-6">{international}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          className="mt-12 bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
        >
          Register Now
        </button>
      </main>
      <Footer />
    </>
  );
};

export default RegistrationTable;
