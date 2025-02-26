"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AlphabetSearch = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleLetterClick = (letter: string) => {
    router.push(`/diseases/${letter}`);
  };

  return (
    <div className="flex w-full p-6 gap-4">
      {/* Left Side - Alphabet Buttons */}
      <div className="w-1/2 flex flex-wrap gap-3">
        <h2 className="font-semibold w-full mb-3 text-md">
          Find diseases & conditions by first letter
        </h2>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="w-14 h-14 text-lg border rounded-full flex items-center justify-center text-black transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-110"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Right Side - Search Bar */}
      <div className="w-1/2">
        <h2 className="font-semibold mb-3 text-md">
          Search diseases & conditions
        </h2>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-12 w-full h-10 text-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AlphabetSearch;
