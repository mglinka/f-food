import React from "react";
import Tile from "@/components/Tile";

const levels = [
  { label: "Niebezpieczny", color: "bg-red-600", icon: "⚠" },
  { label: "Bardzo ostrożnie", color: "bg-orange-500", icon: "⚠" },
  { label: "Ostrożnie", color: "bg-yellow-500", icon: "⚠" },
  { label: "Korzystne", color: "bg-lime-500", icon: "✔" },
  { label: "Superfood", color: "bg-green-600", icon: "✔" },
  { label: "Hiperfood", color: "bg-blue-400", icon: "🌟" },
  { label: "Zalecany", color: "bg-blue-600", icon: "👍" },
];

const Message = ({ level }: any) => {
  return (
      <Tile title="">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {levels.map((lvl, index) => {
            const isActive = index + 1 === level;
            return (
                <div key={index} className="flex flex-col items-center">
                  <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white text-lg sm:text-lg md:text-2xl transition-all ${lvl.color} ${
                          isActive ? "scale-150 sm:scale-165 md:scale-150 shadow-xl" : "opacity-30"
                      }`}
                  >
                    {lvl.icon}
                  </div>
                  <span
                      className={`mt-6 sm:mt-6 md:mt-5 transition-all ${
                          isActive ? "text-base sm:text-2xl md:text-2xl font-light text-gray-800" : "text-xs sm:text-sm md:text-base text-gray-400"
                      }`}
                  >
                {lvl.label}
              </span>
                </div>
            );
          })}
        </div>
      </Tile>
  );
};

export default Message;