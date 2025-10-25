import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
          <span>Flames Blue • Passwordless Auth</span>
        </div>
        <nav className="flex items-center gap-6">
          <a className="hover:text-white/90" href="#code">Docs</a>
          <a className="hover:text-white/90" href="#trust">Security</a>
          <a className="hover:text-white/90" href="#">Status</a>
          <a className="hover:text-white/90" href="#">Contact</a>
        </nav>
        <div>© {new Date().getFullYear()} Flames Blue. All rights reserved.</div>
      </div>
    </footer>
  );
}
