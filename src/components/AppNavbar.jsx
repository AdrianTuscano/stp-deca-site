import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../lib/auth";

export default function AppNavbar({ studentId }) {
  const navigate = useNavigate();

  function handleSignOut() {
    logout();
    navigate("/login");
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/dashboard" className="text-lg font-extrabold text-slate-900">
          STP DECA
        </Link>
        <p className="hidden text-sm font-semibold text-slate-700 md:block">Welcome, {studentId}</p>
        <button
          type="button"
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
      <p className="border-t border-slate-100 px-4 py-2 text-center text-xs font-medium text-slate-600 md:hidden">
        Welcome, {studentId}
      </p>
    </header>
  );
}
