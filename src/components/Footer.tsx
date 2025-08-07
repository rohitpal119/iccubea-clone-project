import React from "react";

const Footer = () => (
  <footer className="bg-green-800 text-green-100 pt-10 pb-6 px-4">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-between">
      {/* Left: About/Contact */}
      <div className="min-w-[220px] mb-6 lg:mb-0">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/images/logo.webp" // update to your logo path
            alt="ICITET-2026 Logo"
            className="w-10 h-10 rounded bg-green-900 p-1"
          />
          <div>
            <span className="font-bold text-lg tracking-wide text-green-50">ICITET-2026</span>
            <br />
            <span className="text-green-300 text-sm">4th International Conference</span>
          </div>
        </div>
        <p className="text-green-300 text-sm mb-3">
          Join us for the 4th International Conference on Innovative Trends in Engineering and Technology,
          bringing together researchers, academicians, and professionals.
        </p>
        <div className="space-y-1 text-green-200 text-sm">
          <div className="flex items-start gap-2">
            <span>📍</span>
            <span>KJCOEMR Campus, Pune, India</span>
          </div>
          <div className="flex items-start gap-2">
            <span>✉️</span>
            <span>nikitakulkarni.kjcoemr@kjei.edu.in</span>
          </div>
          <div className="flex items-start gap-2">
            <span>📞</span>
            <span>+91 91752 95782</span>
          </div>
        </div>
      </div>

      {/* Middle: Quick Links */}
      <div className="min-w-[160px]">
        <div className="font-semibold text-green-50 mb-3">Quick Links</div>
        <ul className="space-y-2 text-green-200 text-sm">
          <li><a href="/about" className="hover:text-green-400">About Conference</a></li>
          <li><a href="/dates" className="hover:text-green-400">Important Dates</a></li>
          <li><a href="/registration" className="hover:text-green-400">Registration</a></li>
          <li><a href="/call-for-papers" className="hover:text-green-400">Call for Papers</a></li>
          <li><a href="/committee" className="hover:text-green-400">Committee</a></li>
          <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
        </ul>
      </div>

      {/* Right: Resources */}
      <div className="min-w-[160px]">
        <div className="font-semibold text-green-50 mb-3">Resources</div>
        <ul className="space-y-2 text-green-200 text-sm">
          <li><a href="#" className="hover:text-green-400">Paper Template</a></li>
          <li><a href="#" className="hover:text-green-400">Conference Brochure</a></li>
          <li><a href="#" className="hover:text-green-400">Accommodation</a></li>
          <li><a href="#" className="hover:text-green-400">Travel Information</a></li>
          <li><a href="#" className="hover:text-green-400">Visa Information</a></li>
          <li><a href="#" className="hover:text-green-400">FAQs</a></li>
        </ul>
      </div>
    </div>

    <hr className="my-8 border-green-700" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-green-300">
      <div>© 2026 ICITET. All rights reserved.</div>
      <div>Organized by KJ College of Engineering &amp; Management Research, Pune</div>
    </div>
  </footer>
);

export default Footer;
