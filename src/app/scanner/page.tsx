import ScannerComponent from "@/app/ScannerComponent";

export default function Home() {
  return (
      <div className="flex flex-col md:flex-row items-center md:items-start  md:justify-start min-h-screen p-8">
        <ScannerComponent />
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-semibold">Witaj w aplikacji!</h1>
          <p className="text-lg text-gray-700 mt-4">
            Zeskanuj kod EAN, aby zobaczyć szczegóły produktu.
          </p>

        </div>
      </div>
  );
}