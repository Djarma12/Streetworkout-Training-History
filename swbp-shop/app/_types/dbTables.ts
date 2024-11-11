import { Database } from "./supabaseSchema";

// Product
export type Product = Database["next_auth"]["Tables"]["products"]["Row"];
