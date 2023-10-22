import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://plpcdcscmncfuatmrffu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBscGNkY3NjbW5jZnVhdG1yZmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODU3NTksImV4cCI6MjAxMDk2MTc1OX0.KDUDoF_45wddhZQuATXJo15t8hBDJnohOQ3QXW4Kp5U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
