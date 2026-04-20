import { Star, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const infoCards = [
  {
    icon: Trophy,
    title: "Compete",
    body: "Represent Stony Point at district, state, and ICDC competitions",
  },
  {
    icon: Users,
    title: "Connect",
    body: "Join Medals Gold to network with other ambitious high schoolers",
  },
  {
    icon: Star,
    title: "Grow",
    body: "Develop real-world skills in marketing, finance, and leadership",
  },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f1e] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/landing-backdrop.png')" }}
      />
      <div className="absolute inset-0 bg-[#0a0f1e]/80" />
      <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0a0f1e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="inline-flex items-center gap-2 text-lg font-extrabold tracking-wide">
            <img src="/assets/deca-icon.png" alt="STP DECA icon" className="h-7 w-7 rounded-md object-cover" />
            STP DECA
          </span>
          <Link
            to="/login"
            className="rounded-lg border border-white px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#0a0f1e]"
          >
            Member Login →
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-24">
        <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center text-center">
          <img
            src="/assets/deca-icon.png"
            alt="STP DECA logo"
            className="mb-6 h-20 w-20 rounded-xl border border-white/20 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">Stony Point DECA</h1>
          <p className="mt-4 text-lg text-[#FAA41B] md:text-2xl">
            Preparing Tomorrow&apos;s Business Leaders
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-[#3b82f6] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Join DECA
            </a>
            <Link
              to="/login"
              className="rounded-lg border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0a0f1e]"
            >
              Member Login
            </Link>
            <a
              href="mailto:anthony_ripley@roundrockisd.org"
              className="rounded-lg bg-[#2563eb] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Mailing List Request
            </a>
          </div>
          <p className="mt-2 text-xs text-[#FAA41B]">Redirects to: Email Mr. Ripley</p>
          <p className="mt-5 text-sm text-slate-300">Scan QR code or visit stpdeca.netlify.app</p>
        </section>

        <section className="grid gap-4 pb-10 md:grid-cols-3">
          {infoCards.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-xl bg-[#111827]/95 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-[#3b82f6]" />
              <h2 className="mt-3 text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm text-slate-200">{body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-6 text-center text-xs text-slate-300">
        © 2025 Stony Point DECA · Round Rock ISD · stp_deca@roundrockisd.org
      </footer>
    </div>
  );
}
