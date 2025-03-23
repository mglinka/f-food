"use client";
import BarcodeScanner from "react-qr-barcode-scanner";
import { useState } from "react";
import ScannedProduct from "@/app/ScannedProduct";
import Link from "next/link";

const ScannerComponent = () => {
  const [scannedCode, setScannedCode] = useState<string>("");
  const [scannerVisible, setScannerVisible] = useState<boolean>(true);
  const [showGreeting, setShowGreeting] = useState<boolean>(true);

  const handleScan = (_err: any, result: any) => {
    if (result) {
      const scannedData = result.getText();
      if (scannedData) {
        setScannedCode(scannedData);
        console.log("Scanned data:", scannedData);
        setScannerVisible(false);
        setShowGreeting(false);
      }
    }
  };
  const handleReset = () => {
    window.location.reload();
  };

  return (
      <>
        <div className="flex flex-col items-center md:items-start w-full ">
          {scannerVisible && (
              <BarcodeScanner width={300} height={600} onUpdate={handleScan} />
          )}

          {showGreeting && (
              <div className="w-full md:w-2/3">
                <h1 className="text-2xl font-semibold">Witaj w aplikacji!</h1>
                <p className="text-lg text-gray-700 mt-4">
                  Zeskanuj kod EAN, aby zobaczyć szczegóły produktu.
                </p>
              </div>
          )}

          {scannedCode && <ScannedProduct scanned={scannedCode} />}


          <button
              onClick={handleReset}
              className="fixed bottom-4 right-4 z-10 flex items-center justify-center rounded-full aspect-square bg-white/80 shadow-2xl p-6 hover:-translate-y-2 ease-out cursor-pointer transition-transform"
          >
            <img
                src={"/assets/barcode-scan.png"}
                alt="Barcode Scan"
                className="w-14 object-contain"
            />
          </button>
        </div>
      </>
  );
};

export default ScannerComponent;