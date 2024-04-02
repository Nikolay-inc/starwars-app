import styles from "./styles.module.css";

// basic layout header
const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      StarWars Heroes
    </header>
  );
}

export default Header;