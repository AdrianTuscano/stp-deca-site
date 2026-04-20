import {
  Award,
  Book,
  BookOpen,
  CheckSquare,
  FileText,
  Lock,
  Mail,
  Plus,
  Star,
  Trophy,
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
