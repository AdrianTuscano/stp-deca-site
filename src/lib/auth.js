import { supabase } from "./supabase";

const STUDENT_ID_KEY = "stp_deca_student_id";
const studentIdRegex = /^s\d{6}$/i;

export async function login(studentId, chapterKey) {
  const normalizedStudentId = (studentId || "").trim().toLowerCase();

  if (!studentIdRegex.test(normalizedStudentId)) {
    return { success: false, error: "Use format: s123456" };
  }

  if (chapterKey !== import.meta.env.VITE_CHAPTER_KEY) {
    return { success: false, error: "Invalid chapter key." };
  }

  const { error } = await supabase.from("students").upsert(
    {
      student_id: normalizedStudentId,
      created_at: new Date().toISOString(),
    },
    { onConflict: "student_id" }
  );

  if (error) {
    return { success: false, error: error.message || "Unable to sign in." };
  }

  localStorage.setItem(STUDENT_ID_KEY, normalizedStudentId);
  return { success: true, error: null };
}

export function logout() {
  localStorage.removeItem(STUDENT_ID_KEY);
}

export function getStudentId() {
  return localStorage.getItem(STUDENT_ID_KEY);
}

export function isLoggedIn() {
  return Boolean(getStudentId());
}
