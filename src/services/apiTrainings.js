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

export async function updateTraining({ trainingId, updatedFields }) {
  const { data, error } = await supabase
    .from("trainings")
    .update(updatedFields)
    .eq("id", trainingId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Training could not be updated");
  }

  return data;
}

export async function deleteTraining(trainingId) {
  const { error } = await supabase
    .from("trainings")
    .delete()
    .eq("id", trainingId);

  if (error) {
    console.error(error);
    throw new Error("Training could not be deleted");
  }
}
