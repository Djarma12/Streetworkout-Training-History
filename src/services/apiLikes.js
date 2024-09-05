import supabase from "./supabase";

export async function getLikes() {
  const { data, error } = await supabase.from("likes").select("*").single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateLikes(updatedLikes) {
  const { data, error } = await supabase
    .from("likes")
    .update(updatedLikes)
    .eq("id", updatedLikes.id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
