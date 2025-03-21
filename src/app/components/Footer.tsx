import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> © {new Date().getFullYear()} Jennyfer Tamara Dávila Barrancos</p>
    </footer>
  );
};

export default Footer;