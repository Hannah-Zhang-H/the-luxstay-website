import { createClient } from "@supabase/supabase-js";
import { preconnect } from "next/dist/server/app-render/entry-base";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
