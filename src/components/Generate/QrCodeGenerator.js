import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./qrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

export default QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]"); //ПУСТИЙ МАСИВ ЗА ЗАМОВЧУВАННЯМ
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  return (
    <div className={s.container}>
      <input
        onChange={onChangeHandler}
        placeholder="Type the text"
        value={value}
        type="text"
        className={s.result}
      />
      <button className={s.button} onClick={onClickHandler}>
        Generate
      </button>
      {result !== "" && (
        <QRCodeSVG size={200} className={s.qrWrapper} value={result} />
      )}
    </div>
  );
};
