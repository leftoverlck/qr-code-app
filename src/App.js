// import "./qrCodeGenerator.css";
import QrCodeScanner from "./qrCodeScanner";
import QrCodeGenerator from "./QrCodeGenerator";

export default function App() {
  return (
    <>
      <QrCodeGenerator />
      <QrCodeScanner />
    </>
  );
}
