
import React from "react";

interface ScannedProductProps {
  scanned: string;
}

const ScannedProduct: React.FC<ScannedProductProps> = ({ scanned }) => {
  return (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg font-medium">Zeskanowany kod:</p>
        <p className="text-xl font-bold text-blue-600">{scanned}</p>
        {/* Możesz dodać tutaj inne informacje, np. szczegóły produktu */}
      </div>
  );
};

export default ScannedProduct;