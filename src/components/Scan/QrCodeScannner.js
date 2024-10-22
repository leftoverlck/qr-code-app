import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./qrCodeScanner.module.css";
import { SCAN_DATA } from "../../constants";
export default QrCodeScannner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"); //ПУСТИЙ МАСИВ ЗА ЗАМОВЧУВАННЯМ
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
    //покласти в локальне сховище дані відскановані
    //localStorage.setItem(SCAN_DATA, result[0].rawValue);
  }; //з локал сторадж працювати через JSON

  const settings = {
    audio: false,
    finder: false,
  };
  console.log(SCAN_DATA);
  return (
    <div className={s.container}>
      <Scanner
        styles={{
          container: {
            width: 200,
          },
        }}
        components={settings}
        onScan={scanHandler}
      />
      <p className={s.result}>{scanned ? "true" : "false"}</p>
    </div>
  );
};
