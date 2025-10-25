import React from 'react';
import Hero from './components/Hero.jsx';
import CodeSnippets from './components/CodeSnippets.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-white antialiased">
      <Hero />
      <CodeSnippets />
      <TrustSection />
      <Footer />
    </div>
  );
}
