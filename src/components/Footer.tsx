import React from "react";
import {
  Music2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* About */}
          <div>
            <h2 className="text-white text-xl font-bold mb-5">
              Music School
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              Music School is a premier institution dedicated to teaching
              the art and science of music. We nurture talent from the
              ground up and foster a vibrant community of musicians.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Learn. Practice. Perform. 🎵
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1
                  inline-block transition-all duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1
                  inline-block transition-all duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1
                  inline-block transition-all duration-300"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1
                  inline-block transition-all duration-300"
                >
                  Instructors
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1
                  inline-block transition-all duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* Follow Us */}
          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Follow Us
            </h2>

            <p className="text-sm leading-6 mb-5">
              Stay connected with us and keep up with our latest
              courses, events and musical updates.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="px-4 py-2 rounded-lg border border-white/10
                text-sm hover:text-white hover:border-white/30
                hover:bg-white/5 transition-all duration-300"
              >
                Facebook
              </a>

              <a
                href="#"
                className="px-4 py-2 rounded-lg border border-white/10
                text-sm hover:text-white hover:border-white/30
                hover:bg-white/5 transition-all duration-300"
              >
                Twitter
              </a>

              <a
                href="#"
                className="px-4 py-2 rounded-lg border border-white/10
                text-sm hover:text-white hover:border-white/30
                hover:bg-white/5 transition-all duration-300"
              >
                Instagram
              </a>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Contact Us
            </h2>

            <div className="space-y-3 text-sm">

              <p className="leading-6">
                📍 New Delhi, India
              </p>

              <p className="leading-6">
                📧{" "}
                <a
                  href="mailto:info@musicschool.com"
                  className="hover:text-white transition-colors"
                >
                  info@musicschool.com
                </a>
              </p>

              <p className="leading-6">
                📞{" "}
                <a
                  href="tel:+911234567890"
                  className="hover:text-white transition-colors"
                >
                  +91 12345 67890
                </a>
              </p>

            </div>

            {/* Small CTA */}
            <a
              href="#"
              className="inline-block mt-6 px-5 py-2.5 rounded-lg
              bg-white text-black text-sm font-semibold
              hover:bg-gray-200 transition-colors duration-300"
            >
              Start Learning →
            </a>
          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">

          <div className="flex flex-col sm:flex-row
          items-center justify-between gap-4">

            <p className="text-xs text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Music School. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs">

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

    