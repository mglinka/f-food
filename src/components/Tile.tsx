import React from "react";

interface TileProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Tile: React.FC<TileProps> = ({ title, children, className = "" }) => {
  return (
      <div className={`p-4 border-2 border-gray-100 rounded-lg shadow-md ${className}`}>
        <h1 className="text-2xl font-medium text-black mb-2">{title}</h1>
        {children}
      </div>
  );
};

export default Tile;