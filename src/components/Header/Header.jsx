// import './Header.css'
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <header className={`${styles["header-app"]} ${styles.container}`}>
      <h1>Empadas do LAB 365</h1>
      <p>O sabor que compila com seu paladar!</p>

      <nav>
        <div className={`${styles["menu-items"]}`}>
          <Link to="/#cardapio">Cardápio</Link>
          <Link to="/#contato">Contato</Link>
        </div>
        <Link to='/carrinho'>
          <ShoppingCart className={`${styles["shopping-cart"]}`} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
