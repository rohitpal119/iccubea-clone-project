import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RegistrationTable = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Registration</h1>

        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-x-auto border border-gray-200">
          <table className="min-w-full text-center">
            <thead className="bg-gray-100 text-gray-700 text-lg">
              <tr>
                <th className="py-4 px-6 border-b">Category</th>
                <th className="py-4 px-6 border-b">Domestic</th>
                <th className="py-4 px-6 border-b">International</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-md">
              <tr>
                <td className="py-4 px-6 border-b">IEEE Member (Academician/Researcher/Industry)</td>
                <td className="py-4 px-6 border-b">₹8,000</td>
                <td className="py-4 px-6 border-b">$200</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Non-IEEE Member (Academician/Researcher/Industry)</td>
                <td className="py-4 px-6 border-b">₹10,000</td>
                <td className="py-4 px-6 border-b">$250</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">IEEE Student Member (UG/PG/Research Scholar)</td>
                <td className="py-4 px-6 border-b">₹5,000</td>
                <td className="py-4 px-6 border-b">$150</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Non-IEEE Student Member (UG/PG/Research Scholar)</td>
                <td className="py-4 px-6 border-b">₹6,000</td>
                <td className="py-4 px-6 border-b">$200</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Attendee (Without Paper)</td>
                <td className="py-4 px-6 border-b">₹2,000</td>
                <td className="py-4 px-6 border-b">$100</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Additional Paper</td>
                <td className="py-4 px-6 border-b">₹2,000</td>
                <td className="py-4 px-6 border-b">$50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="mt-10 bg-[#B70E2B] hover:bg-[#9a0c25] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
        >
          Register Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationTable;
