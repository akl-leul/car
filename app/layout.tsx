import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';

export const metadata = {
  title: 'Luxcars',
  description: 'Find Your Dream Car',
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data or waiting for assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for demonstration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Loader is visible while loading is true
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#fff'
      }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
