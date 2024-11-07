import { InsertUser } from "@/app/_types/dbTables";
import { supabase } from "./supabase";

export async function getUser(email: string) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newUser: InsertUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);
  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }
  return data;
}

// export async function loginGoogle() {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: "google",
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }
