'use client';

const AppointmentForm = () => {
  return (
    <div className="max-w-sm  mt-11 mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-black mb-4">Book Now</h2>
      <form>
        <input 
          type="text" 
          placeholder="First Name" 
          className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
        <input 
          type="text" 
          placeholder="Address" 
          className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
        <input 
          type="text" 
          placeholder="Phone No." 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
        <button 
          type="submit" 
          className="w-full p-3 bg-black text-white rounded-md transform transition duration-300 hover:scale-110 hover:bg-red-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
