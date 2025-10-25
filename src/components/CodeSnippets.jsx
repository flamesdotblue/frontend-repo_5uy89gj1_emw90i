import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';

const snippets = {
  JavaScript: `// 1-line passwordless login\nimport { login } from '@blue/flames-auth';\nawait login({ method: 'biometric' });`,
  Python: `# 1-line passwordless login\nfrom flames_auth import login\nlogin(method='biometric')`,
  cURL: `# 1-line passwordless login\ncurl -X POST https://api.flames.blue/auth/login \\\n  -H 'Content-Type: application/json' \\\n  -d '{"method":"biometric"}'`,
};

export default function CodeSnippets() {
  const [active, setActive] = useState('JavaScript');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(snippets[active]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="code" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Code className="h-4 w-4 text-cyan-400" />
              Integrate in minutes
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Add biometrics with a single line</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Works with passkeys, Face ID, and Touch ID. Standards-based, device-bound, and zero secrets in your codebase.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0E0E14] overflow-hidden">
          <div className="flex flex-wrap gap-2 border-b border-white/10 bg-white/[0.03] p-3">
            {Object.keys(snippets).map((name) => (
              <button
                key={name}
                onClick={() => setActive(name)}
                className={`px-3 py-1.5 text-sm rounded-md transition ${
                  active === name
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {name}
              </button>
            ))}
            <div className="ml-auto" />
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10">
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="p-5 md:p-6 text-sm leading-relaxed overflow-auto">
            <code className="block whitespace-pre text-white/90 font-mono">{snippets[active]}</code>
          </pre>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Stat label="Avg. implementation time" value="< 10 min" />
          <Stat label="API availability" value="99.99%" />
          <Stat label="Lines of code" value="1" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-white/60 text-sm">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}
