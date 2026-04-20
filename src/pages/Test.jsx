import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import { getStudentId } from "../lib/auth";

export default function Test() {
  const studentId = getStudentId() || "student";

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900">
      <AppNavbar studentId={studentId} />
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <Construction className="mx-auto h-12 w-12 text-[#2563eb]" />
          <h1 className="mt-4 text-2xl font-bold">Practice Tests Coming Soon</h1>
          <p className="mt-2 text-sm text-slate-600">
            We&apos;re loading up all DECA Plus exams. Check back soon.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 inline-flex rounded-lg bg-[#2563eb] px-4 py-2 font-semibold text-white transition hover:brightness-110"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
