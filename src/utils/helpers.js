export function currentExerciser({ exercisers, exerciserId }) {
  const [exerciser] = exercisers.filter(
    (exerciser) => exerciser.userid === exerciserId
  );
  console.log(exerciser);
  return exerciser;
}
