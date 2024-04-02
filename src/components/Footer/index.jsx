import styles from "./styles.module.css";

// basic layout footer
const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <span>StarWars</span>
    </footer>
  );
}

export default Footer;