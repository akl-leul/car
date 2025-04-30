import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

export const metadata = {
  title: 'My Next App',
  description: 'Next.js with Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
      </body>
      <Footer />
    </html>
  );
}
