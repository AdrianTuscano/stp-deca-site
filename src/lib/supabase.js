import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "").trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim();

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

export const supabaseConfigError = !supabaseUrl
  ? "Supabase URL is missing."
  : !supabaseAnonKey
    ? "Supabase anon key is missing."
    : null;

export const supabase = hasSupabaseConfig ? createClient(supabaseUrl, supabaseAnonKey) : null;
