import { Navigation } from "./components/Navigation/Navigation";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScannner from "./components/Scan/QrCodeScannner";
import { ScanHistory } from "./components/ScanHistory";
import { GenerateHistory } from "./components/GenerateHistory";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/scan" element={<QrCodeScannner />} />
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};
