import { Inter } from "next/font/google";
import "./globals.css";
import styles from '../styles/index.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// add fonts and metadata
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StarWars Heroes",
  description: "StarWars Heroes App",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header />
            <div className={styles.layout}>
              {children}
            </div>
          <Footer />
        </body>
    </html>
  );
}

export default RootLayout;
