import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-100px,rgba(59,130,246,0.25),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Shield className="h-4 w-4 text-cyan-400" />
              Biometric, passwordless, dev-friendly
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Auth that disappears.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Drop-in biometric login for web and mobile with a single line of code. Secure by default. Frictionless by design.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#code" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium transition hover:bg-white/90">
                Get the 1‑line snippet
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#trust" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
                See how it’s secured
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-sm text-white/60">FIDO2 • Passkeys • Device-bound keys</div>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
