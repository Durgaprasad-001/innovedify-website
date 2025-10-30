import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <img
              src="/innovedify_logo.png"
              alt="InnovEdify Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-blue-600">InnovEdify</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#founder" className="hover:text-blue-600">Founder</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">InnovEdify</h2>
        <p className="text-lg md:text-xl font-light">
          Innovating Electronics. Empowering the Future.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-8 text-blue-600">About Us</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          InnovEdify is a growing tech venture driven by the vision of building
          smart, affordable, and educational electronics projects. We aim to
          bridge innovation and learning — empowering students, creators, and
          industries to explore the world of embedded systems and IoT with real,
          working prototypes.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8 text-blue-600">Our Projects</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Bicycle using IoT",
              desc: "A GPS and GSM-enabled bicycle for safety and real-time monitoring.",
            },
            {
              title: "Energy Meter with GSM Load Control",
              desc: "Automated load management and SMS-based energy updates.",
            },
            {
              title: "Wireless Healthcare System",
              desc: "IoT-based health tracking with patient monitoring via ZigBee.",
            },
          ].map((p, i) => (
            <div key={i} className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-700">{p.title}</h4>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Founder & CEO</h3>
        <p className="text-xl font-medium">Mulugu Durgaprasad</p>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          A passionate innovator and visionary in the field of Electronics and IoT,
          dedicated to empowering students through hands-on learning and
          real-world applications.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Get in Touch</h3>
        <p className="text-lg">📞 9390910649</p>
        <p className="text-lg">✉️ innovedify.worldofelectronics@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>© {new Date().getFullYear()} InnovEdify | All Rights Reserved</p>
      </footer>
    </div>
  );
}
