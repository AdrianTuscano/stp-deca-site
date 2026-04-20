import { ExternalLink, Mail, MapPin, Phone, Star, Trophy, UserRound, Users } from "lucide-react";
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

const quickLinks = [
  {
    title: "Official DECA Website",
    subtitle: "National DECA organization resources",
    href: "https://www.deca.org/",
  },
  {
    title: "Texas DECA",
    subtitle: "State-level information and competitions",
    href: "https://www.texasdeca.org/",
  },
  {
    title: "List of Competitions",
    subtitle: "Browse all DECA competitive events and categories",
    href: "https://www.deca.org/compete#competitive-events",
  },
  {
    title: "Corporate Challenges",
    subtitle: "Real-world business challenges from industry partners",
    href: "https://www.deca.org/challenges",
  },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f1e] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-110"
        style={{ backgroundImage: "url('/assets/landing-backdrop.png')" }}
      />
      <div className="absolute inset-0 bg-[#0a0f1e]/55" />
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
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-[#3b82f6] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Join DECA
            </a>
            <a
              href="mailto:anthony_ripley@roundrockisd.org"
              className="rounded-lg bg-[#2563eb] px-6 py-3 text-left text-sm font-bold text-white transition hover:brightness-110"
            >
              <p>Mailing List Request</p>
              <p className="text-xs font-medium text-white/85">Email Mr. Ripley</p>
            </a>
            <Link
              to="/login"
              className="rounded-lg border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0a0f1e]"
            >
              Member Login
            </Link>
          </div>
        </section>

        <section className="grid gap-4 pb-10 md:grid-cols-3">
          {infoCards.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-xl bg-[#111827]/95 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-[#3b82f6]" />
              <h2 className="mt-3 text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm text-[#FAA41B]">{body}</p>
            </article>
          ))}
        </section>

        <section className="pb-10">
          <h2 className="text-xs font-extrabold tracking-[0.2em] text-[#FAA41B]">QUICK LINKS</h2>
          <div className="mt-3 rounded-2xl border border-white/20 bg-white p-5 text-slate-900 shadow-lg">
            <h3 className="text-center text-3xl font-extrabold">Quick Links</h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {quickLinks.map((linkCard) => (
                <a
                  key={linkCard.title}
                  href={linkCard.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-4 transition hover:bg-slate-200"
                >
                  <div>
                    <p className="text-lg font-bold">{linkCard.title}</p>
                    <p className="text-sm text-slate-600">{linkCard.subtitle}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-800" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10">
          <h2 className="text-xs font-extrabold tracking-[0.2em] text-[#FAA41B]">CHAPTER ADVISORS</h2>
          <div className="mt-3 rounded-2xl border border-white/20 bg-white p-5 text-slate-900 shadow-lg">
            <h3 className="text-center text-4xl font-extrabold">Chapter Advisors</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-7 w-7" />
                  </span>
                  <div>
                    <h4 className="text-2xl font-extrabold">Errick Prince</h4>
                    <p className="text-slate-600">DECA Advisor</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    errick_prince@roundrockisd.org
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    512-428-7234
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Portable 12A
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-7 w-7" />
                  </span>
                  <div>
                    <h4 className="text-2xl font-extrabold">Anthony Ripley</h4>
                    <p className="text-slate-600">Assistant DECA Advisor</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    anthony_ripley@roundrockisd.org
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    512-428-7137
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Room D106
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-7 w-7" />
                  </span>
                  <div>
                    <h4 className="text-2xl font-extrabold">Mr. Manor</h4>
                    <p className="text-slate-600">&nbsp;</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    &nbsp;
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    &nbsp;
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    &nbsp;
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <h2 className="text-xs font-extrabold tracking-[0.2em] text-[#FAA41B]">CHAPTER CALENDAR</h2>
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-lg">
            <iframe
              title="STP DECA Calendar"
              src="https://calendar.google.com/calendar/u/0/embed?color=%23fa573c&src=c_bce3a759bc39d75c49e7601df3195d210a4cf2647902f3f73727a247a7774a38@group.calendar.google.com"
              className="h-[520px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-6 text-center text-xs text-slate-300">
        © 2025 Stony Point DECA · Round Rock ISD · stp_deca@roundrockisd.org
      </footer>
    </div>
  );
}
