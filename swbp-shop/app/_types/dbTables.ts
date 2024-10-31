import { Database } from "./supabaseSchema";

export type Product = Database["public"]["Tables"]["products"]["Row"];
