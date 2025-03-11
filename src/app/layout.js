import './globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
