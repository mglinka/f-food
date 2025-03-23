import React from "react";

interface ProductScoreIndicatorProps {
  highlightedIndex: number;
}

const ENScoreIndicator: React.FC<ProductScoreIndicatorProps> = ({ highlightedIndex }) => {
  const colors = [
    "bg-blue-500",
    "bg-sky-400",
    "bg-green-500",
    "bg-yellow-400",
    "bg-orange-500",
    "bg-red-500",
  ];

  const labels = ["A", "B", "C", "D", "E", "F"];

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

export default ENScoreIndicator;