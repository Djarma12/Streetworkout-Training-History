import supabase from "./supabase";

export async function createTraining(newTraining) {
  const { data, error } = await supabase
    .from("trainings")
    .insert([newTraining])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Training could not be created");
  }

  return data;
}
