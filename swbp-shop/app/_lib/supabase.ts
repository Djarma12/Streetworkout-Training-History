import { createClient } from "@supabase/supabase-js";
import { Database } from "../_types/supabaseSchema";

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
  { db: { schema: "next_auth" } }
);
