import React from "react";

interface CLScoreIndicatorProps {
  highlightedIndex: number;
}

const ScoreIndicator: React.FC<CLScoreIndicatorProps> = ({ highlightedIndex }) => {
  const colors = [
    "bg-white",
    "bg-lime-200",
    "bg-lime-500",
    "bg-green-600",
    "bg-teal-400",
    "bg-blue-500",
  ];

  const labels = ["0", "2", "4", "6", "8", "10"];


  return (
      <div className="flex items-center gap-1 p-1">
        {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                  className={`h-6 transition-all duration-300 rounded-md shadow-md ${
                      index === highlightedIndex ? "w-8 h-10 scale-110 shadow-lg" : "w-6"
                  } ${color}`}
              ></div>
              <span
                  className={`text-xl font-semibold mt-1 transition-all ${
                      index === highlightedIndex ? "text-black" : "text-gray-400"
                  }`}
              >

                {labels[index]}
          </span>
            </div>
        ))}
      </div>
  );
};

export default ScoreIndicator;