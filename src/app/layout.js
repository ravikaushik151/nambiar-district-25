'use client';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/normalize.css';
import '../public/css/components.css';
import '../public/css/style.css';
import '../app/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';



import ContactFormPopup from './components/ContactFormPopup';
import PriceBreakupModal from './components/PriceBreakupModal';

export default function RootLayout({ children }) {

  useEffect(() => {
    // Check if window is defined (i.e., running on the client)
    if (typeof window === 'undefined') return;

    // Import Lenis dynamically
    import('lenis').then((mod) => {
      const Lenis = mod.default;

      // Function to get current URL path
      function getCurrentPath() {
        return window.location.pathname;
      }

      // Create a new Lenis instance
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: undefined, // Initialize lerp to undefined
      });

      // Function to set lerp after a short delay
      function setLerp() {
        lenis.options.lerp = getCurrentPath() === '/being-here-at-studio' ? 0.1 : undefined;
        console.log('lerp applied:', lenis.options.lerp);
        // Log the current path
        console.log('Current Path:', getCurrentPath());
      }

      // Set lerp after a short delay
      setTimeout(setLerp, 100);

      // RAF loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Optional cleanup on unmount
      return () => {
        // You can destroy Lenis here if needed
        // lenis.destroy();
      };
    });
  }, []);

  return (
    <html data-wf-page="123456" lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.svg" />
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16909428071"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16909428071');
          `}
        </Script>


        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      </head>
      <body>
        <div id="layout-wrapper">
          <Header />
          {children}
          <Footer />
          <PriceBreakupModal />
        </div>
        <Script
          src="/js/main.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('Custom interactions loaded');
          }}
          onError={(e) => {
            console.error('Failed to load interactions', e);
          }}
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
