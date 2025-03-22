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

  return (
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        {scannerVisible && (
            <BarcodeScanner
                width={300}
                height={600}
                onUpdate={handleScan}
            />
        )}


        {scannedCode && <ScannedProduct scanned={scannedCode} />}
      </div>
  );
};

export default ScannerComponent;