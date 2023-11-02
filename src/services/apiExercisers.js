import supabase from "./supabase";

export async function getExercisers() {
  const { data, error } = await supabase
    .from("users")
    .select("nickName, avatar,  userid");

  if (error) throw new Error(error.message);

  return data;
}

export async function getExerciserData(id) {
  console.log(id);
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("userid", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getTraining({ exerciserId }) {
  const { data, error } = await supabase
    .from("trainings")
    .select("*")
    // .select("id, trainingName")
    .eq("userid", exerciserId);

  if (error) throw new Error(error.message);

  return data;
}

export async function getTrainingDetail({ trainingId }) {
  const { data, error } = await supabase
    .from("trainings")
    .select("*")
    .eq("id", trainingId)
    .single();

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
