"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WhyChooseUs() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <section className="max-w-7xl mt-11 mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Doctor Image */}
      <div className="flex justify-center">
        <Image
          src="/doctor1.png"
          alt="Doctor"
          width={450}
          height={500}
          className="block rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text + Services */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="mt-4 text-gray-600">
          With a steadfast commitment to your well-being, our team of highly
          trained healthcare professionals ensures that you receive nothing
          short of exceptional patient experiences.
        </p>

        {/* Services List */}
        <div className="mt-6 space-y-4">
          {/* Intensive Care */}
          <button
            onClick={() => handleClick("/intensive-care")}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full text-left"
          >
            <div className="p-3 text-xl">🏥</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Intensive Care</h3>
              <p className="text-gray-600">
                Our Intensive Care Unit is equipped with advanced technology and
                staffed by a team of professionals.
              </p>
            </div>
          </button>

          {/* Free Ambulance Car */}
          <button
            onClick={() => handleClick("/free-ambulance")}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full text-left"
          >
            <div className="p-3 text-xl">🚑</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Free Ambulance Car</h3>
              <p className="text-gray-600">
                A compassionate initiative to prioritize your health and
                well-being without any financial burden.
              </p>
            </div>
          </button>

          {/* Medical and Surgical */}
          <button
            onClick={() => handleClick("/medical-surgical")}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full text-left"
          >
            <div className="p-3 text-xl">🏨</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Medical and Surgical</h3>
              <p className="text-gray-600">
                Our Medical and Surgical services offer advanced healthcare
                solutions to address medical needs.
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
