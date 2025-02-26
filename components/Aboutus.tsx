"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mt-11 mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text */}
      <div className="font-semibold">
        <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-xl text-gray-500">
          Welcome to our healthcare website, your one-stop destination <br /> for
          reliable and comprehensive health care information. We are <br /> committed
          to promoting wellness and providing valuable resources to empower you
          on your health journey.
        </p>
        <p className="mt-4 text-xl text-gray-500">
          Explore our extensive collection of expertly written articles and
          guides covering a wide range of health topics. From understanding
          common medical conditions to tips for maintaining a healthy lifestyle,
          our content is designed to educate, inspire, and support you in making
          informed choices for your health.
        </p>
        <p className="mt-4 text-xl text-gray-500">
          Discover practical health tips and lifestyle advice to optimize your
          physical and mental well-being. We believe that small changes can
          lead to significant improvements in your quality of life, and we&apos;re
          here to guide you on your path to a healthier and happier you.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center">
        <Image
          src="/about.png" // Change to your actual .png file
          alt="Healthcare Professionals"
          width={500}
          height={400}
          className="rounded-lg shadow-lg "
        />
      </div>
    </section>
  );
}
