import React from "react";
import { motion } from "framer-motion";

// Updated version: Floral white & gold wedding invitation website for Aasif & Zeenat
// - Elegant floral accents with golden tones
// - Events remain blank for you to fill

export default function WeddingInvite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 text-gray-900 font-sans relative overflow-hidden">
      {/* Floral background decorations */}
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/12/45/floral-2698915_1280.png"
        alt="floral header"
        className="absolute top-0 left-0 w-full opacity-20 select-none pointer-events-none"
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/12/45/floral-2698915_1280.png"
        alt="floral footer"
        className="absolute bottom-0 right-0 w-full rotate-180 opacity-20 select-none pointer-events-none"
      />

      {/* Page container */}
      <header className="max-w-3xl mx-auto px-6 py-10 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-sm tracking-widest uppercase text-yellow-600">Wedding Invitation</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-yellow-800 mt-2 border-y-2 border-yellow-200 inline-block py-2 px-4 rounded-full bg-white/50 backdrop-blur-sm">
            Aasif &amp; Zeenat
          </h1>
          <p className="mt-3 text-gray-600 italic">We joyfully invite you to celebrate our wedding</p>
        </motion.div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20 relative z-10">
        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-yellow-100"
        >
          <p className="text-center text-gray-600 leading-relaxed">
            With the blessings of the Almighty and our beloved families, we request your gracious presence at the wedding celebrations of
          </p>
          <h2 className="text-center mt-4 text-2xl md:text-3xl font-serif text-yellow-800">Aasif &amp; Zeenat</h2>
          <p className="text-center mt-2 text-gray-600">to join us in celebrating love, joy, and togetherness.</p>
        </motion.section>

        {/* Events Section */}
        <section className="mt-10 grid gap-8">
          {/* Haldi & Mehendi */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50/60 border border-yellow-100 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-serif text-yellow-800">Haldi &amp; Mehendi</h3>
            <p className="text-sm text-gray-600">(Same day)</p>
            <div className="mt-4 space-y-1 text-gray-600 text-sm">
              <p>Date: —</p>
              <p>Time: —</p>
              <p>Venue: —</p>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-4 py-1.5 rounded-lg border border-yellow-200 text-yellow-700 bg-white/70">View Map</a>
              <a href="#" className="px-4 py-1.5 rounded-lg bg-yellow-700 text-white">Add to Calendar</a>
            </div>
          </motion.article>

          {/* Nikah */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50/60 border border-yellow-100 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-serif text-yellow-800">Nikah</h3>
            <div className="mt-4 space-y-1 text-gray-600 text-sm">
              <p>Date: —</p>
              <p>Time: —</p>
              <p>Venue: —</p>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-4 py-1.5 rounded-lg border border-yellow-200 text-yellow-700 bg-white/70">View Map</a>
              <a href="#" className="px-4 py-1.5 rounded-lg bg-yellow-700 text-white">Add to Calendar</a>
            </div>
          </motion.article>

          {/* Dawat-e-Walima */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50/60 border border-yellow-100 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-serif text-yellow-800">Dawat-e-Walima</h3>
            <div className="mt-4 space-y-1 text-gray-600 text-sm">
              <p>Date: —</p>
              <p>Time: —</p>
              <p>Venue: —</p>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-4 py-1.5 rounded-lg border border-yellow-200 text-yellow-700 bg-white/70">View Map</a>
              <a href="#" className="px-4 py-1.5 rounded-lg bg-yellow-700 text-white">Add to Calendar</a>
            </div>
          </motion.article>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Family Contact: —</p>
          <p className="mt-2">Designed with love by <span className="font-medium text-yellow-700">Crimson Creation</span></p>
        </footer>
      </main>
    </div>
  );
}
