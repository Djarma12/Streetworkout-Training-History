import { Database } from "./supabaseSchema";

// Product
export type Product = Database["public"]["Tables"]["products"]["Row"];

// User
export type InsertUser = Database["public"]["Tables"]["users"]["Insert"];
