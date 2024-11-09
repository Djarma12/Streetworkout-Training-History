import { Database } from "./supabaseSchema";

// Product
export type Product = Database["next_auth"]["Tables"]["products"]["Row"];

// User
export type InsertUser = Database["next_auth"]["Tables"]["users"]["Insert"];
