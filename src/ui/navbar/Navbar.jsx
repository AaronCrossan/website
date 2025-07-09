import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link to="/">Aaron Crossan</Link>
      </h1>
    </nav>
  );
}

export default Navbar;
