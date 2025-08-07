import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Minimalist SVG icons for clean modern look
const iconSizeClasses = "w-6 h-6 text-green-700";

const Contact = () => (
  <>
    <Header />
    <main className="bg-green-50 min-h-screen flex flex-col items-center py-16 px-6 sm:px-10">
      <h1 className="text-4xl font-extrabold text-green-800 mb-10 text-center tracking-tight">
        Get in Touch
      </h1>

      <section className="max-w-xl w-full space-y-10 text-green-900">
        {/* Email */}
        <div className="flex items-center gap-6">
          <span className="bg-green-100 p-3 rounded-full flex justify-center items-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={iconSizeClasses}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <a
              href="mailto:nikitakulkarni.kjcoemr@kjei.edu.in"
              className="text-green-700 hover:text-green-900 underline break-words"
            >
              nikitakulkarni.kjcoemr@kjei.edu.in
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-6">
          <span className="bg-green-100 p-3 rounded-full flex justify-center items-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={iconSizeClasses}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path d="M2.25 2.25l7.5 7.5m-4.5 4.5L21.75 21.75" />
              <path d="M21 15.75a2.25 2.25 0 01-1.125 1.95l-4.875 2.85a2.25 2.25 0 01-3.15-1.05l-2.7-7.35a2.25 2.25 0 011.65-2.925l7.2-1.8a2.25 2.25 0 012.1 2.925l-1.5 5.5z" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="text-green-700">+91 91752 95782</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-6">
          <span className="bg-green-100 p-3 rounded-full flex justify-center items-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={iconSizeClasses}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path d="M12 21s7-6.705 7-11a7 7 0 10-14 0c0 4.295 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold">Address</h2>
            <address className="not-italic text-green-700 leading-relaxed max-w-sm">
              KJ College of Engineering &amp; Management Research, Pune, Maharashtra, India
            </address>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-center gap-6">
          <span className="bg-green-100 p-3 rounded-full flex justify-center items-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={iconSizeClasses}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5l3 3" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold">Office Hours</h2>
            <p className="text-green-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        {/* About the Venue */}
        <section className="mt-8 border-t border-green-200 pt-6 max-w-xl text-green-800">
          <h2 className="text-xl font-semibold mb-2">About the Venue</h2>
          <p className="leading-relaxed">
            KJ College of Engineering &amp; Management Research is a premier educational institution located in Pune, Maharashtra.
            The college provides state-of-the-art facilities including modern auditoriums, seminar halls, and accommodation facilities for conference attendees.
          </p>
        </section>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
