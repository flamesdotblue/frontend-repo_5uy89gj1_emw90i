import React from 'react';
import { ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">Built for security, designed for trust</h3>
          <p className="mt-2 text-white/70">We combine strong cryptography, open standards, and clear transparency so you don’t have to choose between security and conversion.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Card
            icon={<Fingerprint className="h-5 w-5 text-cyan-400" />}
            title="Passkeys + WebAuthn"
            text="Native biometrics with device-bound keys and phishing resistance."
          />
          <Card
            icon={<Lock className="h-5 w-5 text-emerald-400" />}
            title="Zero passwords, fewer breaches"
            text="Eliminate password databases and credential stuffing risks."
          />
          <Card
            icon={<ShieldCheck className="h-5 w-5 text-indigo-400" />}
            title="Compliance ready"
            text="SOC2-in-progress posture and encryption-in-transit and at-rest."
          />
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-white/70 text-sm">Backed by modern standards and best practices</div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
              <Badge>FIDO2</Badge>
              <Badge>WebAuthn</Badge>
              <Badge>Passkeys</Badge>
              <Badge>OAuth2</Badge>
              <Badge>OpenID</Badge>
              <Badge>PKCE</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-white/5 p-2">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <p className="text-white/70 text-sm mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1">{children}</span>
  );
}
