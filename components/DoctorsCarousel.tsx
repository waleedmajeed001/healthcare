import { FaInstagram, FaFacebookF, FaHeart, FaTwitter } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Emily Smith",
    specialty: "Cardiologist",
    image: "/doctor-1.jpg",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Neurosurgeon",
    image: "/doctor-2.jpg",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    image: "/doctor-3.jpg",
  },
];

const SpecialDoctors = () => {
  return (
    <section className="py-12 px-6 text-center">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Our Special Doctors</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We take pride in our exceptional team of doctors, each a specialist in their respective fields.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="flex justify-center flex-wrap gap-10">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden w-[320px] h-[500px] transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[75%] object-cover"
            />

            {/* Doctor Info */}
            <div className="text-center py-4">
              <h3 className="font-semibold text-lg">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialty}</p>
            </div>

            {/* Social Icons - Positioned Below the Text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-4 bg-white rounded-xl p-3 shadow-md">
                <FaInstagram className="text-gray-700 hover:text-pink-500 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" />
                <FaFacebookF className="text-gray-700 hover:text-blue-500 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" />
                <FaHeart className="text-gray-700 hover:text-red-500 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" />
                <FaTwitter className="text-gray-700 hover:text-blue-400 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDoctors;
