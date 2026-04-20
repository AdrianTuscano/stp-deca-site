import { ArrowLeft, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/auth";

const studentIdRegex = /^s\d{6}$/i;

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [chapterKey, setChapterKey] = useState("");
  const [studentIdError, setStudentIdError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validateStudentId(value) {
    if (!studentIdRegex.test(value)) {
      setStudentIdError("Use format: s123456");
      return false;
    }
    setStudentIdError("");
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const normalizedStudentId = studentId.trim().toLowerCase();

    if (!validateStudentId(normalizedStudentId)) {
      return;
    }

    setLoading(true);
    const result = await login(normalizedStudentId, chapterKey);
    setLoading(false);

    if (!result.success) {
      setError(result.error || "Unable to sign in.");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] px-4 py-8 text-white">
      <div className="mx-auto max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      <div className="mx-auto mt-10 w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-xl">
        <p className="text-center text-2xl font-extrabold tracking-wide">STP DECA</p>
        <h1 className="mt-6 text-center text-2xl font-bold">Member Login</h1>
        <p className="mt-2 text-center text-sm text-slate-300">
          Enter your student ID and chapter key to access your dashboard
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="student-id" className="mb-1 block text-sm font-semibold text-slate-200">
              Student ID
            </label>
            <input
              id="student-id"
              type="text"
              value={studentId}
              onChange={(event) => setStudentId(event.target.value.toLowerCase())}
              onBlur={(event) => validateStudentId(event.target.value.trim().toLowerCase())}
              placeholder="s123456"
              autoComplete="off"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none ring-blue-400 focus:ring"
            />
            {studentIdError ? <p className="mt-1 text-xs text-red-400">{studentIdError}</p> : null}
          </div>

          <div>
            <label htmlFor="chapter-key" className="mb-1 block text-sm font-semibold text-slate-200">
              Chapter Key
            </label>
            <input
              id="chapter-key"
              type="password"
              value={chapterKey}
              onChange={(event) => setChapterKey(event.target.value)}
              placeholder="Chapter key"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none ring-blue-400 focus:ring"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg bg-[#3b82f6] px-4 py-2.5 font-bold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : "Sign In"}
          </button>

          <p className="min-h-5 text-sm text-red-400">{error}</p>
        </form>

        <p className="mt-2 text-center text-xs text-slate-400">
          New member? Ask an officer for the chapter key.
        </p>
      </div>
    </div>
  );
}
