"use client";
import BarcodeScanner from "react-qr-barcode-scanner";
import { useState } from "react";
import ScannedProduct from "@/app/ScannedProduct";

const ScannerComponent = () => {
  const [scannedCode, setScannedCode] = useState<string>("");
  const [scannerVisible, setScannerVisible] = useState<boolean>(true);

  const handleScan = (_err: any, result: any) => {
    if (result) {
      const scannedData = result.getText();
      if (scannedData) {
        setScannedCode(scannedData);
        console.log("Scanned data:", scannedData);
        setScannerVisible(false);
      }
    }
  };
  const handleReset = () => {
    window.location.reload();
  };

  return (
      <>
        <div className="flex flex-col items-center md:items-start w-full">
          {scannerVisible && (
              <BarcodeScanner onUpdate={handleScan} />
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