import { format } from "date-fns";

export function currentExerciser({ exercisers, exerciserId }) {
  const [exerciser] = exercisers.filter(
    (exerciser) => exerciser.userid === exerciserId
  );
  console.log(exerciser);
  return exerciser;
}

export function formatDate(date) {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ssXXX");
}

export function formatCurrentDate() {
  return format(new Date(), "MM/dd/yyyy");
}
