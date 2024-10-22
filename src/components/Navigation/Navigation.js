import { Link } from "react-router-dom";
import s from "./navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/generate">Generate QR</Link>
      <Link to="/scan">Scan QR</Link>
      <Link to="/scanHistory">History of scanning</Link>
      <Link to="/generateHistory">History of generating</Link>
    </nav>
  );
};
