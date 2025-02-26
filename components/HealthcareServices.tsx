"use client";

import { motion } from "framer-motion";

export default function HealthcareServices() {
  const services = [
    {
      title: "Laboratory Test",
      description:
        "Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.",
      icon: "🧪",
    },
    {
      title: "Health Check",
      description:
        "Our thorough assessments and expert evaluations help you stay proactive about your health.",
      icon: "🩺",
    },
    {
      title: "General Dentistry",
      description:
        "Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.",
      icon: "🦷",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Our Special Services</h2>
      <p className="mt-2 text-gray-600">
        Beyond simply providing medical care, our commitment lies in delivering
        unparalleled service tailored to your unique needs.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* Emoji Circle */}
            <div className="relative w-16 h-16 mx-auto">
              {/* Static Circle */}
              <div className="absolute inset-0 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Water Fill Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-full bg-blue-400"
                  initial={{ height: "0%" }}
                  whileHover={{ height: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
                {/* Emoji Stays on Top */}
                <div className="relative z-10 text-3xl text-white">{service.icon}</div>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-500 font-medium hover:underline"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
