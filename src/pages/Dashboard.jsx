import {
  Award,
  Book,
  BookOpen,
  CheckSquare,
  ExternalLink,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  Plus,
  Star,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import ResourceCard from "../components/ResourceCard";
import { getStudentId } from "../lib/auth";

const resources = [
  {
    title: "DECA Competition Events",
    subtitle: "Official event guides",
    color: "#2563eb",
    href: "https://www.deca.org/high-school-programs/high-school-competitive-events/",
    icon: Trophy,
  },
  {
    title: "TexasDECA.org",
    subtitle: "Texas chapter hub",
    color: "#0d9488",
    href: "https://www.texasdeca.org/",
    icon: Star,
  },
  {
    title: "Medals Gold Legacy",
    subtitle: "RRISD login required",
    color: "#d97706",
    href: "#",
    icon: Award,
  },
  {
    title: "Study Guide Folder",
    subtitle: "RRISD login required",
    color: "#7c3aed",
    href: "#",
    icon: BookOpen,
  },
  {
    title: "All Things DECA",
    subtitle: "Officer access only",
    color: "#374151",
    href: "#",
    icon: Lock,
  },
  {
    title: "DECA Plus",
    subtitle: "errick_prince@ · marketing79",
    color: "#16a34a",
    href: "https://www.decaplus.org/",
    icon: Plus,
  },
  {
    title: "SPHS DECA Handbook",
    subtitle: "Rules & guidelines",
    color: "#dc2626",
    href: "#",
    icon: Book,
  },
  {
    title: "SPHS DECA Culture Guide",
    subtitle: "Our chapter values",
    color: "#0f766e",
    href: "#",
    icon: Users,
  },
];

const meetings = [
  {
    title: "Meeting Minutes Form",
    subtitle: "Submit meeting notes",
    color: "#c2410c",
    href: "#",
    icon: FileText,
  },
  {
    title: "Meeting Attendance Form",
    subtitle: "Mark your attendance",
    color: "#7c3aed",
    href: "#",
    icon: CheckSquare,
  },
];

const membership = [
  {
    title: "Membership Form",
    subtitle: "Sign up here",
    color: "#db2777",
    href: "#",
    icon: FileText,
  },
  {
    title: "Mailing List Request",
    subtitle: "Email Mr. Ripley",
    color: "#2563eb",
    href: "mailto:anthony_ripley@roundrockisd.org",
    icon: Mail,
  },
];

const remindGroups = [
  { year: "SENIORS", handle: "@sphsdeca27", color: "#4f46e5", href: "#" },
  { year: "JUNIORS", handle: "@sphsdeca28", color: "#7c3aed", href: "#" },
  { year: "SOPHOMORES", handle: "@sphsdeca29", color: "#0d9488", href: "#" },
  { year: "FRESHMEN", handle: "@sphsdeca30", color: "#db2777", href: "#" },
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

function SectionLabel({ children }) {
  return <h2 className="text-xs font-extrabold tracking-[0.15em] text-slate-500">{children}</h2>;
}

export default function Dashboard() {
  const studentId = getStudentId() || "student";

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900">
      <AppNavbar studentId={studentId} />

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
        <section>
          <SectionLabel>RESOURCES</SectionLabel>
          <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((card) => (
              <ResourceCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>DECA MEETINGS</SectionLabel>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {meetings.map((card) => (
              <ResourceCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>MEMBERSHIP</SectionLabel>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {membership.map((card) => (
              <ResourceCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>QUICK LINKS</SectionLabel>
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-center text-3xl font-extrabold text-slate-900">Quick Links</h3>
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
                    <p className="text-lg font-bold text-slate-900">{linkCard.title}</p>
                    <p className="text-sm text-slate-600">{linkCard.subtitle}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-800" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionLabel>CHAPTER ADVISORS</SectionLabel>
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-center text-4xl font-extrabold text-slate-900">Chapter Advisors</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-8 w-8" />
                  </span>
                  <div>
                    <h4 className="text-3xl font-extrabold text-slate-900">Errick Prince</h4>
                    <p className="text-3xl text-slate-600">DECA Advisor</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-slate-700">
                  <p className="flex items-center gap-2 text-xl">
                    <Mail className="h-5 w-5" />
                    errick_prince@roundrockisd.org
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <Phone className="h-5 w-5" />
                    512-428-7234
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5" />
                    Portable 12A
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-8 w-8" />
                  </span>
                  <div>
                    <h4 className="text-3xl font-extrabold text-slate-900">Anthony Ripley</h4>
                    <p className="text-3xl text-slate-600">Assistant DECA Advisor</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-slate-700">
                  <p className="flex items-center gap-2 text-xl">
                    <Mail className="h-5 w-5" />
                    anthony_ripley@roundrockisd.org
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <Phone className="h-5 w-5" />
                    512-428-7137
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5" />
                    Room D106
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#123b8f] text-white">
                    <UserRound className="h-8 w-8" />
                  </span>
                  <div>
                    <h4 className="text-3xl font-extrabold text-slate-900">Mr. Manor</h4>
                    <p className="text-3xl text-slate-600">&nbsp;</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-slate-700">
                  <p className="flex items-center gap-2 text-xl">
                    <Mail className="h-5 w-5" />
                    &nbsp;
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <Phone className="h-5 w-5" />
                    &nbsp;
                  </p>
                  <p className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5" />
                    &nbsp;
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section>
          <SectionLabel>CHAPTER CALENDAR</SectionLabel>
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <iframe
              title="STP DECA Calendar"
              src="https://calendar.google.com/calendar/u/0/embed?color=%23fa573c&src=c_bce3a759bc39d75c49e7601df3195d210a4cf2647902f3f73727a247a7774a38@group.calendar.google.com"
              className="h-[520px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </section>

        <section>
          <SectionLabel>JOIN REMIND — PICK YOUR YEAR</SectionLabel>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            {remindGroups.map((group) => (
              <a
                key={group.year}
                href={group.href}
                className="rounded-full px-5 py-3 text-white transition hover:brightness-110"
                style={{ backgroundColor: group.color }}
              >
                <p className="text-sm font-extrabold tracking-wide">{group.year}</p>
                <p className="text-xs text-white/90">{group.handle}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-4 rounded-xl bg-[#1e3a5f] p-6 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">DECA Plus Practice Tests</h3>
              <p className="mt-1 text-sm text-[#FAA41B]">
                Track your answers and see your performance by instructional area
              </p>
            </div>
            <Link
              to="/test"
              className="inline-flex w-fit rounded-lg border border-white px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#1e3a5f]"
            >
              Open Test Tool →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
