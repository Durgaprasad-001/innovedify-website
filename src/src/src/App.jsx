import React from "react";
import { motion } from "framer-motion";

const projects = [
  "IoT-based Smart Bicycle",
  "Power Grid Control through PC",
  "Wireless Healthcare Monitoring System",
  "Energy Meter Reading with Load Control",
  "Fault Detection in Induction Motor (DQ & Fuzzy)",
  "ATM Security System (IR based)"
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <nav className="w-full bg-gradient-to-b from-[#041220]/60 via-transparent sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/innovedify_logo.png" alt="InnovEdify" className="h-10 w-auto object-contain" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/160x40?text=InnovEdify'}} />
            <div>
              <div className="text-white font-bold text-lg">InnovEdify</div>
              <div className="text-xs text-[#8fb7d0]">Innovating Education through Smart Electronics</div>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-[#bcdcec]">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.h1 initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold leading-tight">
              InnovEdify
            </motion.h1>
            <p className="mt-4 text-[#bcdcec] max-w-2xl">
              Innovating Education through Smart Electronics — product development, IoT solutions, PCB design and practical student projects.
            </p>

            <div className="mt-8 flex gap-3">
              <a href="#projects" className="btn bg-[#00aaff] text-[#02121a]">Explore Projects</a>
              <a href="#contact" className="btn border border-[#234b61] text-[#cfeeff]">Contact Us</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#0f1a2a]/60">
                <div className="text-sm font-semibold">Product Development</div>
                <div className="text-xs text-[#9fb3c9] mt-1">Prototype to manufacture</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0f1a2a]/60">
                <div className="text-sm font-semibold">IoT & Automation</div>
                <div className="text-xs text-[#9fb3c9] mt-1">Secure connected systems</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0f1a2a]/60">
                <div className="text-sm font-semibold">Workshops & Projects</div>
                <div className="text-xs text-[#9fb3c9] mt-1">Training & student mentoring</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#071523] to-[#051028] p-6 shadow-2xl">
              <div className="h-64 md:h-80 w-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder')] bg-cover bg-center rounded-lg" />
              <div className="mt-4 text-sm text-[#9fb3c9]">Founder & CEO — <span className="text-white font-medium">Mulugu Durgaprasad</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">About InnovEdify</h2>
        <p className="mt-3 text-[#bcdcec] max-w-3xl">
          InnovEdify blends hands-on electronics product development with education: guided student projects, IoT prototypes, PCB & firmware design, and practical training that prepares students and creators for industry-ready work.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#061427] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold">100+ Innovative Electronic Projects</h3>
              <p className="text-[#bcdcec] mt-2">A curated collection of real projects — from IoT to power systems and healthcare devices.</p>
            </div>
            <div>
              <a href="#" className="btn border border-[#234b61] text-[#cfeeff]">See All Projects</a>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article key={i} whileHover={{ scale: 1.02 }} className="p-5 bg-[#0b2232] rounded-2xl shadow-md">
                <div className="h-36 w-full bg-[url('https://via.placeholder.com/800x450?text=Project')] bg-cover bg-center rounded-lg" />
                <h4 className="mt-4 font-semibold text-white">{p}</h4>
                <p className="text-sm text-[#9fb3c9] mt-2">Demo, docs and parts list available on request.</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-[#00aaff] text-sm">Read Details</a>
                  <span className="text-xs text-[#7ea7bf]">Demo & Docs</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-sm text-[#9fb3c9]">Includes 100+ educational & industry projects (prototype kits, IoT systems, automation builds).</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Services</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {t:"Product Prototyping", d:"Electronics design, enclosure, test & iterate."},
            {t:"Embedded Systems", d:"Microcontrollers, firmware, RTOS."},
            {t:"IoT Solutions", d:"GSM, MQTT, Cloud integration & security."},
            {t:"Workshops & Training", d:"Hands-on student projects & mentorship."}
          ].map((s,idx)=>(
            <div key={idx} className="p-5 rounded-xl bg-[#071a29]">
              <div className="font-medium text-white">{s.t}</div>
              <div className="text-sm text-[#9fb3c9] mt-2">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="bg-[#061427] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">Founder & CEO</h3>
          <p className="mt-3 text-[#bcdcec] text-lg font-medium">Mulugu Durgaprasad</p>
          <p className="text-sm text-[#9fb3c9] mt-2 max-w-2xl mx-auto">Founder & leader focused on bridging education and product development in electronics & IoT.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Get in Touch</h3>
        <div className="mt-4 text-[#bcdcec]">
          <p>📞 9390910649</p>
          <p>✉️ <a className="text-[#00aaff]" href="mailto:innovedify.worldofelectronics@gmail.com">innovedify.worldofelectronics@gmail.com</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#041220] py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#8fb7d0]">
          <div className="flex items-center gap-3">
            <img src="/innovedify_logo.png" alt="logo" className="h-8" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/120x30?text=IE'}} />
            <div>© {new Date().getFullYear()} InnovEdify</div>
          </div>
          <div className="mt-3 md:mt-0">Founded by Mulugu Durgaprasad — Innovating Education through Smart Electronics</div>
        </div>
      </footer>
    </div>
  );
}
